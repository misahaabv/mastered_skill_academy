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
          {/* Contact Info & Map */}
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
                <a href="tel:08590097448" className="hover:underline">085900 97448</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-primary" />
                <a href="mailto:allmasteredskills@gmail.com" className="hover:underline">allmasteredskills@gmail.com</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl mt-4">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.915686314733!2d75.78401258295517!3d11.244563268127708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65995fc8c327b%3A0xe68da9ea7d06dc41!2sMastered%20Eduventures%20LLP!5e0!3m2!1sen!2sin!4v1750211924803!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: "16px" }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 