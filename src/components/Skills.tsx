import { Palette, PenTool, Video, Instagram, FileText, Image } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 95, icon: Palette },
    { name: "Adobe Illustrator", level: 92, icon: PenTool },
    { name: "Video Editing", level: 88, icon: Video },
    { name: "Social Media Design", level: 90, icon: Instagram },
    { name: "Logo & Flyer Design", level: 93, icon: FileText },
    { name: "Poster & Banner Design", level: 91, icon: Image },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in industry-standard design tools and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass rounded-xl p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {[
              "Photo Retouching",
              "Vector Illustration",
              "Motion Graphics",
              "Brand Identity",
              "Print Production",
              "Typography",
              "Color Theory",
              "Layout Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 glass rounded-full font-medium hover:bg-primary/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;