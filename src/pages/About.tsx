import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* About Us Section */}
      <section 
        className="w-full min-h-[100vh] flex flex-col justify-between relative pb-0"
        style={{
          backgroundImage: "url('/lovable-uploads/aboutus banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-3xl mx-auto pt-8 px-4 md:px-0 relative z-10">
          {/* Decorative line above title */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-0.5 bg-[#fee11b] rounded-full"></div>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-black text-center mb-6 uppercase text-white tracking-wider drop-shadow-2xl">
            <span className="text-white">About Us</span>
          </h1>
          
          {/* Decorative line below title */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-0.5 bg-[#fee11b] rounded-full"></div>
          </div>
          
          <div className="text-white text-base md:text-lg font-medium leading-relaxed text-center max-w-2xl mx-auto" style={{textShadow: '0 4px 12px rgba(0,0,0,0.3)'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              <p className="mb-4 text-lg md:text-xl font-semibold">
                We are a <span className="text-[#fee11b] font-bold">premier skill development academy</span> dedicated to transforming lives through practical, industry-relevant education.
              </p>
              
              <div className="w-12 h-0.5 bg-[#fee11b] mx-auto mb-4 rounded-full"></div>
              
              <p className="text-base md:text-lg">
                With <span className="text-[#fee11b] font-semibold">affordable fees</span>, <span className="text-[#fee11b] font-semibold">scholarship opportunities</span>, and <span className="text-[#fee11b] font-semibold">guaranteed placement support</span>, we make quality education accessible to every aspiring professional.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex justify-center mt-0 relative z-10">
          <img
            src="/lovable-uploads/group photo bg.png"
            alt="Mastered Skill Academy Team"
            className="w-full max-w-4xl object-contain drop-shadow-2xl border-4 border-white rounded-2xl"
            style={{ marginBottom: '-4px' }}
          />
        </div> */}
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 md:px-0 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-[#fee11b] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">Empowering Youth</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, high-quality education that empowers young individuals to build successful careers in the digital age.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#fee11b]">
                <h3 className="text-xl font-bold text-primary mb-3">Industry-Ready Skills</h3>
                <p className="text-gray-700 leading-relaxed">
                  To bridge the gap between traditional education and industry requirements by offering practical, job-oriented training programs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">Innovation & Technology</h3>
                <p className="text-gray-700 leading-relaxed">
                  To stay at the forefront of technological advancement and prepare students for the future of work with cutting-edge tools and methodologies.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                To become the leading skill development academy that transforms lives through innovative education and creates a community of successful professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#fee11b] rounded-full"></div>
                  <span>Democratizing quality education</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#fee11b] rounded-full"></div>
                  <span>Building future-ready professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#fee11b] rounded-full"></div>
                  <span>Creating lasting impact in communities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentors Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight drop-shadow">Our Mentors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the industry experts and professionals who guide our students towards success
            </p>
            <div className="w-24 h-1 bg-[#fee11b] mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Farhan - Chairman */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <img
                src="/lovable-uploads/mentor photo/farhan .jpg"
                alt="Farhan"
                className="w-full h-64 object-cover"
              />
              <div className="p-7 text-center">
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Farhan</h3>
                <p className="text-primary font-semibold mb-2">Chairman</p>
              </div>
            </div>

            {/* Dr Adhil - Managing Director */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <img
                src="/lovable-uploads/mentor photo/dr adhil.jpeg.jpg"
                alt="Dr Adhil"
                className="w-full h-64 object-cover"
              />
              <div className="p-7 text-center">
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Dr Adhil</h3>
                <p className="text-yellow-600 font-semibold mb-2">Managing Director</p>
              </div>
            </div>

            {/* Ashif Dharmi - CEO */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <img
                src="/lovable-uploads/mentor photo/ashif .jpg"
                alt="Ashif Dharmi"
                className="w-full h-64 object-cover"
              />
              <div className="p-7 text-center">
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Ashif Dharmi</h3>
                <p className="text-green-600 font-semibold mb-2">CEO</p>
              </div>
            </div>

            {/* Faseeeha - Director */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <img
                src="/lovable-uploads/mentor photo/faseeha miss.jpeg.jpg"
                alt="Faseeeha"
                className="w-full h-64 object-cover"
              />
              <div className="p-7 text-center">
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Faseeeha</h3>
                <p className="text-primary font-semibold mb-2">Director</p>
              </div>
            </div>

            {/* Manshad - Director (placeholder image) */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-4xl font-extrabold text-gray-400">
                M
              </div>
              <div className="p-7 text-center">
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Manshad</h3>
                <p className="text-yellow-600 font-semibold mb-2">Director</p>
              </div>
            </div>

            {/* Mishahira - Academic Head */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <img
                src="/lovable-uploads/mentor photo/mishahira .jpg"
                alt="Mishahira"
                className="w-full h-64 object-cover"
              />
              <div className="p-7 text-center">
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Mishahira</h3>
                <p className="text-green-600 font-semibold mb-2">Academic Head</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate professionals to join our mentoring team. If you have expertise to share and want to make a difference, we'd love to hear from you.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
