import { Link } from "wouter";
import Testimonials from "@/components/Testimonials";
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
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=400"
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
              Compassionate, <br /> Evidence-Based Care
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
      <section className="py-16 bg-gradient-to-b from-white/60 to-transparent border-b backdrop-blur-sm">
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
                className="p-6 rounded-2xl bg-white/40 border border-primary/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
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
      <section className="py-24 bg-gradient-to-br from-secondary/40 via-transparent to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Comprehensive Care Services</h2>
            <p className="text-lg text-muted-foreground">From initial consultation through recovery, our holistic approach ensures your physical and emotional well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chest Surgery",
                desc: "Masculinizing and feminizing chest reconstruction procedures.",
                link: "/services/chest"
              },
              {
                title: "Genital Surgery",
                desc: "Advanced surgical options focused on function and sensation.",
                link: "/services/genital"
              },
              {
                title: "Facial Reconstruction",
                desc: "Facial feminization and masculinization surgeries.",
                link: "/services/facial"
              },
              {
                title: "Voice Therapy",
                desc: "Speech pathology and surgical interventions for authentic voice.",
                link: "/services/voice"
              },
              {
                title: "Body Contouring",
                desc: "Body sculpting and proportioning procedures for your desired silhouette.",
                link: "/services/body-contouring"
              },
              {
                title: "Non-Surgical Care",
                desc: "Hormone therapy, counseling, and ongoing support.",
                link: "/services/non-surgical"
              },
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <div className="group rounded-2xl h-full bg-white border border-transparent shadow-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col">
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                    <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Preview */}
      <section className="py-24 bg-gradient-to-tl from-background via-white/50 to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Meet Our Medical Team</h2>
            <p className="text-lg text-muted-foreground">Our experienced, compassionate specialists are dedicated to providing you with the highest standard of gender-affirming care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Gender-Affirming Surgeon", specialty: "Surgical Procedures", color: "bg-blue-50" },
              { name: "Facial Specialist", specialty: "Facial Reconstruction", color: "bg-amber-50" },
              { name: "Endocrinologist", specialty: "Hormone Management", color: "bg-green-50" },
              { name: "Mental Health Professional", specialty: "Counseling & Support", color: "bg-purple-50" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl text-center border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 ${member.color}`}
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                <h3 className="font-serif font-bold text-lg mb-1 text-primary">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.specialty}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/doctors">
              <Button size="lg" className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90">
                View Full Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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
