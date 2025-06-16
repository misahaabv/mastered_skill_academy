import { Link } from "react-router-dom";
import { Home, Book, Contact } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20 pt-10 pb-6 border-t border-primary/20">
      <div className="container flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center md:items-start">
        <div className="flex flex-col items-center md:items-start w-full md:w-auto mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="/lovable-uploads/b88c3029-d467-4d52-ac73-3d153c8495d2.png"
              alt="Mastered Skill Academy Logo"
              className="w-36 h-18 object-contain mr-3 bg-white rounded shadow-md border"
              style={{ maxHeight: "72px" }}
              draggable={false}
            />
            <span className="text-2xl font-extrabold tracking-tight">Mastered Skill Academy</span>
          </div>
          <span className="text-base text-white/70">Empowering learning and growth</span>
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-auto mb-6 md:mb-0">
          <span className="uppercase tracking-widest text-sm mb-2 font-semibold text-white/80">Quick Links</span>
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center gap-2 text-base text-white hover:text-primary-foreground/70 transition-colors">
              <Home size={18}/> Home
            </Link>
            <Link to="/courses" className="flex items-center gap-2 text-base text-white hover:text-primary-foreground/70 transition-colors">
              <Book size={18}/> Courses
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-base text-white hover:text-primary-foreground/70 transition-colors">
              <Contact size={18}/> Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-auto mb-6 md:mb-0">
          <span className="uppercase tracking-widest text-sm mb-2 font-semibold text-white/80">Contact</span>
          <span className="text-base">
            Mini Bypass Rd, Bypass Junction,<br />
            Azhchavattam, Kozhikode, Kerala 673007
          </span>
          <span className="text-base mt-1">085900 97448</span>
          <span className="text-base">allmasteredskills@gmail.com</span>
        </div>

        <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-3">
          <span className="uppercase tracking-widest text-sm mb-2 font-semibold text-white/80">Follow Us</span>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mastered_skill_academy/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition"
            >
              {/* Instagram Icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-white"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/mastered-skill-academy/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition"
            >
              {/* LinkedIn Icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-white"
              >
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <rect x="7" y="10" width="2" height="5" fill="currentColor" />
                <rect x="11" y="10" width="2" height="5" fill="currentColor" />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@MasteredSkillAcademy"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition"
            >
              {/* YouTube Icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
                className="text-white"
              >
                <rect x="2" y="6" width="20" height="12" rx="4" fill="currentColor" />
                <polygon points="10,9 16,12 10,15" fill="red" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-8">
        <div className="border-t border-white/15 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <span>© {new Date().getFullYear()} Mastered Skill Academy. All rights reserved.</span>
          <span>
            Built by Suhail KTR
          </span>
        </div>
      </div>
    </footer>
  );
}
