import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The care I received was absolutely life-changing. The team made me feel seen and respected from day one.",
    name: "Alex M.",
    procedure: "Chest Reconstruction"
  },
  {
    quote: "Dr. Smith and the staff are incredible. I finally feel like myself. The recovery process was smooth and well-guided.",
    name: "Jordan T.",
    procedure: "Facial Feminization"
  },
  {
    quote: "A truly inclusive and safe environment. I can't thank the specialized counselors enough for their support.",
    name: "Casey R.",
    procedure: "Hormone Therapy & Counseling"
  },
  {
    quote: "Professional, skilled, and deeply compassionate. The results exceeded my expectations.",
    name: "Taylor S.",
    procedure: "Body Contouring"
  },
  {
    quote: "Navigating this journey is hard, but having a medical team that truly understands made all the difference.",
    name: "Jamie L.",
    procedure: "Voice Therapy"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from individuals who entrusted us with their care.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <Card className="h-full border-secondary/20 bg-white hover:shadow-md transition-shadow">
                      <CardContent className="flex flex-col p-6 h-full">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-muted-foreground mb-6 flex-grow italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-auto">
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                            {testimonial.procedure}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
