import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import {
  Scan,
  Brain,
  FolderTree,
  Shield,
  Sparkles,
  FileSearch,
  Zap,
  Lock,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import appScreenshot from "@/assets/app-screenshot.jpg";

const Home = () => {
  const features = [
    {
      icon: Scan,
      title: "Smart PLR Scanner",
      description: "Automatically scan your computer for PLR files in any format.",
    },
    {
      icon: Brain,
      title: "AI Niche Detection",
      description: "AI analyzes content to detect niche, topic, and license type.",
    },
    {
      icon: FolderTree,
      title: "Auto-Organization",
      description: "One-click organization into perfectly structured folders.",
    },
    {
      icon: Shield,
      title: "Offline Security",
      description: "100% local processing. Your content never leaves your computer.",
    },
    {
      icon: Sparkles,
      title: "Pro Rebranding Tools",
      description: "Built-in editors to customize and rebrand your PLR content.",
    },
    {
      icon: FileSearch,
      title: "Duplicate Finder",
      description: "Identify and remove duplicate PLR packages instantly.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Content Creator",
      text: "PLR Organizer Pro saved me hours of manual sorting. The AI niche detection is incredibly accurate!",
    },
    {
      name: "John Davis",
      role: "Digital Marketer",
      text: "Finally, a tool that understands PLR chaos. The auto-organization feature is a game-changer.",
    },
    {
      name: "Emma Rodriguez",
      role: "Online Entrepreneur",
      text: "I was drowning in unorganized PLR. This app brought order to my content library in minutes.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">
              Organize, Scan & Rebrand Your <span className="gradient-text">PLR Content</span> with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A complete desktop app that finds, classifies, and optimizes your Private Label Rights packages — 
              100% offline and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Download App
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Powerful Features at Your Fingertips</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your PLR library efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshot */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <img
              src={appScreenshot}
              alt="PLR Organizer Pro Application Interface"
              className="rounded-2xl card-shadow w-full animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Why PLR Organizer Pro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why PLR Organizer Pro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Local-First Privacy</h3>
                  <p className="text-muted-foreground">
                    All processing happens on your computer. No cloud uploads, no data sharing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">AI-Powered Intelligence</h3>
                  <p className="text-muted-foreground">
                    Advanced AI detects niche, license type, and content category automatically.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FolderTree className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Smart Organization</h3>
                  <p className="text-muted-foreground">
                    Create virtual views by niche, category, or license without moving files.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Process hundreds of PLR packages in minutes with intelligent scanning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl card-shadow bg-card animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="mb-6">Ready to Organize Your PLR Library?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who have transformed their PLR workflow
          </p>
          <Button variant="hero" size="xl">
            Download PLR Organizer Pro
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
