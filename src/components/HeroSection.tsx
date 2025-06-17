import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative py-16 md:py-32 min-h-[75vh] flex items-center justify-center bg-center bg-contain bg-no-repeat"
      style={{
        backgroundImage:
          "url('/lovable-uploads/banner7.svg')",
      }}
    >
      {/* Removed overlay to show image in original color */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
      
        {/* <p className="text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow">
          Career-focused, AI-integrated diploma programs to thrive in today{"'"}s job market.
        </p> */}
        <div className="flex gap-5 flex-wrap justify-center">
          <Link
            to="/courses"
            className="w-60 text-center bg-white text-black px-8 py-3 rounded text-lg font-bold shadow hover:scale-105 transition-transform"
          >
            Explore Courses
          </Link>
          <a
            href="https://wa.me/918590097448"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 text-center border-2 border-white text-white px-8 py-3 rounded text-lg font-bold hover:bg-white hover:text-black transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}
