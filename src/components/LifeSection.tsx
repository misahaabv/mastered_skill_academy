
export default function LifeSection() {
  return (
    <section className="container py-16 md:py-24 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Life at Mastered</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg overflow-hidden h-52 md:h-64 flex items-center justify-center relative">
          <span className="text-lg font-semibold text-gray-500 z-10">Campus Life</span>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden h-52 md:h-64 flex items-center justify-center relative">
          <span className="text-lg font-semibold text-gray-500 z-10">Classroom</span>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden h-52 md:h-64 flex items-center justify-center relative">
          <span className="text-lg font-semibold text-gray-500 z-10">Industry Visits</span>
        </div>
      </div>
      <div className="mt-8 text-center font-bold text-primary text-lg">Experience growth beyond textbooks</div>
    </section>
  )
}
