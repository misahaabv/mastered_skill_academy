import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxGwZsAaNOS-8YF6YAPzPQxd5RG1j3G4-VkHuxm-dFnRrBz3P4sqs4s2nXh6El5P1Fy/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ ...formData, source: "Contact Page" }),
          headers: { "Content-Type": "application/json" },
        }
      );

      // Assume success since no-cors blocks reading response
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("There was a problem submitting your form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#eaf1fc] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex mb-6">
            <div className="w-20 h-1 bg-[#fee11b] rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-10">
            Have questions or want to get in touch? Fill out the form or use the info below and we'll get back to you soon!
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 bg-white rounded-2xl shadow-xl p-8 space-y-5 mb-5 md:mb-0"
            >
              <h2 className="text-lg font-bold mb-4 text-primary">
                Send Us a Message
              </h2>
              <div>
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <label className="font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 hover:border-primary rounded px-3 py-2 mt-1"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-7 py-2 rounded font-bold hover:bg-primary/90 transition-transform w-full disabled:bg-gray-400"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>

            {/* Contact Info & Map */}
            <div className="flex-1 flex flex-col gap-6 justify-between">
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-primary w-10 h-10" />
                  <span className="text-base text-l md:text-left">
                  MASTERED EDUVENTURES LLP ROOM NO 34/698, <br/>
                  PATTELTHAZHAM, Mankavu, Kozhikode City Town Police Station,Kozhikode, Kerala, 673007<br/>
                </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="text-primary" />
                  <a href="tel:+919778166366" className="hover:underline">
                    +91 9778166366
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="text-primary" />
                  <a
                    href="mailto:allmasteredskills@gmail.com"
                    className="hover:underline"
                  >
                    allmasteredskills@gmail.com
                  </a>
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
      <Footer />
    </>
  );
}
