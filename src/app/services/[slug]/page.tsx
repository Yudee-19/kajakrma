// app/services/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import Container from "@/components/shared/Container";
import AboutServiceSection from "@/components/pages/servicesmenu/AboutServiceSection";
import { serviceDetailsData } from "../../../components/data/serviceDetailsData";
import type { PageProps } from '@/types/services';

export default function ServiceDetailPage({ params }: PageProps) {
    const { slug } = params;
    const service = serviceDetailsData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="w-full">
            <Container className="py-20">
                {/* Back Link */}
                <AnimatedContainer direction="up" delay={0.1}>
                    <Link
                        href="/services"
                        className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 mb-8"
                    >
                        <ChevronLeft size={16} />
                        See All Services
                    </Link>
                </AnimatedContainer>

                {/* Hero Section */}
                <AnimatedContainer direction="up" delay={0.2}>
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 mb-16">
                        <div className="max-w-4xl">
                            <Text as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {service.title}
                            </Text>
                            <Text className="text-base lg:text-lg text-primary/70 mb-8 max-w-3xl leading-relaxed">
                                {service.description}
                            </Text>
                            <Button className="h-12 px-8 rounded-full bg-black hover:bg-gray-800">
                                <Link href="/" className="flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight size={16} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimatedContainer>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {service.features.map((feature, index) => (
                        <AnimatedContainer
                            key={feature.title}
                            direction="up"
                            delay={0.1 + index * 0.1}
                        >
                            <div
                                className={`${feature.bgColor} ${feature.textColor} p-6 rounded-2xl h-full`}
                            >
                                <Text as="h3" className="text-base font-semibold mb-3">
                                    {feature.title}
                                </Text>
                                <Text className="text-sm opacity-80 leading-relaxed">
                                    {feature.description}
                                </Text>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>

                {/* About This Service Section - Now using separate component */}
                <AboutServiceSection
                    aboutSections={service.aboutSections}
                    whyChoose={service.whyChoose}
                    process={service.process}
                />

                
            </Container>
        </div>
    );
}

export function generateStaticParams() {
    return Object.keys(serviceDetailsData).map((slug) => ({
        slug: slug,
    }));
}