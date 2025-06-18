export default function LifeSection() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
  ];
  return (
    <section className="bg-[#eaf1fc] py-8 md:py-12 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Life at Mastered</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Experience vibrant campus life, hands-on learning, and unforgettable moments with friends and mentors. Here are some glimpses of life at Mastered Skill Academy.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-200 hover:outline hover:outline-primary hover:outline-2 hover:outline-offset-2">
            <img
              src={src}
              alt={`Life at Mastered ${idx + 1}`}
              className="w-full h-40 object-cover rounded-xl transform hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
