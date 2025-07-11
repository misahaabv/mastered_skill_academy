import { Link } from "react-router-dom";
export default function CTASection() {
  return (
    <section className="max-w-none mx-0 py-8 md:py-10 flex flex-col items-center justify-center animate-fade-in bg-primary text-white">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-center">Start Your Journey with Mastered Today</h2>
      <a href="https://wa.me/919778166366" className="bg-[#fee11b] text-black px-8 py-3 rounded text-lg font-bold shadow hover:bg-[#e6c900] transition-transform">
        Talk to an Advisor
      </a>
    </section>
  )
}
