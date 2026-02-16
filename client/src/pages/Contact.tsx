import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { PageHeader } from "@/components/PageHeader";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="We're here to answer your questions. Reach out securely below."
        // Unsplash: Abstract communication or desk
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your preferred name" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="name@example.com" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Consultation request, Insurance question, etc." {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you? Please do not include sensitive medical details here."
                            className="min-h-[150px] bg-slate-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isPending}>
                    {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Clinic Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">123 Medical Center Dr.<br />Wellness District, WD 90210</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567<br /><span className="text-sm">Mon-Fri, 8am - 6pm EST</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">care@gendercare.inst</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-200 w-full h-64 rounded-2xl flex items-center justify-center text-slate-400">
                <span className="font-semibold">Interactive Map Placeholder</span>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                <p className="text-sm text-amber-900">
                  <strong>Emergency?</strong> If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room immediately. Do not use this form for urgent medical needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
