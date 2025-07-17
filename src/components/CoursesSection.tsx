import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Updated with new uploaded images that match course themes
const courses = [
  {
    title: "International PG Diploma in Business Administration & HR Management",
    desc: "Comprehensive HR training, workplace skills, and placement readiness.",
    tag: "1 Year",
    slug: "business-admin-hr",
    image: "/lovable-uploads/ea7885ac-6ac6-40d0-8ef6-2dc20dfd11eb.png", // Business meeting/presentation
  },
  {
    title: "Advanced Diploma in Digital Marketing",
    desc: "Hands-on digital strategies, analytics, and social campaigns.",
    tag: "4 Months",
    slug: "digital-marketing",
    image: "/lovable-uploads/2cfb164c-0c11-40a3-b29a-87bab2856312.png", // Digital marketing icons/ads
  },
  {
    title: "Advanced Diploma in Business and Hospital Administration",
    desc: "Hospital management, operations, and leadership skills.",
    tag: "6 Months",
    slug: "hospital-admin",
    image: "/lovable-uploads/2d1f1efe-6768-430c-8b94-90f9550a5a6e.png", // Medical professionals/hospital
  },
  {
    title: "Diploma Programs in Financial Accounting",
    desc: "Practical accounting, business finance, and industry tools.",
    tag: "4 Months",
    slug: "financial-accounting",
    image: "/lovable-uploads/d2961bd9-2d36-4a96-aec5-a19a68de20c1.png", // Professional with accounting/finance setup
  },
];

// Card has shadow-md by default; on hover: bulges & blue outline
export default function CoursesSection() {
  return (
    <section className="container py-10 animate-fade-in bg-[#eaf1fc]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">Courses We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {courses.map((c) => (
          <div
            key={c.slug}
            className={`
              bg-white rounded-lg
              shadow-md
              p-0
              flex flex-col justify-between
              group
              transition-all duration-300
              hover:scale-105
              hover:outline
              hover:outline-2
              hover:outline-primary
              cursor-pointer
              overflow-hidden
            `}
          >
            {/* Course image at the top */}
            <AspectRatio ratio={16 / 9}>
              <img
                src={c.image}
                alt={c.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </AspectRatio>
            {/* Card content */}
            <div className="flex flex-col flex-1 p-6">
              <span className="bg-[#fee11b] text-black text-xs px-3 py-1 rounded-full mb-4 inline-block font-bold w-fit">{c.tag}</span>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{c.desc}</p>
              <Link to="/courses" className="mt-2 font-semibold text-primary hover:underline text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
