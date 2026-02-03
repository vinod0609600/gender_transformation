import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="About Us" 
        description="A center of excellence dedicated to the health and dignity of the transgender and non-binary community."
        // Unsplash: Clean modern hospital architecture
        backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary">Our Commitment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principles of respect, integrity, and medical excellence, the GenderCare Institute was established to provide a holistic healthcare home for gender-diverse individuals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that gender-affirming care is life-saving care. Our facility is designed to be a safe haven where patients are seen, heard, and cared for by a multidisciplinary team of specialists who are leaders in their fields.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Strict adherence to WPATH Standards of Care",
                  "Board-certified surgeons and specialists",
                  "Comprehensive pre- and post-operative support",
                  "Research-driven clinical practices"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Unsplash: Diverse team of doctors in a meeting, calm atmosphere */}
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1000" 
                alt="Our medical team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Our Philosophy</h2>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-muted-foreground leading-relaxed">
            "We don't just perform procedures; we accompany individuals on their journey to self-actualization. Every patient deserves care that affirms their dignity and authenticity."
          </blockquote>
          <div className="mt-8">
            <p className="font-bold text-primary">Dr. Sarah Chen, Medical Director</p>
          </div>
        </div>
      </section>
    </div>
  );
}
