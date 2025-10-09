// components/ServiceDetailHero.tsx

import React from "react";
import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

interface ServiceDetailHeroProps {
  title: string;
  description: string;
}

export default function ServiceDetailHero({ title, description }: ServiceDetailHeroProps) {
  return (
    // Fragment का उपयोग करके मल्टीपल रूट्स को रेंडर करना
    <>
      {/* Back Link */}
      <AnimatedContainer direction="up" delay={0.1}>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          See All Services
        </Link>
      </AnimatedContainer>

      {/* Hero Section - 1 कॉलम छोटे स्क्रीन पर, 2 कॉलम बड़ी स्क्रीन पर */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
        
        {/* Left: Title */}
        <AnimatedContainer direction="left" delay={0.2}>
          <Text as="h1" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {title}
          </Text>
        </AnimatedContainer>

        {/* Right: Description & Button */}
        <AnimatedContainer direction="right" delay={0.3}>
          <div className="flex flex-col justify-center h-full">
            <Text className="text-sm md:text-base text-primary/70 mb-6 leading-relaxed">
              {description}
            </Text>
            <Button className="h-11 px-6 rounded-full bg-black hover:bg-gray-800 text-white w-fit">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </>
  );
}