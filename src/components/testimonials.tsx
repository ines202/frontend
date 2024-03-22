import Link from 'next/link';
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my clinic and my patients health . Thanks to your amazing service",
      name: "Emily Stones",
      role: "doctor"
    },
    {
        quote: "I highly recommend your service to anyone looking to grow their clinic. You have truly done an exceptional job for us, and we are very grateful.",
        name: "John Doe",
        role: "Doctor"
      },
      {
        quote: "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my foot health and its all thanks to your amazing service",
        name: "Emily Stones",
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
        <div className="">
          <h3 className="text-2xl font-bold text-purple-700">Testimonials</h3>
          <p className="text-black mt-2 sm:text-title-xl2">See what our users say about us</p>
        </div>
        <div>
          <button onClick={prevTestimonial} className="bg-transparent border border-gray-300 text-black hover:bg-gray-100 rounded-full bg-purple-100 duration-150 cursor-pointer pt-4 pb-4 px-4 py-2 transition-transform transform hover:scale-110">
            Prev
          </button>
          <button onClick={nextTestimonial} className="bg-transparent border border-gray-300 text-black hover:bg-gray-100 rounded-full bg-purple-100  cursor-pointer ms-5 pt-4 pb-4 px-4 py-2 transition-transform transform hover:scale-110">
            Next
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="min-w-md max-w-md bg-white rounded-lg drop-shadow-xl p-6 transform hover:scale-105 transition-transform">
          <p className="text-black">{testimonials[activeIndex].quote}</p>
          <div className="mt-4">
            <p className="font-semibold text-black">{testimonials[activeIndex].name}</p>
            <p className="text-sm text-gray-500 text-black">{testimonials[activeIndex].role}</p>
          </div>
        </div>
      </div>
      <div>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 pt-30 pb-10 text-center">
          <h1 className="text-5xl font-bold text-purple-700 transition-all duration-500 hover:text-pink-700">
            DOWNLOAD
          </h1>
          <p className="mt-3 text-black text-2xl font-bold transition-all duration-500 hover:text-gray-700">
            Download Our App Mobile To Get More Foot Care.
          </p>
          <Link className="mt-5 mb-10 text-4xl text-black transition-all duration-500 hover:text-purple-700" href="#">
            <span className="text-purple-700">Doolab</span>Care
          </Link>
        </main>
      </div>
    </div>
  );
}
