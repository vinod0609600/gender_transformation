import { PageHeader } from "@/components/PageHeader";
import { ClipboardList, Stethoscope, BedDouble, HeartHandshake } from "lucide-react";

export default function Journey() {
  const steps = [
    {
      icon: ClipboardList,
      title: "1. Inquiry & Consultation",
      desc: "Your journey starts with a safe, confidential conversation. We review your medical history, discuss your goals, and explain options. You'll meet with surgeons and care coordinators to build a personalized plan."
    },
    {
      icon: Stethoscope,
      title: "2. Pre-operative Assessment",
      desc: "Ensuring you are physically and emotionally ready. This includes medical labs, WPATH readiness letters from mental health providers, and pre-op education classes so you know exactly what to expect."
    },
    {
      icon: BedDouble,
      title: "3. Treatment & Surgery",
      desc: "Our expert team performs your procedure in our accredited surgical center. Patient safety is our top priority. We use advanced techniques to minimize pain and speed up healing."
    },
    {
      icon: HeartHandshake,
      title: "4. Recovery & Aftercare",
      desc: "Healing continues long after discharge. We provide regular follow-up appointments, wound care guidance, and access to 24/7 nursing support to ensure optimal results."
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Your Patient Journey" 
        description="A step-by-step guide to what you can expect when you choose us for your care."
        // Unsplash: Stepping stones or path, abstract
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{step.desc}</p>
                </div>
                
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Support Every Step of the Way</h2>
          <p className="text-muted-foreground mb-8">
            Our Care Coordinators act as your personal guide, handling insurance authorizations, scheduling, and answering any non-medical questions you might have.
          </p>
        </div>
      </section>
    </div>
  );
}
