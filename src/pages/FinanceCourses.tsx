import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const financeCourses = [
  {
    title: "GST Accounting",
    desc: "Practical training on GST assessment, accounting, filing, and consultation. Includes manual and computerized accounting, statutory compliances, and business communication.",
    eligibility: "+2/Any graduation, Post graduate, Working Accountants",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Foreign Accounting",
    desc: "Practical training on Gulf VAT, CT & ET, international business documentation, and accounting practices for India & abroad. Includes office software and business communication.",
    eligibility: "+2/Any graduation, Post graduate, Working Accountants",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Professional Accounting",
    desc: "Covers statutory compliance, GST, income tax, business accounting, and practical training with industry tools for India & abroad.",
    eligibility: "CA & CMAs, Ongoing CA/CMA students, MBA Finance, Working Accountants",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CUET",
    desc: "Common University Entrance Test preparation for UG admissions. Covers language, domain-specific, and general test papers (CBT, MCQs).",
    eligibility: "Passed Class 12th",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CAT (Certificate in Accounting Technician)",
    desc: "Covers maintenance of accounts, tax returns, GST, customs, export/import documentation, and more.",
    eligibility: "Passed Class 12th",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "SAP (S/4HANA – FICO/MM)",
    desc: "SAP training with individualized programs, real-life projects, and support from skilled trainers. Includes business communication and office software.",
    eligibility: "Passed Class 12th/Any graduates",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
];

export default function FinanceCourses() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#eaf1fc] via-[#f5faff] to-[#eaf1fc] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex mb-6">
            <div className="w-20 h-1 bg-[#fee11b] rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Finance & <span className="text-primary">Accounting</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Master the art of financial management with our comprehensive diploma programs designed for modern business needs.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-4 pb-12 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {financeCourses.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 hover:outline hover:outline-primary hover:outline-2 hover:outline-offset-2">
              <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-xl font-bold mb-2 text-primary min-h-[56px]">{c.title}</h2>
                <p className="text-gray-600 mb-3 text-sm min-h-[48px]">{c.desc}</p>
                <div className="text-xs text-gray-500 mb-4">Eligibility: {c.eligibility}</div>
                <a
                  href="https://wa.me/919778166366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-primary text-white px-5 py-2 rounded font-bold shadow hover:bg-white hover:text-primary transition-transform text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
} 