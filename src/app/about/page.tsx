// app/about/page.tsx
import React from "react";
import ServicesContainer from "../../components/pages/AboutUs/ServicesContainer";
import MissionContainer from "@/components/pages/AboutUs/MissionContaine";
import HeadContainer from "@/components/pages/AboutUs/HeadContainer";
import JourneyContainer from "@/components/pages/AboutUs/JourneyContainer";
const AboutPage = () => {
  return (
    <main className="w-full">
     <HeadContainer/>
     <MissionContainer/>
     <ServicesContainer />
     <JourneyContainer/>
    </main>
  );
};

export default AboutPage;
