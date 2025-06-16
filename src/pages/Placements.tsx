
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const companies = [
  "Tata Consultancy Services",
  "Infosys",
  "Apollo Hospitals",
  "Kotak Mahindra Bank",
  "Aditya Birla Group"
];

const testimonials = [
  {
    name: "Ankit S.",
    quote: "From student projects to my first job — MSA's training mentored me the entire way."
  },
  {
    name: "Megha K.",
    quote: "Interview prep took my confidence up! I cracked my first interview."
  }
];

export default function Placements() {
  return (
    <div>
      <Navbar />
      <main className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Placements & Career Support</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {companies.map((c, i) => (
            <div key={i} className="bg-gray-100 rounded p-4 text-center font-bold text-primary/80 text-sm">{c}</div>
          ))}
        </div>
        <ul className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="bg-white rounded-lg shadow px-6 py-4">
            Internship support from industry links
          </li>
          <li className="bg-white rounded-lg shadow px-6 py-4">
            Resume & interview training
          </li>
          <li className="bg-white rounded-lg shadow px-6 py-4">
            Job-ready portfolio projects
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-10 mb-3 text-primary">Placed Student Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-primary/10 rounded-lg p-6">
              <blockquote className="italic mb-2 text-gray-700">&ldquo;{t.quote}&rdquo;</blockquote>
              <span className="font-semibold text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
