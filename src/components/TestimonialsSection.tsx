import { useRef, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const GOOGLE_ICON_URL = "/lovable-uploads/google icon.jpeg";

const Star = ({ color = "#FFD700" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 15.27L16.18 19L14.54 12.97L19.5 8.63L13.3 8.13L10 2.5L6.7 8.13L0.5 8.63L5.46 12.97L3.82 19L10 15.27Z"/>
  </svg>
);

const testimonials = [
  {
    name: "Rafa Fathima",
    quote: "The classes are going really well. The instructors are knowledgeable and experienced in their respective fields. They teach in an interactive way, and I especially appreciate how they explain theoretical concepts using real-life examples and case studies.",
    image: "/lovable-uploads/rafa.png", // Google review
  },
  {
    name: "Shifa Nisha",
    quote: "This diploma gave me the confidence and skills to move into a hospital management role. The trainers were expert and supportive throughout the journey.",
    image: "/lovable-uploads/shifa.png", // Google review avatar
  },
  {
    name: "Gayathri R S.",
    quote: "Best institute for business administration in Calicut",
    image: "/lovable-uploads/gayathri.png", // Google review avatar
  },
  {
    name: "Shifana S.",
    quote: "Mastered Skill Academy is the best Business Administration and Management institution in Kozhikode.Their practical training and expert faculty helped me grow professionally.Highly recommended for anyone looking to build a strong career in business.",
    image: "/lovable-uploads/shifa.png", // Google review avatar
  },
  {
    name: "Rifa Fathima.",
    quote: "As a student, I found it to be the best Business Administration and Management institution in Kozhikode.The teaching methods are modern, and the support is outstanding.Great place to learn real business skills and leadership.",
    image: "/lovable-uploads/rafa.png", // Google review avatar
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        const scrollAmount = current.offsetWidth * 0.8;
        // If at end, scroll to start
        if (current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10) {
          current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth * 0.8;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-0 py-8 animate-fade-in overflow-visible bg-white">
      {/* Hide scrollbar with custom CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">Student Success Stories</h2>
      <div className="relative px-4 md:px-12">
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory w-full pointer-events-none"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((ts, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg p-5 flex flex-col w-80 min-w-[320px] max-w-xs snap-center shadow-sm hover:shadow-md transition-shadow duration-200 pointer-events-auto"
              style={{ flex: "0 0 320px" }}
            >
              {/* Top row: Avatar, Name, Google icon */}
              <div className="flex items-center justify-between mb-2 w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    {ts.image ? (
                      <AvatarImage src={ts.image} alt={ts.name} />
                    ) : (
                      <AvatarFallback>{ts.name.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <span className="font-bold text-base ml-2 whitespace-nowrap">{ts.name}</span>
                </div>
                <img src={GOOGLE_ICON_URL} alt="Google" className="w-7 h-7 object-contain ml-2" />
              </div>
              {/* Stars */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} color="#FFD700" />
                ))}
              </div>
              {/* Review text, truncated */}
              <div className="text-gray-800 text-base mt-1 line-clamp-4">
                {ts.quote}
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-primary text-white shadow-lg rounded-full p-2 focus:outline-none flex items-center justify-center"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-primary text-white shadow-lg rounded-full p-2 focus:outline-none flex items-center justify-center"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </section>
  );
}
