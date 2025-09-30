// components/pages/servicesmenu/AboutServiceSection.tsx
import React from "react";
import Text from "@/components/ui/text";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import ColorfulCard from "@/components/ui/colorful-card";

interface AboutSection {
    title: string;
    description: string;
}

interface WhyChoose {
    title: string;
    description: string;
    benefits: string[];
}

interface ProcessStep {
    step: number;
    title: string;
    description: string;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
}

interface AboutServiceSectionProps {
    aboutSections: AboutSection[];
    whyChoose: WhyChoose;
    process: ProcessStep[];
}

const AboutServiceSection: React.FC<AboutServiceSectionProps> = ({
    aboutSections,
    whyChoose,
    process,
}) => {
    return (
        <section className="mb-20">
            <AnimatedContainer direction="up" delay={0.2}>
                <Text as="h2" className="text-3xl lg:text-4xl font-bold mb-12">
                    About This Service
                </Text>
            </AnimatedContainer>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Half - About Sections (4 cards in 2x2 grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutSections.map((section, index) => (
                        <AnimatedContainer
                            key={section.title}
                            direction="up"
                            delay={0.1 + index * 0.1}
                        >
                            <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                                <Text as="h4" className="font-semibold mb-2 text-base">
                                    {section.title}
                                </Text>
                                <Text className="text-sm text-primary/70 leading-relaxed">
                                    {section.description}
                                </Text>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>

                {/* Right Half - Why Choose + Process Section */}
                <div className="flex flex-col gap-4">
                    {/* Why Choose */}
                    <AnimatedContainer direction="right" delay={0.3}>
                        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-6 rounded-2xl border border-blue-100">
                            <Text as="h3" className="text-xl font-semibold mb-3">
                                {whyChoose.title}
                            </Text>
                            <Text className="text-sm text-primary/70 mb-4 leading-relaxed">
                                {whyChoose.description}
                            </Text>
                            <div className="space-y-2">
                                {whyChoose.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                        <Text className="text-sm text-primary/80 leading-relaxed">
                                            {benefit}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedContainer>

                    {/* Process Section */}
                    <AnimatedContainer direction="right" delay={0.4}>
                        <Text as="h3" className="text-xl font-semibold mb-3">
                            Our Process ({process.length} Steps):
                        </Text>
                        
                        <div className="flex flex-col gap-3">
                            {process.map((step, index) => (
                                <ColorfulCard
                                    key={step.step}
                                    variant={step.variant}
                                    className="p-5 rounded-2xl"
                                >
                                    <div className="flex items-start gap-4">
                                        <Text className="font-bold text-xl min-w-[2rem]">
                                            {step.step}.
                                        </Text>
                                        <div className="flex-1">
                                            <Text className="font-semibold text-base mb-1">
                                                {step.title}
                                            </Text>
                                            <Text className="text-sm text-primary/70 leading-relaxed">
                                                {step.description}
                                            </Text>
                                        </div>
                                    </div>
                                </ColorfulCard>
                            ))}
                        </div>
                    </AnimatedContainer>
                </div>
            </div>
        </section>
    );
};

export default AboutServiceSection;