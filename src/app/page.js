import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import WelcomeSection from "../components/WelcomeSection.jsx";
import DestinationsSection from "../components/DestinationsSection.jsx";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <DestinationsSection />
    </>
  );
};

export default Page;
