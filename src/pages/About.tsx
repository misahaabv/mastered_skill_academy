import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-[60vh] bg-[#1866c1] flex flex-col justify-between relative pb-0">
        <div className="max-w-2xl mx-auto pt-6 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-4 uppercase text-[#fee11b] tracking-wider drop-shadow-lg">
            About Mastered Skill Academy
          </h1>
          <div className="text-white text-base md:text-lg font-medium leading-relaxed mb-6" style={{textShadow: '0 2px 8px rgba(0,0,0,0.12)'}}>
            <p className="mb-3">
              Mastered Skill Academy is dedicated to equipping youth with practical, in-demand skills for today's fast-changing job market. We focus on career-ready, accessible courses designed by real industry professionals.
            </p>
            <ul className="mb-3 pl-6 list-disc">
              <li>Scholarships for deserving learners</li>
              <li>Part-time work opportunities</li>
              <li>Low fees, high quality</li>
            </ul>
            <p>
              We believe in hands-on, skill-based learning, not just theory. Our programs use the latest technology and AI tools to prepare you for the future.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-0">
          <img
            src="/lovable-uploads/group photo bg.png"
            alt="Mastered Skill Academy Team"
            className="w-full max-w-4xl object-contain drop-shadow-2xl border-4 border-white rounded-2xl"
            style={{ marginBottom: '-4px' }}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
