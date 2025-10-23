import { useState } from "react";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

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
      title: "Brand Identity Design",
      category: "Branding",
      image: portfolio1,
      description: "Complete brand identity package including logo, business cards, and brand guidelines for a sustainable lifestyle company.",
    },
    {
      id: 2,
      title: "Mobile App UI/UX",
      category: "UI/UX",
      image: portfolio2,
      description: "Modern and intuitive mobile application design focused on user experience and seamless interactions.",
    },
    {
      id: 3,
      title: "Event Poster Collection",
      category: "Print",
      image: portfolio3,
      description: "Series of bold and eye-catching event posters with dynamic typography and vibrant color schemes.",
    },
    {
      id: 4,
      title: "Product Packaging",
      category: "Branding",
      image: portfolio4,
      description: "Elegant packaging design that combines minimalist aesthetics with sophisticated brand presentation.",
    },
    {
      id: 5,
      title: "Website Design",
      category: "UI/UX",
      image: portfolio5,
      description: "Clean and responsive website design with modern layouts and smooth user experience.",
    },
    {
      id: 6,
      title: "Social Media Templates",
      category: "Digital",
      image: portfolio6,
      description: "Engaging social media design templates for consistent brand presence across digital platforms.",
    },
  ];

  const categories = ["All", "Branding", "UI/UX", "Print", "Digital"];

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
