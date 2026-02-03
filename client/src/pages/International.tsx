import { PageHeader } from "@/components/PageHeader";
import { Plane, Globe, Languages, Building2 } from "lucide-react";

export default function International() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="International Patients" 
        description="Welcoming patients from around the world with dedicated logistical support and concierge services."
        // Unsplash: Airplane wing or globe abstract
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary">Seamless Care Across Borders</h2>
              <p className="text-lg text-muted-foreground">
                Traveling for surgery is a significant decision. Our International Patient Center helps manage the logistics so you can focus entirely on your health and recovery.
              </p>
              
              <div className="grid gap-6">
                {[
                  { icon: Plane, title: "Visa & Travel Assistance", desc: "We provide medical invitation letters for visa applications and can advise on travel arrangements." },
                  { icon: Building2, title: "Accommodation Partners", desc: "Discounted rates at nearby hotels and recovery centers specifically equipped for post-op needs." },
                  { icon: Languages, title: "Interpretation Services", desc: "Medical interpreters available for consultation and hospital stays in over 20 languages." },
                  { icon: Globe, title: "Virtual Consultations", desc: "Initial assessments done via secure video call before you ever leave home." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border hover:shadow-sm transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border h-fit">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Plan Your Trip</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">1. Virtual Consult</h4>
                  <p className="text-sm text-muted-foreground">Book a video call to confirm candidacy and receive a cost estimate.</p>
                </div>
                <div className="w-full h-px bg-slate-200" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">2. Scheduling & Deposit</h4>
                  <p className="text-sm text-muted-foreground">Secure your surgery date. We recommend arriving 2-3 days before surgery.</p>
                </div>
                <div className="w-full h-px bg-slate-200" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">3. Recommended Stay</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Chest Surgery:</strong> 7-10 days in country.<br/>
                    <strong>Genital Surgery:</strong> 3-4 weeks in country.<br/>
                    <strong>Facial Surgery:</strong> 10-14 days in country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
