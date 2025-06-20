import React, { useState, useEffect } from "react";

interface PopupFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: { name: string; email: string; phone: string; course: string; location: string }) => void;
}

const courseOptions = [
  "International PG Diploma in Business Administration & HR Management",
  "Advanced Diploma in Digital Marketing",
  "Advanced Diploma in Business and Hospital Administration",
  "Diploma Programs in Financial Accounting",
];

const PopupForm: React.FC<PopupFormProps> = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", location: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!open) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone) errs.phone = "Phone is required";
    else if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ""))) errs.phone = "Invalid phone";
    if (!form.course) errs.course = "Please select a course";
    if (!form.location) errs.location = "Location is required";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      if (onSubmit) onSubmit(form);
      else console.log(form);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fade-in border border-blue-100">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mb-6">
          <img src="/favicon.png" alt="Logo" className="w-12 h-12 mb-2" />
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1 text-center">Welcome to Mastered Skill Academy!</h2>
          <p className="text-gray-500 text-sm text-center">Let us know your details to get started</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/40 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/40 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/40 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/40 ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
          </div>
          <div>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/40 ${errors.course ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Preferred Course</option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition text-lg shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm; 