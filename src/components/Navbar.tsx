import { Link, useLocation } from "react-router-dom";
import { Home, Book, Calendar, Users, Contact, Menu, Newspaper, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: Users },
  { label: 'Placements', to: '/placements', icon: Users },
  { label: 'Contact Us', to: '/contact', icon: Contact }
];

const coursesLinks = [
  { label: 'All Courses', to: '/courses' },
  { label: 'Diploma Programs in Finance', to: '/finance-courses' },
];

const exploreLinks = [
  { label: 'Events', to: '/events', icon: Calendar },
  { label: 'Blog', to: '/blog', icon: Newspaper },
];

export default function Navbar() {
  const location = useLocation();
  // Set navbar opacity lower on '/' (landing), normal otherwise
  const navbarBgClass = location.pathname === "/" ? "bg-white/70" : "bg-white/90";
  const renderNavLink = (link: any) => {
    return (
      <Link
        key={link.to}
        to={link.to}
        className={cn(
          "flex items-center gap-1 px-4 py-2 rounded text-base font-medium transition relative",
          location.pathname === link.to && "text-primary font-bold border-b-2 border-primary",
          "hover:border-b-2 hover:border-primary"
        )}
      >
        <link.icon size={18} className="mr-1" />
        {link.label}
      </Link>
    );
  };

  const renderMobileNavLink = (link: any) => {
    return (
      <Link
        key={link.to}
        to={link.to}
        className={cn(
          "flex items-center gap-2 px-3 py-3 rounded text-base font-medium transition relative",
          location.pathname === link.to && "text-primary font-bold border-b-2 border-primary",
          "hover:border-b-2 hover:border-primary"
        )}
      >
        <link.icon size={20} className="mr-1" />
        {link.label}
      </Link>
    );
  };

  return (
    <nav className={`sticky top-0 ${navbarBgClass} backdrop-blur z-40 border-b shadow-sm transition`}>
      <div className="container mx-auto flex items-center h-24 md:h-28 px-4">
        <Link to="/" className="flex items-center justify-center mr-3 select-none focus:outline-none">
          <img
            src="/lovable-uploads/b88c3029-d467-4d52-ac73-3d153c8495d2.png"
            alt="Mastered Skill Academy Logo"
            className="w-36 h-24 md:w-48 md:h-28 object-contain transition-all rounded"
            style={{ maxHeight: "112px" }}
            draggable={false}
          />
        </Link>
        <div className="flex-grow" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          {navLinks.map(renderNavLink)}

          {/* Courses Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 rounded text-base font-medium transition relative hover:border-b-2 hover:border-primary">
                <span>Courses</span>
                <ChevronDown size={16} className="transition-transform" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 mt-2 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl">
              {coursesLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link
                    to={link.to}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition",
                      location.pathname === link.to && "text-primary font-bold bg-primary/10",
                      "hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Explore Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 rounded text-base font-medium transition relative hover:border-b-2 hover:border-primary">
                <span>Explore</span>
                <ChevronDown size={16} className="transition-transform" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48 mt-2 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl">
              {exploreLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
            <Link
              to={link.to}
              className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition",
                      location.pathname === link.to && "text-primary font-bold bg-primary/10",
                      "hover:bg-primary/5"
              )}
            >
                    <link.icon size={16} />
              {link.label}
            </Link>
                </DropdownMenuItem>
          ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <a
          href="https://wa.me/919778166366"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block ml-8 px-5 py-2 bg-primary text-white rounded font-bold shadow hover:bg-primary/90 transition-transform"
        >
          Apply Now
        </a>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="p-2 rounded border border-gray-200 bg-white text-primary shadow hover:bg-primary/10 transition"
              >
                <Menu size={28}/>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b bg-white/90">
                  <img
                    src="/lovable-uploads/b88c3029-d467-4d52-ac73-3d153c8495d2.png"
                    alt="Mastered Skill Academy Logo"
                    className="w-32 h-18 object-contain bg-white rounded"
                    style={{ maxHeight: "72px" }}
                    draggable={false}
                  />
                </div>
                <div className="flex flex-col px-6 py-4 gap-2">
                  {navLinks.map(renderMobileNavLink)}

                  {/* Mobile Courses Dropdown */}
                  <div className="border-t pt-4 mt-2">
                    <div className="text-sm font-semibold text-gray-500 mb-2 px-3">Courses</div>
                    {coursesLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={cn(
                          "flex items-center gap-2 px-3 py-3 rounded text-base font-medium transition relative ml-4",
                          location.pathname === link.to && "text-primary font-bold border-b-2 border-primary",
                          "hover:border-b-2 hover:border-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Explore Section */}
                  <div className="border-t pt-4 mt-2">
                    <div className="text-sm font-semibold text-gray-500 mb-2 px-3">Explore</div>
                    {exploreLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={cn(
                          "flex items-center gap-2 px-3 py-3 rounded text-base font-medium transition relative ml-4",
                          location.pathname === link.to && "text-primary font-bold border-b-2 border-primary",
                          "hover:border-b-2 hover:border-primary"
                      )}
                    >
                      <link.icon size={20} className="mr-1" />
                      {link.label}
                    </Link>
                  ))}
                  </div>

                  <a
                    href="https://wa.me/919778166366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-3 bg-primary text-white rounded font-bold text-center shadow hover:bg-primary/90 transition-transform"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
