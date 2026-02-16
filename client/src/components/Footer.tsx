import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary/50 via-background to-secondary/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/assets/logo-v4.png" alt="GenderCare Institute" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing compassionate, evidence-based gender-affirming care in a supportive and safe environment. Committed to WPATH standards of care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/journey" className="text-sm text-muted-foreground hover:text-primary transition-colors">Patient Journey</Link></li>
              <li><Link href="/international" className="text-sm text-muted-foreground hover:text-primary transition-colors">International Patients</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/chest" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chest Surgery</Link></li>
              <li><Link href="/services/genital" className="text-sm text-muted-foreground hover:text-primary transition-colors">Genital Surgery</Link></li>
              <li><Link href="/services/facial" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facial Reconstruction</Link></li>
              <li><Link href="/services/voice" className="text-sm text-muted-foreground hover:text-primary transition-colors">Voice Therapy</Link></li>
              <li><Link href="/services/body-contouring" className="text-sm text-muted-foreground hover:text-primary transition-colors">Body Contouring</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>123 Medical Center Dr.<br />Wellness District, WD 90210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>care@gendercare.inst</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Fri: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 GenderCare Institute. All rights reserved.
            </p>
            <div className="text-xs text-muted-foreground max-w-md text-center md:text-right">
              <p>Disclaimer: The medical content on this website is for informational purposes only and does not substitute professional medical advice, diagnosis, or treatment.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
