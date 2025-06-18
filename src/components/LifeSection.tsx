import { useEffect, useState } from "react";

const campusImages = [
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.52_642dd558.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.52_d075580a.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.50_03cc3404.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.51_592aaaae.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.52_308adede.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.52_eafb2452.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.51_f5a8839e.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.51_450b6224.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.50_2c4df96e.jpg",
  "/lovable-uploads/campus life/photo1.jpg",
  "/lovable-uploads/campus life/WhatsApp Image 2025-06-18 at 14.12.50_d938bcd1.jpg",
];

// Define a collage layout: array of {rowSpan, colSpan} for each cell
const collageLayout = [
  { row: 2, col: 2 }, // big
  { row: 1, col: 1 },
  { row: 1, col: 1 },
  { row: 2, col: 1 },
  { row: 1, col: 2 },
  { row: 1, col: 1 },
  { row: 1, col: 1 },
  { row: 1, col: 1 },
  { row: 1, col: 1 },
];

export default function LifeSection() {
  // Only show as many images as collageLayout
  const [displayImages, setDisplayImages] = useState(() => {
    const shuffled = [...campusImages].sort(() => Math.random() - 0.5);
    return collageLayout.map((_, i) => shuffled[i % shuffled.length]);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayImages((prev) => {
        // Pick a random index to replace
        const idx = Math.floor(Math.random() * collageLayout.length);
        // Pick a random image not currently shown
        const unused = campusImages.filter((img) => !prev.includes(img));
        const newImg = unused.length > 0 ? unused[Math.floor(Math.random() * unused.length)] : campusImages[Math.floor(Math.random() * campusImages.length)];
        const next = [...prev];
        next[idx] = newImg;
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#eaf1fc] py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4">
        {/* Collage Left */}
        <div className="w-full md:w-1/2 h-96 rounded-3xl overflow-hidden flex items-center justify-center bg-white/40 shadow-lg mb-8 md:mb-0">
          <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-1 auto-rows-[40px] md:auto-rows-[60px]">
            {displayImages.map((src, idx) => {
              const { row, col } = collageLayout[idx];
              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-xl shadow col-span-${col} row-span-${row}`}
                  style={{ gridColumn: `span ${col}`, gridRow: `span ${row}` }}
                >
                  <img
                    src={src}
                    alt={`Life at Mastered ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Content Right */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-primary">Life at Mastered</h2>
          <div className="w-16 h-1 bg-[#fee11b] rounded-full mb-6"></div>
          <p className="text-gray-700 mb-6 text-lg">
            Experience vibrant campus life, hands-on learning, and unforgettable moments with friends and mentors. Our campus is a hub of creativity, collaboration, and growth—where every day brings new opportunities to learn, connect, and celebrate success together.
          </p>
          <p className="text-primary font-semibold text-base md:text-lg">Discover the spirit of Mastered—where learning is an experience, not just a classroom.</p>
        </div>
      </div>
    </section>
  );
}
