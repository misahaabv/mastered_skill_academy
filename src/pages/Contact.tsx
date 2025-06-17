import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="container py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
        <form className="bg-white rounded-lg shadow p-8 space-y-5 mb-5">
          <div>
            <label className="font-semibold">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" placeholder="Your Name" required />
          </div>
          <div>
            <label className="font-semibold">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" placeholder="Your Email" required />
          </div>
          <div>
            <label className="font-semibold">Phone</label>
            <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" placeholder="Phone Number" required />
          </div>
          <div>
            <label className="font-semibold">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 mt-1" placeholder="Type your message..." required></textarea>
          </div>
          <button type="submit" className="bg-[#fee11b] text-black px-7 py-2 rounded font-bold hover:bg-[#e6c900] transition-transform">Send Message</button>
        </form>
        <div className="mb-5">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.360168663492!2d75.8180643!3d11.2352205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c9282d0b919%3A0x1130d12a04dd1c4d!2sMastered%20Skill%20Academy!5e0!3m2!1sen!2sin!4v1718534701892!5m2!1sen!2sin"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 bg-primary/10 rounded-lg mb-4">
          <div className="mb-2">
            <b>Address:</b><br />
            Mini Bypass Rd, Bypass Junction,<br />
            Azhchavattam, Kozhikode, Kerala 673007
          </div>
          <div className="mb-2">
            <b>Phone:</b> 085900 97448
          </div>
          <div>
            <b>Email:</b> allmasteredskills@gmail.com
          </div>
        </div>
        <a href="tel:08590097448" className="block text-center bg-[#fee11b] text-black py-2 rounded font-bold mt-4 hover:bg-[#e6c900] transition-transform w-full">
          Talk to Us
        </a>
      </main>
      <Footer />
    </div>
  );
}
