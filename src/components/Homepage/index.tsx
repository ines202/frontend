"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import AppBar from "../AppBar";
import AboutUs from "../aboutus";
import Services from "../sevices";
import Testimonials from "../testimonials";
import ContactUs from "../contactus";

type Props = {};

const Homepage = (props: Props) => {
  const router = useRouter();
  return (
    <div className="h-screen">
      <AppBar /> 
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs /> 
    </div>
  );
};

export default Homepage;
