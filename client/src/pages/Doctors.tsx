import { PageHeader } from "@/components/PageHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface DoctorProfile {
  id: number;
  name: string;
  specialty: string;
  credentials: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
}

// Placeholder doctors - will be updated with real data
const doctorsData: DoctorProfile[] = [
  {
    id: 1,
    name: "Dr. [Name]",
    specialty: "Gender-Affirming Surgeon",
    credentials: "MD, Surgical Specialization",
    bio: "Specializing in gender-affirming surgical procedures with over [X] years of experience. Dedicated to providing compassionate, affirming care.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=400",
    email: "doctor1@hospital.com",
    phone: "+1 (XXX) XXX-XXXX"
  },
  {
    id: 2,
    name: "Dr. [Name]",
    specialty: "Facial Reconstruction Specialist",
    credentials: "MD, Board Certified",
    bio: "Expert in facial feminization and masculinization surgery. Committed to natural-looking, affirming results.",
    image: "https://images.unsplash.com/photo-1632833519032-940a88f99e4f?auto=format&fit=crop&q=80&w=400",
    email: "doctor2@hospital.com",
    phone: "+1 (XXX) XXX-XXXX"
  },
  {
    id: 3,
    name: "Dr. [Name]",
    specialty: "Endocrinologist",
    credentials: "MD, Endocrinology Specialization",
    bio: "Specializes in hormone therapy management for gender-affirming care. Provides comprehensive endocrine support throughout transition.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
    email: "doctor3@hospital.com",
    phone: "+1 (XXX) XXX-XXXX"
  },
  {
    id: 4,
    name: "Dr. [Name]",
    specialty: "Gender-Affirming Therapist",
    credentials: "PhD, Clinical Psychology",
    bio: "Provides comprehensive mental health support and readiness assessments. Advocates for patient autonomy and authentic identity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    email: "doctor4@hospital.com",
    phone: "+1 (XXX) XXX-XXXX"
  }
];

export default function Doctors() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <PageHeader
        title="Our Medical Team"
        description="Meet the compassionate, experienced professionals dedicated to your gender-affirming care journey."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Multidisciplinary Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our team of specialized physicians, surgeons, and mental health professionals work collaboratively to provide comprehensive, affirming care.
            </p>
            <p className="text-muted-foreground">
              Each team member is committed to WPATH standards and bringing decades of combined experience in gender-affirming medicine.
            </p>
          </div>

          {/* Doctor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {doctorsData.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-secondary/20 hover:shadow-xl transition-shadow"
              >
                {/* Doctor Image */}
                <div className="h-64 overflow-hidden bg-secondary/10">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-8 bg-white/70 backdrop-blur-sm">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    {doctor.name}
                  </h3>

                  <p className="text-sm font-semibold text-secondary mb-1">
                    {doctor.specialty}
                  </p>

                  <p className="text-xs text-muted-foreground mb-4">
                    {doctor.credentials}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-6 border-t border-secondary/20">
                    {doctor.email && (
                      <a
                        href={`mailto:${doctor.email}`}
                        className="flex items-center gap-3 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {doctor.email}
                      </a>
                    )}

                    {doctor.phone && (
                      <a
                        href={`tel:${doctor.phone}`}
                        className="flex items-center gap-3 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        {doctor.phone}
                      </a>
                    )}

                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      Main Campus
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Schedule Your Consultation
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with one of our specialists to discuss your gender-affirming care goals and options.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">
            Our Commitment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Evidence-Based Care",
                desc: "All treatments grounded in peer-reviewed medical research and WPATH standards."
              },
              {
                title: "Affirming Practice",
                desc: "Respectful of all gender identities and expressions. Pronoun-inclusive. Patient-centered."
              },
              {
                title: "Holistic Support",
                desc: "Integration of surgery, endocrinology, mental health, and social support for comprehensive care."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/70 backdrop-blur-sm rounded-xl border border-secondary/20 text-center"
              >
                <h3 className="font-bold text-primary mb-3 text-lg">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
