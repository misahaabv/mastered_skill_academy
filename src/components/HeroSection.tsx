import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[85vh] flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center">
      {/* Mobile Background */}
      <div className="w-full h-auto relative sm:absolute sm:inset-0">
        <img 
          src="/lovable-uploads/mobile-banner8.jpg"
          alt="Hero Banner"
          className="w-full h-auto object-contain block lg:hidden"
        />
        {/* Tablet Background */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-center hidden sm:block lg:hidden"
          style={{
            backgroundImage: "url('/lovable-uploads/banner7.svg')",
          }}
        />
        
        {/* Desktop Background */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-center hidden lg:block"
          style={{
            backgroundImage: "url('/lovable-uploads/banner7.svg')",
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex gap-5 flex-wrap justify-center py-8">
          <Link
            to="/courses"
            className="w-60 h-12 flex items-center justify-center bg-primary sm:bg-white text-white sm:text-black px-8 rounded text-lg font-bold shadow hover:scale-105 transition-transform"
          >
            Explore Courses
          </Link>
          <a
            href="https://wa.me/919778166366"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 h-12 flex items-center justify-center bg-white sm:bg-transparent border-2 border-primary sm:border-white text-primary sm:text-white px-8 rounded text-lg font-bold hover:bg-primary hover:text-white sm:hover:bg-white sm:hover:text-black transition"
          >
            Apply Now
          </a>
        </div>
      </div>
      {/* <img
        src="/lovable-uploads/skill-experts.png"
        alt="Skill Experts"
        className="w-full max-w-full mx-auto object-contain block"
        style={{ display: 'block' }}
      /> */}
    </section>
  )
}