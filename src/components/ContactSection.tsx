import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#eaf1fc] py-10 px-4 md:px-0 min-h-[70vh]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Have questions or want to get in touch? Fill out the form or use the info below and we'll get back to you soon!
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form className="flex-1 bg-white rounded-2xl shadow-xl p-8 space-y-5 mb-5 md:mb-0">
            <h2 className="text-lg font-bold mb-4 text-primary">Send Us a Message</h2>
            <div>
              <label className="font-semibold">Name</label>
              <input type="text" className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1 focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Your Name" required />
            </div>
            <div>
              <label className="font-semibold">Email</label>
              <input type="email" className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1 focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Your Email" required />
            </div>
            <div>
              <label className="font-semibold">Phone</label>
              <input type="tel" className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1 focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Phone Number" required />
            </div>
            <div>
              <label className="font-semibold">Message</label>
              <textarea className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1 focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Type your message..." required></textarea>
            </div>
            <button type="submit" className="bg-primary text-white px-7 py-2 rounded font-bold hover:bg-primary/90 transition-transform w-full">Send Message</button>
          </form>
          {/* Contact Info & Additional Info */}
          <div className="flex-1 flex flex-col gap-6 justify-between">
            <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-primary" />
                <span>
                  Mini Bypass Rd, Bypass Junction,<br />
                  Azhchavattam, Kozhikode, Kerala 673007
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-primary" />
                <a href="tel:+919778166366" className="hover:underline">+91 9778166366</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-primary" />
                <a href="mailto:allmasteredskills@gmail.com" className="hover:underline">allmasteredskills@gmail.com</a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to our newsletter for the latest courses, events, and industry insights.
              </p>
              <form className="space-y-3">
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 text-sm"
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white px-4 py-2 rounded font-bold hover:bg-primary/90 transition-colors text-sm"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 