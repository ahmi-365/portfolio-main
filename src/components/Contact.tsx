import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.gmail || !formData.message) {
    toast({
      title: "Missing Information",
      description: "Please fill in all fields before submitting.",
      variant: "destructive",
    });
    return;
  }

  // Success Toast – JSX in description (safe)
  toast({
    title: "Message Sent!",
    description: (
      <div className="flex items-center gap-2 mt-1">
        <span className="text-green-400">Success</span>
        Thank you, <strong>{formData.name}</strong>! I'll reply within 24 hours.
      </div>
    ),
    duration: 5000,
  });

  setFormData({ name: "", gmail: "", message: "" });
};

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Gmail", 
      value: "minahilfatima749@gmail.com", 
      href: "mailto:minahilfatima749@gmail.com" 
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+92 300 8390053", 
      href: "tel:+923008390053" 
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Okara, Pakistan", 
      href: null 
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
        {/* Contact Info */}
<div className="animate-fade-in">
  <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
  <p className="text-foreground/90 mb-8 leading-relaxed">
    I'm always interested in hearing about new projects and opportunities. 
    Whether you have a question or just want to say hi, feel free to reach out!
  </p>

  <div className="space-y-6 mb-8">
    {contactInfo.map((info) => {
      const Icon = info.icon;
      const content = (
        <div className="flex items-center glass rounded-lg p-4 hover-lift transition-all">
          <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mr-4">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{info.label}</p>
            <p className="font-semibold">{info.value}</p>
          </div>
        </div>
      );

      return info.href ? (
        <a key={info.label} href={info.href} className="block">
          {content}
        </a>
      ) : (
        <div key={info.label}>{content}</div>
      );
    })}
  </div>

  {/* Social Links */}
  <div>
    <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
    <div className="flex gap-4 mb-6">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary/10 transition-colors hover-lift"
            aria-label={social.label}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>

    {/* Small Google Map below social links */}
    <div className="rounded-2xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.873497137727!2d73.44142347398326!3d30.80802681499905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a2b4d772fa9f5%3A0x1a4f97d7a09fa040!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1698104831845!5m2!1sen!2sus"
        width="100%"
        height="180"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Okara Location Map"
      ></iframe>
    </div>
  </div>
</div>


          {/* Contact Form */}
          <div className="glass rounded-xl p-8 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="gmail" className="block text-sm font-medium mb-2">
                  Your Gmail
                </label>
                <Input
                  id="Gmail"
                  type="Gmail"
                  placeholder="user@gmail.com"
                  value={formData.gmail}
                  onChange={(e) => setFormData({ ...formData, gmail: e.target.value })}
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-glow transition-all"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;