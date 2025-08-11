import React, { useState, useEffect } from "react";
import avatar from "../../assets/avatar.svg";

const testimonials = [
  {
    image: avatar,
    name: "Jane Mwangi",
    role: "Small Business Owner",
    quote:
      "Pesalens has completely transformed the way I track my spending. I now understand exactly where my M-pesa money goes every month.",
  },
  {
    image: avatar,
    name: "John Otieno",
    role: "Freelancer",
    quote:
      "Before Pesalens, I had no idea how much I was overspending. Now I can set better budgets and stick to them.",
  },
  {
    image: avatar,
    name: "Mary Wanjiku",
    role: "Student",
    quote:
      "I love how easy it is to upload my statements and see my expenses broken down instantly.",
  },
];

const Testimonial: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section id="testimonials" className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Testimonials
        </h2>

        <div
          className="bg-white p-12 rounded-lg shadow-lg transition-all duration-500 ease-in-out"
          key={index} // key ensures animation reset when changing
        >
          <img
            className="w-25 h-25 rounded-full object-cover mb-5 mx-auto border-4 border-emerald-500"
            src={testimonials[index].image}
            alt={testimonials[index].name}
          />
          <p className="text-lg text-gray-700 italic mb-6">
            “{testimonials[index].quote}”
          </p>
          <h3 className="text-xl font-semibold">{testimonials[index].name}</h3>
          <p className="text-sm text-gray-500">{testimonials[index].role}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
