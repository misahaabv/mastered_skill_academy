
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courseData = [
  {
    title: "International PG Diploma in Business Administration & HR Management",
    duration: "1 Year",
    accreditation: "Skill India / Glocal",
    outcomes: [
      "HR operations & industry exposure",
      "Recruitment & payroll management",
      "Professional communication & leadership",
      "Placement & interview training"
    ]
  },
  {
    title: "Advanced Diploma in Digital Marketing",
    duration: "4 Months",
    accreditation: "Jain X / KHDA",
    outcomes: [
      "Social media strategy",
      "SEO & paid ads mastery",
      "Analytics & reporting",
      "Job-ready portfolio"
    ]
  },
  {
    title: "Advanced Diploma in Business and Hospital Administration",
    duration: "4 Months",
    accreditation: "KHDA / Glocal",
    outcomes: [
      "Hospital workflow & operations",
      "Patient care protocols",
      "Quality & resource management",
      "Placement support"
    ]
  },
  {
    title: "Diploma Programs in Financial Accounting",
    duration: "4 Months",
    accreditation: "Skill India",
    outcomes: [
      "Business accounting essentials",
      "GST, TDS, and payroll training",
      "Hands-on with industry tools",
      "Placement assistance"
    ]
  }
];

export default function Courses() {
  // Scroll to top when this page renders
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Our Programs</h1>
        <div className="flex flex-col gap-7">
          {courseData.map((c, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-7 mb-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">{c.title}</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full font-semibold text-xs">{c.duration}</span>
              </div>
              <div className="mt-2 text-gray-500 text-sm mb-2">
                <span>Accreditation: {c.accreditation}</span>
              </div>
              <ul className="list-disc ml-6 mb-4 text-gray-700">
                {c.outcomes.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a href="#" className="border border-primary text-primary px-5 py-2 rounded font-bold hover:bg-primary hover:text-white transition">Download Syllabus</a>
                <a
                  href="https://wa.me/918590097448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-5 py-2 rounded font-bold hover:scale-105 transition-transform"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
