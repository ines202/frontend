import Link from 'next/link';
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my clinic and my patients health. Thanks to your amazing service.",
      name: "Emily Stones",
      role: "Doctor"
    },
    {
      quote: "The ability to monitor my patients' progress remotely has been a game-changer for my practice.",
      name: "Laura Wilson",
      role: "Diabetes Specialist"
    },
    {
      quote: "As a diabetic patient, this service has been a lifesaver. The ease of tracking my health has made a significant difference.",
      name: "Michael Brown",
      role: "Patient"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-purple-700">Testimonials</h3>
          <p className="text-black mt-2 sm:text-title-xl2">See what our users say about us</p>
        </div>
        <div>
          <button
            onClick={prevTestimonial}
            className="bg-transparent border border-gray-300 text-black hover:bg-gray-100 rounded-full duration-150 cursor-pointer p-4 transition-transform transform hover:scale-110"
          >
            Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-transparent border border-gray-300 text-black hover:bg-gray-100 rounded-full cursor-pointer ml-5 p-4 transition-transform transform hover:scale-110"
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="min-w-md max-w-md bg-white rounded-lg drop-shadow-xl p-6 transform hover:scale-105 transition-transform">
          <p className="text-black">{testimonials[activeIndex].quote}</p>
          <div className="mt-4">
            <p className="font-semibold text-black">{testimonials[activeIndex].name}</p>
            <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 pt-30 pb-10 text-center">
        <h1 className="text-5xl font-bold text-purple-700 transition-all duration-500 hover:text-pink-700">
          DOWNLOAD
        </h1>
        <p className="mt-3 text-black text-2xl font-bold transition-all duration-500 hover:text-gray-700">
          Download Our Mobile App To Get More Foot Care.
        </p>
        <Link className="mt-5 mb-10 text-4xl text-black transition-all duration-500 hover:text-purple-700" href="#">
            <span className="text-purple-700">Doolab</span>Care
          </Link>
      </div>
    </div>
  );
}
