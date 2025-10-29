import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  Palette,
  RefreshCw,
  SearchCheck,
  FileText,
  Gauge,
  Languages,
  FileType,
  ScanLine,
  Code,
  PenTool,
  Pencil,
} from "lucide-react";

const Features = () => {
  const tools = [
    {
      icon: Palette,
      title: "Brand Kit Tool",
      description: "Create and manage your brand assets. Store logos, colors, fonts, and style guides for consistent rebranding across all PLR content.",
      cta: "Explore Brand Kit",
    },
    {
      icon: RefreshCw,
      title: "Content Spinner",
      description: "AI-powered content spinning that creates unique variations while maintaining readability and meaning. Perfect for avoiding duplicate content.",
      cta: "Try Content Spinner",
    },
    {
      icon: SearchCheck,
      title: "SEO Analyzer",
      description: "Analyze your PLR content for SEO optimization. Get keyword suggestions, readability scores, and optimization recommendations.",
      cta: "Analyze Content",
    },
    {
      icon: FileText,
      title: "License Tracker",
      description: "Never lose track of PLR licenses again. Automatically detect and categorize license types with usage restrictions and permissions.",
      cta: "Track Licenses",
    },
    {
      icon: Gauge,
      title: "Uniqueness Meter",
      description: "Check content originality with our advanced uniqueness detection. Ensure your rebranded content stands out from the original.",
      cta: "Check Uniqueness",
    },
    {
      icon: Languages,
      title: "Multi-Language Translator",
      description: "Translate PLR content into 50+ languages with AI precision. Expand your reach to global markets effortlessly.",
      cta: "Start Translating",
    },
    {
      icon: FileType,
      title: "File Converter",
      description: "Convert between PDF, DOCX, TXT, HTML, and more. Batch convert entire PLR packages with one click.",
      cta: "Convert Files",
    },
    {
      icon: ScanLine,
      title: "OCR Tool",
      description: "Extract text from images and scanned documents. Convert image-based PLR into editable, searchable content.",
      cta: "Extract Text",
    },
    {
      icon: Code,
      title: "HTML Editor",
      description: "Visual HTML editor with GrapesJS integration. Create stunning sales pages and landing pages from PLR content.",
      cta: "Edit HTML",
    },
    {
      icon: PenTool,
      title: "Batch Editor",
      description: "Edit multiple files simultaneously. Find and replace text, update headers, footers, and links across your entire PLR library.",
      cta: "Batch Edit",
    },
    {
      icon: Pencil,
      title: "PLR Editor",
      description: "All-in-one PLR content editor. Rich text editing, formatting, media insertion, and real-time preview. Coming soon!",
      cta: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 animate-fade-in">
            Complete <span className="gradient-text">PLR Tools Suite</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Professional tools designed specifically for PLR content management, organization, and rebranding
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="group p-8 rounded-xl card-shadow bg-card hover:scale-105 transition-all duration-300 hover:glow-primary h-full flex flex-col">
                  <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:animate-float">
                    <tool.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{tool.description}</p>
                  <Button
                    variant={tool.cta === "Coming Soon" ? "outline" : "gradient"}
                    className="w-full"
                    disabled={tool.cta === "Coming Soon"}
                  >
                    {tool.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl gradient-bg text-white">
            <h2 className="mb-4 text-white">Unlock All Pro Features</h2>
            <p className="text-lg mb-8 text-white/90">
              Get lifetime access to all current and future tools with PLR Organizer Pro
            </p>
            <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90">
              Upgrade to Pro - 70% Off
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
