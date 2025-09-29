import React from "react";
import Text from "@/components/ui/text";
import ColorfulCard from "@/components/ui/colorful-card";
import Image from "next/image";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

const MissionContainer = () => {
    return (
        <section className="my-20 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
                {/* Left Side - Illustration */}
                <AnimatedContainer 
                    direction="left" 
                    delay={0.2}
                    className="w-full lg:w-[45%] flex justify-center items-center lg:mr-8"
                >
                    <div className="relative w-full max-w-2xl aspect-square bg-gradient-to-br rounded-3xl p-6 lg:p-8 flex justify-center items-center">
                        <Image
                            src="/images/missionillustration.png"
                            alt="Growth illustration"
                            width={700}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                </AnimatedContainer>

                {/* Right Side - Content */}
                <AnimatedContainer 
                    direction="right" 
                    delay={0.3}
                    className="w-full lg:w-[55%]"
                >
                    <div className="space-y-6">
                        <div>
                            <Text as="h6" className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                                Our mission
                            </Text>
                            <Text as="h2" className="text-3xl lg:text-4xl font-bold text-gray-900">
                                Our mission: Growth made simple
                            </Text>
                        </div>

                        <Text className="text-gray-600 text-sm lg:text-base leading-relaxed">
                            We believe every idea deserves the right tools to grow. That's why
                            we combine AI, strategy, and technology to help businesses scale
                            faster, smarter, and stronger.
                        </Text>

                        <div className="space-y-4 pt-2">
                            <div 
                                className="w-full rounded-xl py-3 px-5 flex items-center"
                                style={{ backgroundColor: '#FFE3FE' }}
                            >
                                <div className="flex items-center gap-3 w-full">
                                    <Text as="h3" className="text-xl lg:text-2xl font-bold text-gray-900">
                                        5+
                                    </Text>
                                    <Text className="text-sm font-normal text-gray-900">
                                        Years of experience
                                    </Text>
                                </div>
                            </div>

                            <div 
                                className="w-full rounded-xl py-3 px-5 flex items-center"
                                style={{ backgroundColor: '#ECFAFF' }}
                            >
                                <div className="flex items-center gap-3 w-full">
                                    <Text as="h3" className="text-xl lg:text-2xl font-bold text-gray-900">
                                        50+
                                    </Text>
                                    <Text className="text-sm font-normal text-gray-900">
                                        projects across industries
                                    </Text>
                                </div>
                            </div>

                            <div 
                                className="w-full rounded-xl py-3 px-5 flex items-center"
                                style={{ backgroundColor: '#EFFBE8' }}
                            >
                                <div className="flex items-center gap-3 w-full">
                                    <Text as="h3" className="text-xl lg:text-2xl font-bold text-gray-900">
                                        20+
                                    </Text>
                                    <Text className="text-sm font-normal text-gray-900">
                                        Active clients/subscriptions
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContainer>
            </div>
        </section>
    );
};

export default MissionContainer;