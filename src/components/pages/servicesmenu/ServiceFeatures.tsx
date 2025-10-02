import React from "react";
import Text from "@/components/ui/text";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const getBgColor = (index: number) => {
    const colors = ["bg-orange-50", "bg-pink-50", "bg-blue-50", "bg-cyan-50"];
    return colors[index % colors.length];
  };

  const getMarginTop = (index: number) => {
    if (index === 0) return "mt-0";
    if (index === 1) return "mt-8 md:mt-12";
    if (index === 2) return "mt-0";
    if (index === 3) return "mt-8 md:mt-12";
    return "mt-0";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
      {features.map((feature, index) => (
        <AnimatedContainer
          key={feature.title}
          direction="up"
          delay={0.1 + index * 0.08}
          className={getMarginTop(index)}
        >
          <div
            className={`${getBgColor(index)} p-6 rounded-2xl h-[320px] md:h-[360px] relative overflow-hidden transition-all duration-300 hover:shadow-lg group text-gray-900`}
          >
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <Text as="h3" className="text-sm md:text-base font-bold leading-snug -rotate-2 mb-6">
                {feature.title}
              </Text>
              <Text className="text-xs opacity-70 leading-relaxed max-w-[90%]">
                {feature.description}
              </Text>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </AnimatedContainer>
      ))}
    </div>
  );
}