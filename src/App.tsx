import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import FinanceCourses from "./pages/FinanceCourses";
import React, { useState, useEffect } from "react";
import PopupForm from "./components/PopupForm";

const queryClient = new QueryClient();

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("popupSubmitted")) {
      setPopupOpen(true);
    }
  }, []);

  const handlePopupSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    course: string;
    location: string;
  }) => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbziPY7gJfZ8Z1rNqNdbD2TqR1HFfHSPr0aWU9MOqUqUmk8Akb5rx2qeMxbFW-izEE7UIg/exec",
        {
          method: "POST",
          mode: "no-cors", // Allows submission but blocks response reading
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Assume success if no error is thrown
      localStorage.setItem("popupSubmitted", "true");
      setPopupOpen(false);
      alert("Thank you! Your details have been submitted.");
    } catch (error) {
      alert("There was a problem submitting your details. Please try again.");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PopupForm
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          onSubmit={handlePopupSubmit}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/finance-courses" element={<FinanceCourses />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
