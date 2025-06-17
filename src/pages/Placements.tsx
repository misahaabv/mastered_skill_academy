import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Placements() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-20 bg-[#fafbfc]">
        <h1 className="text-4xl font-bold mb-4 text-primary">Updating Soon !!!</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          Our placement information is being updated! Please check back soon for exciting news about our students' career journeys and success stories. Thank you for your patience and interest in Mastered Skill Academy.
        </p>
      </main>
      <Footer />
    </>
  );
}
