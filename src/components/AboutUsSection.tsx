export default function AboutUsSection() {
    return (
      <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Section Header */}
              <div>
                <div className="flex mb-6">
                  <div className="w-20 h-1 bg-[#fee11b] rounded-full"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  About <span className="text-primary">Mastered</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are a premier skill development academy dedicated to transforming lives through practical, industry-relevant education. Our mission is to bridge the gap between traditional education and real-world job requirements by offering hands-on training programs designed by industry experts, with affordable fees, scholarship opportunities, and guaranteed placement support.
                </p>
              </div>
            </div>
  
            {/* Right Side - Visual Elements */}
            <div className="relative">
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12K+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#fee11b]">95%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
              </div>
  
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/group photo bg.png"
                  alt="Mastered Skill Academy Team"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
  
              {/* Decorative Elements */}
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-[#fee11b]/30 rounded-full"></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-green-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }