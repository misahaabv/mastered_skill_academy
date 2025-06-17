import { Users, Book, Calendar, Home, ArrowUp, ArrowDown } from "lucide-react";

const whyPoints = [
  {
    icon: <ArrowUp size={32} className="text-primary" />,
    label: "Affordable fees & scholarships",
  },
  {
    icon: <Book size={32} className="text-primary" />,
    label: "AI & Tech-integrated curriculum",
  },
  {
    icon: <Users size={32} className="text-primary" />,
    label: "Real-time training by working professionals",
  },
  {
    icon: <Home size={32} className="text-primary" />,
    label: "Part-time job support",
  },
  {
    icon: <Calendar size={32} className="text-primary" />,
    label: "Practical projects over textbook theory",
  },
  {
    icon: <ArrowDown size={32} className="text-primary" />,
    label: "Interview & placement training",
  },
];

export default function WhySection() {
  return (
    <section className="container py-10 animate-fade-in bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Why Mastered Skill Academy?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-7">
        {whyPoints.map(({ icon, label }, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center p-4 rounded-lg bg-white shadow transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer overflow-hidden card-hover-blue"
          >
            {/* Overlay effect */}
            <div className="pointer-events-none absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-primary before:origin-top before:scale-y-0 group-hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-out before:rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center">
              {icon}
              <span className="mt-3 font-semibold text-center group-hover:text-white transition-colors duration-300">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
