import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courseData = [
  {
    title: "International PG Diploma in Business Administration & HR Management",
    duration: "1 Year",
    accreditation: "ICEEDS / Glocal / C-tech",
    outcomes: [
      "HR operations & industry exposure",
      "Recruitment & payroll management",
      "Professional communication & leadership",
      "Placement & interview training"
    ],
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    desc: "Comprehensive HR training, workplace skills, and placement readiness."
  },
  {
    title: "Advanced Diploma in Digital Marketing",
    duration: "4 Months",
    accreditation: "ICEEDS / Glocal / C-tech",
    outcomes: [
      "Social media strategy",
      "SEO & paid ads mastery",
      "Analytics & reporting",
      "Job-ready portfolio"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    desc: "Hands-on digital strategies, analytics, and social campaigns."
  },
  {
    title: "Advanced Diploma in Business and Hospital Administration",
    duration: "6 Months",
    accreditation: "ICEEDS / Glocal / C-tech",
    outcomes: [
      "Hospital workflow & operations",
      "Patient care protocols",
      "Quality & resource management",
      "Placement support"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    desc: "Hospital management, operations, and leadership skills."
  },
  {
    title: "Diploma Programs in Financial Accounting",
    duration: "4 Months",
    accreditation: "NSDC / KHDA",
    outcomes: [
      "Business accounting essentials",
      "GST, TDS, and payroll training",
      "Hands-on with industry tools",
      "Placement assistance"
    ],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    desc: "Practical accounting, business finance, and industry tools.",
    isFinanceCourse: true
  }
];

export default function Courses() {
  // Scroll to top when this page renders
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero/Intro Section */}
      <section className="relative bg-gradient-to-r from-[#eaf1fc] via-[#f5faff] to-[#eaf1fc] py-10 px-4 md:px-0 text-center overflow-hidden">
        {/* Decorative icon and heading */}
        <div className="flex flex-col items-center justify-center">
          {/* <span className="text-4xl md:text-5xl mb-2">🎓</span> */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-primary relative">
            Our Programs
            <span className="block mx-auto mt-2 w-24 h-2 rounded-full bg-[#fee11b]" />
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-medium">
          Explore our career-focused, industry-driven diploma programs designed to get you job-ready with practical skills and real-world experience.
        </p>
        {/* Optional: abstract shape or SVG for extra flair */}
        {/* <svg ... /> */}
      </section>
      {/* Courses Grid */}
      <section className="py-4 pb-12 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {courseData.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 hover:outline hover:outline-primary hover:outline-2 hover:outline-offset-2">
              <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#fee11b] text-black text-xs px-3 py-1 rounded-full font-bold">{c.duration}</span>
                  <span className="text-xs text-gray-500 font-semibold">{c.accreditation}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-primary min-h-[56px]">{c.title}</h2>
                <p className="text-gray-600 mb-3 text-sm min-h-[48px]">{c.desc}</p>
                <ul className="list-disc ml-5 mb-4 text-gray-700 text-sm">
                  {c.outcomes.map((o, idx) => (
                    <li key={idx}>{o}</li>
                  ))}
                </ul>
                {c.isFinanceCourse ? (
                  <a
                    href="/finance-courses"
                    className="mt-auto bg-primary text-white px-5 py-2 rounded font-bold shadow hover:bg-white hover:text-primary transition-transform text-center"
                  >
                    Know More
                  </a>
                ) : (
                  <a
                    href="https://wa.me/919778166366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-primary text-white px-5 py-2 rounded font-bold shadow hover:bg-white hover:text-primary transition-transform text-center"
                  >
                    Apply Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
