import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Features from "../components/Features/Features";
import TopGames from "../components/Games/TopGames";
import FAQ from "../components/FAQ/FAQ";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <TopGames />
      <FAQ/>
    </>
  );
}

export default Home;
