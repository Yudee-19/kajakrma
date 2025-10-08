import React from "react";
import Text from "@/components/ui/text";
import Image from "next/image";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

const MissionContainer = () => {
  return (
    <section className="w-full mb-16 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
        
        {/* Left Side – Illustration */}
        <AnimatedContainer
          direction="left"
          delay={0.2}
          className="w-full lg:w-[45%] flex justify-center items-center"
        >
          <div className="relative w-full max-w-xl aspect-square bg-gradient-to-br p-3  flex justify-center items-center">
            <Image
              src="/images/missionillustration.png"
              alt="Growth illustration"
              width={900}
              height={900}
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </AnimatedContainer>

        {/* Right Side – Content */}
        <AnimatedContainer
          direction="right"
          delay={0.3}
          className="w-full lg:w-[55%]"
        >
          <div className="space-y-8 max-w-[800px]">
            {/* Mission Text */}
            <div className="flex flex-col">
              <Text
                as="h6"
                className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-4"
              >
                Our mission
              </Text>

              <Text
                as="h2"
                className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
              >
                Our mission: Growth made simple
              </Text>

              <Text className="text-gray-600 text-sm lg:text-base leading-relaxed">
                We believe every idea deserves the right tools to grow. That&apos;s why we combine
                AI, strategy, and technology to help businesses scale faster, smarter, and stronger.
              </Text>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-pink-100 rounded-xl py-4 px-6 flex items-center gap-4 shadow-sm">
                <Text
                  as="h3"
                  className="text-2xl font-bold text-gray-900 whitespace-nowrap"
                >
                  5+
                </Text>
                <Text className="text-gray-800 text-sm">
                  Years of experience
                </Text>
              </div>

              <div className="bg-cyan-50 rounded-xl py-4 px-6 flex items-center gap-4 shadow-sm">
                <Text
                  as="h3"
                  className="text-2xl font-bold text-gray-900 whitespace-nowrap"
                >
                  50+
                </Text>
                <Text className="text-gray-800 text-sm">
                  Projects across industries
                </Text>
              </div>

              <div className="bg-green-50 rounded-xl py-4 px-6 flex items-center gap-4 shadow-sm">
                <Text
                  as="h3"
                  className="text-2xl font-bold text-gray-900 whitespace-nowrap"
                >
                  20+
                </Text>
                <Text className="text-gray-800 text-sm">
                  Active clients/subscriptions
                </Text>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default MissionContainer;
