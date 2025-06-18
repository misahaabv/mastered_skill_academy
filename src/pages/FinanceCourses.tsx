import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const financeCourses = [
  {
    title: "GST Accounting",
    desc: "Practical training on GST assessment, accounting, filing, and consultation. Includes manual and computerized accounting, statutory compliances, and business communication.",
    eligibility: "+2/Any graduation, Post graduate, Working Accountants",
    image: "/lovable-uploads/5a53aae9-0bea-41cc-b738-055aef0aeb7f.png",
  },
  {
    title: "Foreign Accounting",
    desc: "Practical training on Gulf VAT, CT & ET, international business documentation, and accounting practices for India & abroad. Includes office software and business communication.",
    eligibility: "+2/Any graduation, Post graduate, Working Accountants",
    image: "/lovable-uploads/2cfb164c-0c11-40a3-b29a-87bab2856312.png",
  },
  {
    title: "Professional Accounting",
    desc: "Covers statutory compliance, GST, income tax, business accounting, and practical training with industry tools for India & abroad.",
    eligibility: "CA & CMAs, Ongoing CA/CMA students, MBA Finance, Working Accountants",
    image: "/lovable-uploads/b88c3029-d467-4d52-ac73-3d153c8495d2.png",
  },
  {
    title: "CUET",
    desc: "Common University Entrance Test preparation for UG admissions. Covers language, domain-specific, and general test papers (CBT, MCQs).",
    eligibility: "Passed Class 12th",
    image: "/lovable-uploads/af4d12c8-8be0-43da-8572-67088bc7abaf.png",
  },
  {
    title: "CAT (Certificate in Accounting Technician)",
    desc: "Covers maintenance of accounts, tax returns, GST, customs, export/import documentation, and more.",
    eligibility: "Passed Class 12th",
    image: "/lovable-uploads/22e21f60-1952-41fc-bb8a-7b06326864e5.png",
  },
  {
    title: "SAP (S/4HANA – FICO/MM)",
    desc: "SAP training with individualized programs, real-life projects, and support from skilled trainers. Includes business communication and office software.",
    eligibility: "Passed Class 12th/Any graduates",
    image: "/lovable-uploads/40d46434-7166-4a45-bd09-74fc2fe6b680.png",
  },
];

export default function FinanceCourses() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#eaf1fc] via-[#f5faff] to-[#eaf1fc] py-10 px-4 md:px-0 text-center overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-primary relative">
            Finance & Accounting
            <span className="block mx-auto mt-2 w-24 h-2 rounded-full bg-[#fee11b]" />
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-medium">
          Master the art of financial management with our comprehensive diploma programs designed for modern business needs
        </p>
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