import { Link } from "wouter";
import { ArrowRight, Heart, Activity, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Calm medical consultation scene, abstract blur */}
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2000"
            alt="Comfortable care environment" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-primary/10 rounded-full">
              Excellence in Gender-Affirming Care
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
              Compassionate, <br/> Evidence-Based Care
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We provide comprehensive medical and surgical services in a supportive, inclusive environment dedicated to your authentic journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-primary hover:bg-primary/90">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-primary text-primary hover:bg-primary/5">
                  Learn About Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission/Trust Indicators */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "WPATH Certified", desc: "Adhering to international standards of care for health and safety." },
              { icon: Users, title: "Multidisciplinary Team", desc: "Surgeons, endocrinologists, and counselors working together for you." },
              { icon: Heart, title: "Inclusive Care", desc: "A safe, respectful space for every individual, every identity." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/10 hover:bg-secondary/20 transition-colors"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Comprehensive Care Services</h2>
            <p className="text-lg text-muted-foreground">From initial consultation through recovery, our holistic approach ensures your physical and emotional well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Chest Surgery", desc: "Masculinizing and feminizing chest reconstruction procedures.", link: "/services/chest", color: "bg-blue-50" },
              { title: "Genital Surgery", desc: "Advanced surgical options focused on function and sensation.", link: "/services/genital", color: "bg-green-50" },
              { title: "Facial Reconstruction", desc: "Facial feminization and masculinization surgeries.", link: "/services/facial", color: "bg-amber-50" },
              { title: "Voice Therapy", desc: "Speech pathology and surgical interventions for authentic voice.", link: "/services/voice", color: "bg-purple-50" },
              { title: "Non-Surgical Care", desc: "Hormone therapy, counseling, and ongoing support.", link: "/services/non-surgical", color: "bg-pink-50" },
              { title: "Patient Journey", desc: "Understanding the step-by-step process of care.", link: "/journey", color: "bg-slate-100" },
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <div className={`group p-8 rounded-2xl h-full border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer ${service.color}`}>
                  <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <div className="flex items-center text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Our compassionate team is here to listen, answer your questions, and guide you through every step of the process.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full text-lg font-semibold text-primary hover:bg-white">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
