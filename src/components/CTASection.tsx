
import { Link } from "react-router-dom";
export default function CTASection() {
  return (
    <section className="container py-14 md:py-20 flex flex-col items-center justify-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-center">Start Your Journey with Mastered Today</h2>
      <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded text-lg font-bold shadow hover:scale-105 transition-transform">
        Talk to an Advisor
      </Link>
    </section>
  )
}
