import { useRoute } from "wouter";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Info } from "lucide-react";

// Service data collection
const servicesData = {
  chest: {
    title: "Chest Surgery",
    desc: "Expert masculinizing and feminizing chest reconstruction procedures designed for natural, affirming results.",
    // Unsplash: Minimalist abstract shapes, soft blue
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Masculinizing Chest Surgery</h3>
          <p className="text-muted-foreground mb-4">Often referred to as "top surgery," this procedure involves the removal of breast tissue to create a more masculine chest contour. Our surgeons use various techniques (Double Incision, Keyhole, Periareolar) tailored to your anatomy and goals to minimize scarring and preserve sensation whenever possible.</p>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Feminizing Breast Augmentation</h3>
          <p className="text-muted-foreground mb-4">This procedure enhances breast size and shape using silicone or saline implants. We focus on creating a natural profile that balances with your chest width and overall body frame.</p>
        </div>
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
          <h4 className="flex items-center gap-2 font-bold text-amber-900 mb-2">
            <Info className="h-5 w-5" /> Recovery Overview
          </h4>
          <p className="text-amber-800/80 text-sm">Most patients return to light activities within 1 week and full exercise by 6 weeks. A dedicated post-op care team will monitor your healing process closely.</p>
        </div>
      </div>
    )
  },
  genital: {
    title: "Genital Surgery",
    desc: "Complex reconstructive surgeries focused on functionality, sensation, and aesthetic alignment.",
    // Unsplash: Abstract fluid art, green tones
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000",
    content: (
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">Our surgical team specializes in advanced genital reconstruction, offering state-of-the-art procedures with a focus on urinary function, sensation, and aesthetics.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold text-primary mb-3">Vaginoplasty</h3>
            <p className="text-sm text-muted-foreground">Creation of a vaginal cavity and vulva using penile inversion or peritoneal pull-through techniques. Priorities include depth, sensation, and natural appearance.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold text-primary mb-3">Phalloplasty & Metoidioplasty</h3>
            <p className="text-sm text-muted-foreground">Creation of a phallus using local tissue (metoidioplasty) or tissue grafts (phalloplasty). Options for urethral lengthening and scrotoplasty available.</p>
          </div>
        </div>
      </div>
    )
  },
  facial: {
    title: "Facial & Reconstructive",
    desc: "Facial Feminization Surgery (FFS) and masculinization procedures to align facial features with identity.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground">The face is often the most visible marker of gender. Our craniofacial surgeons perform precise bone and soft tissue contouring.</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Forehead Contouring:</strong> Reducing the brow ridge for a smoother, more feminine profile.</li>
          <li><strong>Rhinoplasty:</strong> Reshaping the nose to balance facial proportions.</li>
          <li><strong>Mandible/Chin Contouring:</strong> Tapering the jawline or augmenting it for desired definition.</li>
          <li><strong>Tracheal Shave:</strong> Reducing the prominence of the Adam's apple.</li>
        </ul>
      </div>
    )
  },
  voice: {
    title: "Voice & Communication",
    desc: "Helping you find a voice that resonates with your true self through therapy and surgery.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground">Communication is more than just pitch. Our speech-language pathologists work on resonance, intonation, and non-verbal cues.</p>
        <div className="p-6 bg-slate-50 rounded-xl">
          <h3 className="font-bold text-primary mb-2">Surgical Options</h3>
          <p className="text-muted-foreground text-sm">For those where therapy alone isn't enough, we offer glottoplasty and other vocal cord surgeries to permanently elevate pitch.</p>
        </div>
      </div>
    )
  },
  "non-surgical": {
    title: "Non-Surgical Care",
    desc: "Hormone replacement therapy, mental health support, and wellness services.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground">Surgery is just one part of the picture. We provide comprehensive endocrine care managed by specialists experienced in HRT.</p>
        <h3 className="text-xl font-bold text-primary">Holistic Support</h3>
        <p className="text-muted-foreground">Our counselors provide WPATH-compliant readiness assessments, pre-surgical support, and ongoing therapy to ensure mental well-being throughout your transition.</p>
      </div>
    )
  },
  "body-contouring": {
    title: "Body Contouring",
    desc: "Comprehensive body sculpting procedures to enhance body proportions and achieve your desired silhouette.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Body Contouring Overview</h3>
          <p className="text-muted-foreground mb-4">Body contouring procedures are designed to enhance your natural body proportions and create harmonious body lines that align with your gender identity. These procedures complement other surgical interventions and help achieve your ideal aesthetic goals.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h4 className="text-lg font-bold text-primary mb-3">Liposuction & Sculpting</h4>
            <p className="text-sm text-muted-foreground">Strategic fat removal and body sculpting to refine waist definition, contour hips, and enhance overall body shape. Using advanced tumescent and ultrasound-assisted techniques for optimal results.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h4 className="text-lg font-bold text-primary mb-3">Hip & Buttock Enhancement</h4>
            <p className="text-sm text-muted-foreground">Brazilian buttock lift and hip enhancement through fat grafting or implants to create feminine curves or masculine definition based on your goals.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h4 className="text-lg font-bold text-primary mb-3">Abdominoplasty</h4>
            <p className="text-sm text-muted-foreground">Tummy tuck procedures to remove excess skin and tighten abdominal muscles, creating a smooth, contoured midsection.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h4 className="text-lg font-bold text-primary mb-3">Thigh & Arm Contouring</h4>
            <p className="text-sm text-muted-foreground">Skin tightening and fat removal from thighs and arms to create sleek, toned lines that complement your overall body transformation.</p>
          </div>
        </div>
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
          <h4 className="flex items-center gap-2 font-bold text-amber-900 mb-2">
            <Info className="h-5 w-5" /> Recovery & Results
          </h4>
          <p className="text-amber-800/80 text-sm">Most patients can resume light activities within 1-2 weeks and see final results within 3-6 months as swelling subsides. Compression garments support optimal healing and contouring.</p>
        </div>
      </div>
    )
  }
};

export default function Services() {
  const [match, params] = useRoute("/services/:type");
  const type = params?.type as keyof typeof servicesData;
  const service = servicesData[type];

  if (!match || !service) {
    return <div className="text-center py-20">Service not found. <Link href="/" className="text-primary underline">Go Home</Link></div>;
  }

  return (
    <div className="min-h-screen pb-20">
      <PageHeader 
        title={service.title} 
        description={service.desc}
        backgroundImage={service.image}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {service.content}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-secondary/20 p-8 rounded-2xl sticky top-24">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Ready to discuss options?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Every journey is unique. Schedule a consultation to discuss your goals with our specialists.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-3">Book Consultation</Button>
              </Link>
              <Link href="/journey">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">View Patient Journey</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
