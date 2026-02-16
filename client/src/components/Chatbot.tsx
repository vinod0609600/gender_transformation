import { useState } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    // Services
    { category: "Services", question: "What services do you offer?", answer: "We offer comprehensive gender-affirming care including chest surgery, genital surgery, facial reconstruction, voice therapy, body contouring, and non-surgical care like hormone therapy." },
    { category: "Services", question: "Do you offer facial feminization surgery?", answer: "Yes, we offer comprehensive facial feminization surgery including forehead contouring, rhinoplasty, jaw contouring, and tracheal shave." },

    // Appointments
    { category: "Appointments", question: "How do I book a consultation?", answer: "You can book a consultation by visiting our Contact page or calling us at +1 (555) 123-4567. We offer both in-person and virtual consultations." },
    { category: "Appointments", question: "What should I bring to my first appointment?", answer: "Please bring a valid ID, insurance information, any relevant medical records, and a list of current medications." },

    // Insurance
    { category: "Insurance", question: "Do you accept insurance?", answer: "We work with most major insurance providers. Our team can help verify your coverage and benefits. Contact us for specific insurance questions." },
    { category: "Insurance", question: "What if my insurance doesn't cover the procedure?", answer: "We offer financing options and payment plans. Our financial counselors can discuss all available options with you." },

    // International
    { category: "International", question: "Do you accept international patients?", answer: "Yes! We welcome international patients and provide comprehensive support including visa letters, interpretation services, and accommodation assistance." },
    { category: "International", question: "Do you offer virtual consultations?", answer: "Yes, we offer secure video consultations for initial assessments, making it easier for international and remote patients." },

    // General
    { category: "General", question: "What are your hours?", answer: "We're open Monday through Friday, 8am to 6pm EST. For emergencies, please call 911 or go to your nearest emergency room." },
    { category: "General", question: "Where are you located?", answer: "We're located at 123 Medical Center Dr., Wellness District, WD 90210. View our Contact page for directions." },
];

const categories = ["All", "Services", "Appointments", "Insurance", "International", "General"];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
        { text: "Hello! I'm here to help answer common questions. Choose a category or ask a question below.", isBot: true }
    ]);

    const filteredFAQs = selectedCategory === "All"
        ? faqData
        : faqData.filter(faq => faq.category === selectedCategory);

    const handleQuestionClick = (faq: FAQItem) => {
        setMessages(prev => [
            ...prev,
            { text: faq.question, isBot: false },
            { text: faq.answer, isBot: true }
        ]);
    };

    const resetChat = () => {
        setMessages([
            { text: "Hello! I'm here to help answer common questions. Choose a category or ask a question below.", isBot: true }
        ]);
        setSelectedCategory("All");
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
                    aria-label="Open chat"
                >
                    <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-secondary/20">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-accent text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">FAQ Assistant</h3>
                                <p className="text-xs text-white/80">Ask me anything</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Category Filter */}
                    <div className="p-3 bg-gradient-to-b from-secondary/10 to-background border-b flex gap-2 overflow-x-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                        ? "bg-primary text-white"
                                        : "bg-white border border-secondary/20 text-muted-foreground hover:border-primary/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-background to-secondary/5">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${msg.isBot
                                            ? "bg-white border border-secondary/20 text-foreground"
                                            : "bg-gradient-to-r from-primary to-accent text-white"
                                        }`}
                                >
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Suggestions */}
                    <div className="p-3 border-t bg-white space-y-2 max-h-[200px] overflow-y-auto">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                            Common Questions:
                        </p>
                        {filteredFAQs.slice(0, 4).map((faq, i) => (
                            <button
                                key={i}
                                onClick={() => handleQuestionClick(faq)}
                                className="w-full text-left p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors text-sm flex items-center justify-between group"
                            >
                                <span className="text-foreground">{faq.question}</span>
                                <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t bg-gradient-to-b from-background to-secondary/10">
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={resetChat}
                                className="flex-1 text-xs"
                            >
                                Reset Chat
                            </Button>
                            <Link href="/contact" className="flex-1">
                                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-xs">
                                    <Send className="w-3 h-3 mr-1" />
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
