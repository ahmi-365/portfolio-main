import { useState } from "react";
import { X } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Adobe Photoshop Mastery",
      category: "Photo Editing",
      // Fixed: Professional photo-editing workspace
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&fit=crop&crop=entropy&cs=tinysrgb",
      description:
        "Professional photo editing, retouching, and creative designs with precision. High-end composites, color grading, and flawless skin retouching for fashion and product photography.",
    },
    {
      id: 2,
      title: "Adobe Illustrator Vectors",
      category: "Vector Design",
      // Fixed: Clean vector illustration on tablet
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&fit=crop&crop=entropy&cs=tinysrgb",
      description:
        "Creative vector designs with precision for logos, icons, and more. Scalable illustrations and brand assets built with clean paths and vibrant gradients.",
    },
    {
      id: 3,
      title: "Cinematic Video Editing",
      category: "Video Editing",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop&crop=entropy&cs=tinysrgb",
      description:
        "Engaging video edits with smooth transitions, effects, and professional polish. From social reels to brand promos — dynamic storytelling through motion.",
    },
    {
      id: 4,
      title: "Instagram & Social Media Pack",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop&crop=entropy&cs=tinysrgb",
      description:
        "Attractive designs tailored for Instagram, Facebook, and online engagement. Ready-to-post carousels, stories, and feed templates that boost interaction.",
    },
    {
      id: 5,
      title: "Logo & Flyer Branding Kit",
      category: "Branding",
      // Fixed: Branding mockup with logo sketches & business cards
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fit=crop&crop=entropy&cs=tinysrgb",
      description:
        "Professional and unique logos & flyer designs that define your brand identity. Cohesive print-ready materials with bold typography and strategic layouts.",
    },
    {
      id: 6,
      title: "Event Poster & Banner Series",
      category: "Print Design",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&fit=crop&crop=entropy&cs=tinysrgb",
      description:
        "Bold, vibrant posters & banners crafted to capture attention and deliver messages. Large-format designs optimized for impact in real-world environments.",
    },
  ];

  const categories = [
    "All",
    "Photo Editing",
    "Vector Design",
    "Video Editing",
    "Social Media",
    "Branding",
    "Print Design",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my creative work across various design disciplines
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "glass hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="glass rounded-xl overflow-hidden hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-sm text-primary font-semibold mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 p-2 glass rounded-full hover:bg-primary/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full aspect-video object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-8">
                <p className="text-sm text-primary font-semibold mb-2">
                  {selectedItem.category}
                </p>
                <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;