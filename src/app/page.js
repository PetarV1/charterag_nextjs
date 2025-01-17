import React from "react";
import HeroSection from "@/components/HeroSection.jsx";
import WelcomeSection from "@/components/WelcomeSection.jsx";
import DestinationsSection from "@/components/DestinationsSection.jsx";
import TripSection from "@/components/TripSection.jsx";
import PaymentSection from "@/components/PaymentSection.jsx";
import AboutPaymentSection from "@/components/AboutPaymentSection.jsx";
import SocialMediaSection from "@/components/SocialMediaSection.jsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <DestinationsSection />
      <TripSection />
      <PaymentSection />
      <AboutPaymentSection />
      <SocialMediaSection />
      <Footer />
    </>
  );
};

export default Page;
