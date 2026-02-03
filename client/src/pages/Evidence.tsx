import { PageHeader } from "@/components/PageHeader";
import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Evidence() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Medical Evidence & Research" 
        description="Our clinical practices are grounded in the latest peer-reviewed science and WPATH Standards of Care."
        // Unsplash: Library or research lab abstract
        backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="font-serif text-primary">Commitment to Science</h2>
            <p className="text-muted-foreground">
              Gender-affirming care is a recognized, medically necessary specialty supported by every major medical association including the AMA, APA, and WPATH. We continuously review emerging literature to ensure our surgical techniques and hormonal protocols offer the best safety profiles and long-term outcomes.
            </p>

            <h3 className="font-serif text-primary mt-12">Key Research Areas</h3>
            <div className="grid gap-6 not-prose mt-6">
              {[
                {
                  title: "Long-term Outcomes of Gender-Affirming Surgery",
                  source: "Journal of Sexual Medicine",
                  summary: "Studies consistently show significant improvements in mental health, quality of life, and body satisfaction following gender-affirming procedures."
                },
                {
                  title: "Safety of Hormone Replacement Therapy",
                  source: "The Lancet Diabetes & Endocrinology",
                  summary: "Modern bio-identical hormone regimens, when monitored by specialists, carry manageable risk profiles comparable to other common medications."
                },
                {
                  title: "WPATH Standards of Care (SOC 8)",
                  source: "WPATH.org",
                  summary: "The gold standard clinical guidelines we follow, emphasizing individualized care, informed consent, and multidisciplinary support."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {item.title}
                      </h4>
                      <p className="text-sm font-semibold text-primary/80 mt-1">{item.source}</p>
                      <p className="text-muted-foreground mt-3 text-sm">{item.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
              <h3 className="font-serif text-primary mt-0 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                Informed Consent Model
              </h3>
              <p className="text-muted-foreground mb-4">
                We believe you are the expert on your own experience. While we ensure medical readiness and safety, we operate primarily on an informed consent model for many services, reducing gatekeeping while ensuring you fully understand the risks and benefits of treatment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
