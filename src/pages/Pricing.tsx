import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const features = [
    { name: "Local Scanning", free: true, pro: true },
    { name: "AI Niche Detection", free: true, pro: true },
    { name: "Auto Organization", free: true, pro: true },
    { name: "Basic File Converter", free: true, pro: true },
    { name: "Duplicate Finder", free: false, pro: true },
    { name: "HTML Sales Funnel Editor", free: false, pro: true },
    { name: "Content Spinner", free: false, pro: true },
    { name: "SEO Analyzer", free: false, pro: true },
    { name: "Brand Kit Tool", free: false, pro: true },
    { name: "Multi-Language Translator", free: false, pro: true },
    { name: "OCR Text Extraction", free: false, pro: true },
    { name: "Batch Editor", free: false, pro: true },
    { name: "Uniqueness Meter", free: false, pro: true },
    { name: "License Tracker Pro", free: false, pro: true },
    { name: "Priority Support", free: false, pro: true },
    { name: "Lifetime Updates", free: false, pro: true },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 animate-fade-in">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Start free, upgrade to Pro when you're ready for advanced features
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="p-8 rounded-2xl card-shadow bg-card animate-fade-in">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-muted-foreground">forever</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                Perfect for getting started with PLR organization
              </p>
              <Button variant="outline" size="lg" className="w-full mb-8">
                Download Free Version
              </Button>
              <div className="space-y-3">
                <p className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  What's Included:
                </p>
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 rounded-2xl bg-card glow-primary animate-fade-in border-2 border-primary">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full gradient-bg text-white text-sm font-semibold">
                  🔥 70% Launch Discount
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-text">$47</span>
                  <span className="text-muted-foreground line-through">$157</span>
                </div>
                <span className="text-sm text-muted-foreground">one-time payment</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Unlock all professional tools and lifetime updates
              </p>
              <Button variant="gradient" size="lg" className="w-full mb-8">
                Get Pro Access Now
              </Button>
              <div className="space-y-3">
                <p className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Everything in Free, Plus:
                </p>
                {features.slice(4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-12">Detailed Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full rounded-xl card-shadow">
              <thead>
                <tr className="bg-muted/30">
                  <th className="text-left p-4 rounded-tl-xl">Feature</th>
                  <th className="text-center p-4">Free</th>
                  <th className="text-center p-4 rounded-tr-xl">Pro</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {features.map((feature, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.free ? (
                        <Check className="h-5 w-5 text-primary inline" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground inline" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-5 w-5 text-primary inline" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="p-8 rounded-2xl bg-muted/30">
            <h2 className="mb-4">🔒 7-Day Money-Back Guarantee</h2>
            <p className="text-lg text-muted-foreground">
              Try PLR Organizer Pro risk-free. If you're not completely satisfied within 7 days, 
              we'll refund 100% of your purchase. No questions asked.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
