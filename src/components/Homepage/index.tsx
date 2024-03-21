"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import AppBar from "../AppBar";
import Services from "../sevices";

type Props = {};

const Homepage = (props: Props) => {
  const router = useRouter();
  return (
    <div className=" h-screen">
      <AppBar /> {/* Incluez votre AppBar ici */}
      <Services />
     { /*<ContactUsSection />
      <AboutUsSection />*/}
      
    </div>
  );
};

export default Homepage;
