import { useParams, Link } from "react-router-dom";
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.",
  },
  {
    id: 2,
    title: "Creating Students Who Solve Problems",
    excerpt: "Mathematics",
    image: "/lovable-uploads/blog2.jpg",
    category: "Mathematics",
    date: "October 13, 2021",
    content: "This is the full content for Creating Students Who Solve Problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    title: "Professor Tom comments voluntary r...",
    excerpt: "Mentor",
    image: "/lovable-uploads/blog3.jpg",
    category: "Mentor",
    date: "October 13, 2021",
    content: "This is the full content for Professor Tom comments voluntary r.... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 4,
    title: "Database",
    excerpt: "Database",
    image: "/lovable-uploads/blog4.jpg",
    category: "Database",
    date: "October 13, 2021",
    content: "This is the full content for Database. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 5,
    title: "Geometry",
    excerpt: "Geometry",
    image: "/lovable-uploads/blog5.jpg",
    category: "Geometry",
    date: "October 13, 2021",
    content: "This is the full content for Geometry. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));
  if (!blog) return <div className="p-8">Blog not found.</div>;
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fafbfc] py-8 px-4 md:px-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
        <div className="text-blue-700 font-bold mb-2">{blog.category}</div>
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div className="text-gray-500 text-sm mb-6">{blog.date}</div>
        <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">{blog.content}</div>
      </div>
      <Footer />
    </>
  );
}

export { blogs }; 