import { Scan, Brain, FolderTree, MousePointerClick, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Scan,
      title: "Scan Your Computer",
      description:
        "Point PLR Organizer Pro to your folders. The app scans for PLR files including ZIP archives, PDFs, DOCX, and more. It works with any file format.",
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Analyzes Content",
      description:
        "Our advanced AI reads your content to detect niche categories, license types, and content themes. No manual tagging required.",
    },
    {
      number: "03",
      icon: FolderTree,
      title: "Choose Organization Method",
      description:
        "Organize by niche, license type, or category. Create custom virtual views without moving files around on your computer.",
    },
    {
      number: "04",
      icon: MousePointerClick,
      title: "Click Organize",
      description:
        "Press one button and watch as PLR Organizer Pro creates a perfectly structured folder system and moves your content into place.",
    },
    {
      number: "05",
      icon: Sparkles,
      title: "Edit & Rebrand",
      description:
        "Use built-in Pro tools to customize, rebrand, and optimize your PLR content. Spin text, translate, convert formats, and more.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 animate-fade-in">
            How <span className="gradient-text">PLR Organizer Pro</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            From chaos to organized perfection in 5 simple steps
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-1">
                  <div className="p-8 rounded-xl card-shadow bg-card hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-bold gradient-text">{step.number}</span>
                      <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full h-64 rounded-xl bg-muted/30 flex items-center justify-center border-2 border-dashed border-border">
                    <step.icon className="h-24 w-24 text-muted-foreground/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Example */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 bg-muted/30 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center mb-12">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-xl card-shadow bg-card">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <h3 className="text-xl font-bold">Before</h3>
              </div>
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <div>📁 Downloads/</div>
                <div className="ml-4">📄 plr_package_final_v2.zip</div>
                <div className="ml-4">📄 content-bundle-new.zip</div>
                <div className="ml-4">📄 article_pack_123.docx</div>
                <div>📁 Desktop/</div>
                <div className="ml-4">📄 random_plr.pdf</div>
                <div className="ml-4">📄 untitled_content.zip</div>
                <div>📁 Documents/</div>
                <div className="ml-4">📄 more_plr_stuff.zip</div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-xl card-shadow bg-card glow-primary">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="text-xl font-bold">After</h3>
              </div>
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <div>📁 PLR Library/</div>
                <div className="ml-4">📁 Health & Fitness/</div>
                <div className="ml-8">📄 Nutrition Guide.pdf</div>
                <div className="ml-8">📄 Workout Plans.docx</div>
                <div className="ml-4">📁 Digital Marketing/</div>
                <div className="ml-8">📄 SEO Strategies.pdf</div>
                <div className="ml-8">📄 Social Media Tips.zip</div>
                <div className="ml-4">📁 Personal Development/</div>
                <div className="ml-8">📄 Productivity Hacks.docx</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="mb-6">Ready to Transform Your PLR Workflow?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start organizing your PLR library the smart way
          </p>
          <Button variant="hero" size="xl">
            Download PLR Organizer Pro
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
