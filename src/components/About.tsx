import { Award, Users, Sparkles } from "lucide-react";
import designerPortrait from "@/assets/designer-portrait.jpg";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Sparkles, label: "Projects Completed", value: "500+" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
              <img
                src={designerPortrait}
                alt="Alex Carter - Graphic Designer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-accent rounded-2xl blur-3xl opacity-30 -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/30 rounded-2xl blur-3xl opacity-30 -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              I'm a passionate graphic designer with over 8 years of experience in creating 
              compelling visual narratives. My design philosophy centers on the belief that 
              great design is not just about aesthetics—it's about telling stories that 
              resonate with people.
            </p>
            <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
              From brand identities to digital experiences, I approach each project with 
              fresh eyes and creative energy. My work has been featured in design publications 
              and has helped businesses stand out in competitive markets.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-lg p-4 text-center hover-lift"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              {["Creative", "Detail-Oriented", "Collaborative", "Innovative"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 glass rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
