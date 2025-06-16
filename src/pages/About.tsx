
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">About Mastered Skill Academy</h1>
        <p className="mb-4 text-lg">
          <span className="font-semibold">We’re not just an academy, we’re a movement to empower youth with job-ready skills.</span>
        </p>
        <ul className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-white rounded-lg shadow px-6 py-4">Scholarships for meritorious students</li>
          <li className="bg-white rounded-lg shadow px-6 py-4">Low fees & flexible payment plans</li>
          <li className="bg-white rounded-lg shadow px-6 py-4">Hands-on, practical curriculum</li>
          <li className="bg-white rounded-lg shadow px-6 py-4">AI-enhanced modern learning tools</li>
          <li className="bg-white rounded-lg shadow px-6 py-4">Real world instructors—industry professionals</li>
        </ul>
        <blockquote className="italic border-l-4 border-primary pl-4 text-gray-700 mt-10">
          "Our mission is to make career success affordable and practical for every young Indian."
        </blockquote>
      </main>
      <Footer />
    </div>
  );
}
