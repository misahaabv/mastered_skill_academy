
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative py-16 md:py-32 min-h-[75vh] flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('/lovable-uploads/background_main.jpeg')",
      }}
    >
      {/* Removed overlay to show image in original color */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight animate-fade-in drop-shadow">
          Build Real Skills.<br />Get Real Jobs.
        </h1>
        <p className="text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow">
          Career-focused, AI-integrated diploma programs to thrive in today{"'"}s job market.
        </p>
        <div className="flex gap-5 flex-wrap justify-center">
          <Link
            to="/courses"
            className="bg-primary text-white px-8 py-3 rounded text-lg font-bold shadow hover:scale-105 transition-transform"
          >
            Explore Courses
          </Link>
          <a
            href="https://wa.me/918590097448"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary px-8 py-3 rounded text-lg font-bold hover:bg-primary hover:text-white transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}
