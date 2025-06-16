
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  {
    title: "Industrial Visit: Tech Park",
    date: "Jun 20, 2024",
    imgAlt: "Industry Visit"
  },
  {
    title: "Workshop: Resume Building",
    date: "July 7, 2024",
    imgAlt: "Resume Workshop"
  },
  {
    title: "Public Speaking Seminar",
    date: "July 21, 2024",
    imgAlt: "Public Speaking"
  },
  {
    title: "Basic Life Support (BLS) Training",
    date: "Aug 10, 2024",
    imgAlt: "BLS Training"
  }
];

export default function Events() {
  return (
    <div>
      <Navbar />
      <main className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Events & Workshops</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((ev, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full justify-between">
              <div className="bg-gray-100 h-40 rounded flex items-center justify-center mb-4 text-gray-400 font-bold">
                {ev.imgAlt}
              </div>
              <div>
                <h3 className="text-lg font-bold">{ev.title}</h3>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">{ev.date}</span>
              </div>
              <a
                href="https://wa.me/918590097448"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 bg-primary text-white px-5 py-2 rounded font-bold hover:scale-105 transition-transform w-max"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
