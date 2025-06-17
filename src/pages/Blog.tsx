import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogs = [
  {
    id: 1,
    title: "News Rankings Cap a Strong Year in Academic Recognition",
    excerpt: "Education, Geometry",
    image: "/lovable-uploads/blog1.jpg",
    category: "Education, Geometry",
    date: "October 13, 2021",
    featured: true,
  },
  {
    id: 2,
    title: "Creating Students Who Solve Problems",
    excerpt: "Mathematics",
    image: "/lovable-uploads/blog2.jpg",
    category: "Mathematics",
    date: "October 13, 2021",
    featured: false,
  },
  {
    id: 3,
    title: "Professor Tom comments voluntary r...",
    excerpt: "Mentor",
    image: "/lovable-uploads/blog3.jpg",
    category: "Mentor",
    date: "October 13, 2021",
    featured: false,
  },
  {
    id: 4,
    title: "Database",
    excerpt: "Database",
    image: "/lovable-uploads/blog4.jpg",
    category: "Database",
    date: "October 13, 2021",
    featured: false,
  },
  {
    id: 5,
    title: "Geometry",
    excerpt: "Geometry",
    image: "/lovable-uploads/blog5.jpg",
    category: "Geometry",
    date: "October 13, 2021",
    featured: false,
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fafbfc] py-8 px-4 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {blogs.filter(b => !b.featured && b.id % 3 === 2).map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          {/* Center featured */}
          <div>
            {blogs.filter(b => b.featured).map(blog => (
              <BlogCard key={blog.id} blog={blog} featured />
            ))}
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-8">
            {blogs.filter(b => !b.featured && b.id % 3 !== 2).map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function BlogCard({ blog, featured }: { blog: any; featured?: boolean }) {
  return (
    <Link to={`/blog/${blog.id}`} className={`block group ${featured ? "md:h-[500px] h-[350px]" : "h-[250px]"}`}>
      <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white transition-transform group-hover:scale-105 ${featured ? "" : "border"}`}>
        <img src={blog.image} alt={blog.title} className="w-full h-2/3 object-cover" style={{ height: featured ? 320 : 140 }} />
        <div className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-1 rounded font-bold text-sm shadow">{blog.excerpt}</div>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-5 rounded-b-2xl">
          <div className="font-bold text-lg mb-1 line-clamp-2">{blog.title}</div>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {blog.date}
          </div>
        </div>
      </div>
    </Link>
  );
} 