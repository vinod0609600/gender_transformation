import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Download, Search, Eye, EyeOff, Trash2 } from "lucide-react";
import * as XLSX from "xlsx";

interface Inquiry {
    id: number;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    createdAt: string;
}

// Simple password - in production, use proper authentication
const ADMIN_PASSWORD = "admin123"; // You can change this

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            fetchInquiries();
        }
    }, [isAuthenticated]);

    const fetchInquiries = async () => {
        setIsLoading(true);
        try {
            console.log("Fetching inquiries from /api/inquiries...");
            const response = await fetch("/api/inquiries");
            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("Received data:", data);
            console.log("Number of inquiries:", data.length);
            setInquiries(data);
        } catch (error) {
            console.error("Error fetching inquiries:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setPassword("");
        } else {
            alert("Incorrect password");
        }
    };

    const handleDelete = async (id: number, name: string) => {
        if (!confirm(`Are you sure you want to delete the inquiry from "${name}"?`)) {
            return;
        }

        try {
            console.log("Deleting inquiry:", id);
            const response = await fetch(`/api/inquiries/${id}`, {
                method: "DELETE",
            });

            console.log("Delete response status:", response.status);
            const data = await response.json().catch(() => null);
            console.log("Delete response data:", data);

            if (response.ok) {
                console.log("Delete successful, refreshing list...");
                // Refresh the inquiries list
                await fetchInquiries();
            } else {
                alert(`Failed to delete inquiry: ${data?.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("Error deleting inquiry:", error);
            alert("Error deleting inquiry. Check console for details.");
        }
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            inquiries.map((inquiry, index) => ({
                "S.No": index + 1,
                Name: inquiry.name,
                Email: inquiry.email,
                Phone: inquiry.phone || "N/A",
                Subject: inquiry.subject,
                Message: inquiry.message,
                "Date Submitted": new Date(inquiry.createdAt).toLocaleString(),
            }))
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");

        const fileName = `consultations_${new Date().toISOString().split("T")[0]}.xlsx`;
        XLSX.writeFile(workbook, fileName);
    };

    const filteredInquiries = inquiries.filter(
        (inquiry) =>
            inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/10 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-secondary/20">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Lock className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-serif font-bold text-primary text-center mb-2">
                            Admin Dashboard
                        </h1>
                        <p className="text-muted-foreground text-center mb-6 text-sm">
                            Enter password to access
                        </p>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="pr-10"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                                Sign In
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-secondary/20 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-primary mb-2">
                                Admin Dashboard
                            </h1>
                            <p className="text-muted-foreground">
                                Consultation Inquiries Management
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                onClick={fetchInquiries}
                                variant="outline"
                                className="border-primary/50"
                            >
                                Refresh
                            </Button>
                            <Button
                                onClick={exportToExcel}
                                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                                disabled={inquiries.length === 0}
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Export to Excel
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-secondary/20 mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search by name, email, or subject..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20">
                        <p className="text-sm font-medium text-primary mb-1">Total Inquiries</p>
                        <p className="text-3xl font-bold text-primary">{inquiries.length}</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-2xl border border-accent/20">
                        <p className="text-sm font-medium text-accent mb-1">Filtered Results</p>
                        <p className="text-3xl font-bold text-accent">{filteredInquiries.length}</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-2xl border border-secondary/20">
                        <p className="text-sm font-medium text-muted-foreground mb-1">Latest Today</p>
                        <p className="text-3xl font-bold text-foreground">
                            {inquiries.filter(i => new Date(i.createdAt).toDateString() === new Date().toDateString()).length}
                        </p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-secondary/20 overflow-hidden">
                    {isLoading ? (
                        <div className="p-12 text-center text-muted-foreground">
                            Loading inquiries...
                        </div>
                    ) : filteredInquiries.length === 0 ? (
                        <div className="p-12 text-center text-muted-foreground">
                            {searchTerm ? "No inquiries match your search" : "No inquiries yet"}
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-secondary/20">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            S.No
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            Phone
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            Subject
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            Message
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-secondary/10">
                                    {filteredInquiries.map((inquiry, index) => (
                                        <tr key={inquiry.id} className="hover:bg-secondary/5 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                                                {inquiry.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                                                {inquiry.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                                                {inquiry.phone || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-foreground">
                                                {inquiry.subject}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">
                                                {inquiry.message}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                {new Date(inquiry.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(inquiry.id, inquiry.name)}
                                                    className="bg-red-500 hover:bg-red-600"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
