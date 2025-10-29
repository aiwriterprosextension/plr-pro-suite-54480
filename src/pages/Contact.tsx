import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 animate-fade-in">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Have questions? We're here to help. Reach out to our support team.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-xl card-shadow bg-card animate-fade-in">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Our team typically responds within 24 hours
              </p>
              <a
                href="mailto:support@plrorganizerpro.com"
                className="text-primary hover:underline"
              >
                support@plrorganizerpro.com
              </a>
            </div>

            <div className="p-6 rounded-xl card-shadow bg-card animate-fade-in">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Support Hours</h3>
              <p className="text-muted-foreground text-sm">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM EST
              </p>
            </div>

            <div className="p-6 rounded-xl card-shadow bg-card animate-fade-in">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get instant answers during business hours
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl card-shadow bg-card animate-fade-in"
            >
              <h2 className="mb-6">Send Us a Message</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your question or issue..."
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl card-shadow bg-card">
              <h3 className="font-bold mb-2">Is my data secure?</h3>
              <p className="text-muted-foreground">
                Yes! PLR Organizer Pro processes everything locally on your computer. 
                Your content never leaves your device, ensuring complete privacy and security.
              </p>
            </div>
            <div className="p-6 rounded-xl card-shadow bg-card">
              <h3 className="font-bold mb-2">What file formats are supported?</h3>
              <p className="text-muted-foreground">
                We support ZIP, PDF, DOCX, TXT, HTML, and many more formats. 
                The app can scan and organize virtually any PLR content format.
              </p>
            </div>
            <div className="p-6 rounded-xl card-shadow bg-card">
              <h3 className="font-bold mb-2">Can I try Pro features before buying?</h3>
              <p className="text-muted-foreground">
                Yes! Download the free version first. When you're ready, upgrade to Pro 
                with our 7-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
