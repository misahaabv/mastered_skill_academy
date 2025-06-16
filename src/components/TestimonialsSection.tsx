
const testimonials = [
  {
    name: "Priya S.",
    quote: "MSA gave me real interview practice and my dream job in 4 months!",
    image: "", // Replace with student photo if available
  },
  {
    name: "Arun R.",
    quote: "Mentors who actually work in tech taught us — felt super relevant!",
    image: "",
  },
  {
    name: "Riya M.",
    quote: "Projects, mentors, and placement — I feel work-ready.",
    image: "",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="container py-16 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Student Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((ts, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {(ts.name.charAt(0) || '').toUpperCase()}
              </span>
            </div>
            <blockquote className="italic mb-2 text-gray-700">&ldquo;{ts.quote}&rdquo;</blockquote>
            <span className="font-semibold text-primary">{ts.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
