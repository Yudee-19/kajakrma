// components/pages/servicesmenu/PricingContainer.tsx
"use client";

import React from "react";
import Text from "@/components/ui/text";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import ColorfulCard from "@/components/ui/colorful-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

interface PricingPlan {
    title: string;
    subtitle: string;
    price: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    isPopular?: boolean;
}

interface PricingContainerProps {
    title?: string;
    subtitle?: string;
    plans: PricingPlan[];
    tabs?: string[];
}

const PricingContainer: React.FC<PricingContainerProps> = ({
    title = "Transparent Pricing Plans",
    subtitle = "We offer flexible plans depending on your needs — from simple websites to complex platforms.",
    plans,
    tabs = ["Websites", "CRMs & ERP", "E-Commerce"],
}) => {
    const [activeTab, setActiveTab] = React.useState(tabs[0]);

    return (
        <section className="py-20 px-4">
            <AnimatedContainer direction="up" delay={0.1}>
                <div className="text-center mb-12">
                    <Text
                        as="h6"
                        className="text-sm font-semibold text-blue-600 mb-3"
                    >
                        Our Pricing
                    </Text>
                    <Text as="h2" className="text-3xl lg:text-5xl font-bold mb-4">
                        {title}
                    </Text>
                    <Text className="text-base text-gray-600 max-w-2xl mx-auto">
                        {subtitle}
                    </Text>
                </div>
            </AnimatedContainer>

            {/* Tabs */}
            <AnimatedContainer direction="up" delay={0.2}>
                <div className="flex justify-center gap-2 mb-16 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeTab === tab
                                    ? "bg-black text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </AnimatedContainer>

            {/* Pricing Cards - Zigzag Wave Pattern */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
                {plans.map((plan, index) => (
                    <AnimatedContainer
                        key={plan.title}
                        direction="up"
                        delay={0.3 + index * 0.1}
                        className={`${
                            index === 0 ? "md:mb-16" : index === 1 ? "md:mb-0" : "md:mb-32"
                        }`}
                    >
                        <ColorfulCard
                            variant={plan.variant}
                            className="relative h-full rounded-3xl p-8 flex flex-col shadow-xl"
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="flex-grow">
                                <Text as="h3" className="text-2xl font-bold mb-1">
                                    {plan.title}
                                </Text>
                                <Text className="text-base text-primary/70 mb-8">
                                    {plan.subtitle}
                                </Text>

                                <div className="mb-8">
                                    <Text as="h2" className="text-5xl font-bold">
                                        {plan.price}
                                    </Text>
                                </div>

                                <div className="space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check
                                                    size={14}
                                                    className="text-primary font-bold"
                                                    strokeWidth={3}
                                                />
                                            </div>
                                            <Text className="text-base text-primary/90 leading-relaxed">
                                                {feature}
                                            </Text>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button
                                asChild
                                className="w-full bg-black hover:bg-gray-900 text-white rounded-full py-6 font-semibold text-base shadow-lg transition-all duration-300 hover:shadow-xl"
                            >
                                <Link href={plan.buttonLink}>
                                    {plan.buttonText}
                                    <span className="ml-2">→</span>
                                </Link>
                            </Button>
                        </ColorfulCard>
                    </AnimatedContainer>
                ))}
            </div>
        </section>
    );
};

export default PricingContainer;