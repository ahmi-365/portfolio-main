import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Minahil Hasnain</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-muted-foreground font-heading font-semibold">
            Transforming Ideas into Visual Stories
          </p>
          <p className="text-lg md:text-xl mb-12 text-foreground/90 max-w-2xl mx-auto">
            Award-winning graphic designer specializing in brand identity, UI/UX design, and creative storytelling. 
            Let's bring your vision to life with stunning visuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground shadow-glow text-lg px-8 py-6"
            >
              Get In Touch
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#portfolio");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
