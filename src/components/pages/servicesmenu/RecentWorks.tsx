// components/pages/home/RecentWorks.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import ColorfulCard from "@/components/ui/colorful-card";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import Container from "@/components/shared/Container";
import { Rocket, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WorkProject {
    title: string;
    description: string;
    achievements: string[];
    buttonText: string;
    buttonLink: string;
    icon: React.ReactNode;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    bgColor: string;
    iconBgColor: string;
    imagePlaceholder?: boolean;
}

const recentWorks: WorkProject[] = [
    {
        title: "E-commerce Fashion Store",
        description:
            "We partnered with built a Shopify-powered store for a fast-growing fashion brand. With optimized product pages, secure payment gateways, and a seamless checkout flow, the brand saw:",
        achievements: [
            "+45% increase in conversions within the first 3 months",
            "Faster page load times (under 2 seconds)",
            "Mobile-first experience that drove repeat purchases",
        ],
        buttonText: "Visit Website",
        buttonLink: "#",
        icon: <Rocket size={20} />,
        variant: "fuchsia",
        bgColor: "bg-fuchsia-50",
        iconBgColor: "bg-fuchsia-200",
        imagePlaceholder: true,
    },
    {
        title: "CRM Dashboard for Healthcare",
        description:
            "A custom CRM system built for a healthcare provider to manage patient data more efficiently. Features included secure data handling, appointment tracking, and analytics dashboards. Results:",
        achievements: [
            "Streamlined patient records management",
            "Reduced admin workload by 35%",
            "Improved doctor-patient communication",
        ],
        buttonText: "Visit Website",
        buttonLink: "#",
        icon: <Rocket size={20} />,
        variant: "sky",
        bgColor: "bg-sky-50",
        iconBgColor: "bg-sky-200",
        imagePlaceholder: true,
    },
    {
        title: "Membership Portal for EdTech Startup",
        description:
            "We developed a scalable portal for an education-tech platform, designed to support thousands of users simultaneously. Key features included gamified learning paths, subscription management, and community tools. Achievements:",
        achievements: [
            "Onboarded 10,000+ users seamlessly",
            "Improved engagement through personalized dashboards",
            "Scalable architecture ready for rapid growth",
        ],
        buttonText: "Visit Website",
        buttonLink: "#",
        icon: <Rocket size={20} />,
        variant: "lime",
        bgColor: "bg-lime-50",
        iconBgColor: "bg-lime-200",
        imagePlaceholder: true,
    },
];

const RecentWorks = () => {
    return (
        <section className="w-full py-16 md:py-20">
            <Container>
                {/* Header */}
                <AnimatedContainer direction="up" delay={0.1}>
                    <div className="text-center mb-12 md:mb-16">
                        <Text
                            as="h6"
                            className="text-sm font-semibold text-blue-700 mb-2"
                        >
                            Our Works
                        </Text>
                        <Text
                            as="h2"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        >
                            Recent Works
                        </Text>
                        <Text className="text-primary/70 text-sm md:text-base max-w-2xl mx-auto">
                            Some of our latest web development projects.
                        </Text>
                    </div>
                </AnimatedContainer>

                {/* Work Items */}
                <div className="space-y-8 md:space-y-12">
                    {recentWorks.map((work, index) => (
                        <AnimatedContainer
                            key={work.title}
                            direction="up"
                            delay={0.2 + index * 0.1}
                        >
                            <ColorfulCard
                                variant={work.variant}
                                className={`${work.bgColor} rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                                    {/* Image Section - Always Left */}
                                    <div>
                                        <div className="relative w-full aspect-[4/3] bg-white/50 rounded-2xl overflow-hidden shadow-lg">
                                            {work.imagePlaceholder && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-center p-8">
                                                        <div
                                                            className={`${work.iconBgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                                                        >
                                                            {work.icon}
                                                        </div>
                                                        <Text className="text-sm text-primary/50">
                                                            Project Screenshot
                                                        </Text>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Section - Always Right */}
                                    <div>
                                        <div
                                            className={`${work.iconBgColor} p-2.5 rounded-lg w-fit mb-4`}
                                        >
                                            {work.icon}
                                        </div>

                                        <Text
                                            as="h3"
                                            className="text-2xl md:text-3xl font-bold mb-3"
                                        >
                                            {work.title}
                                        </Text>

                                        <Text className="text-sm md:text-base text-primary/70 mb-6 leading-relaxed">
                                            {work.description}
                                        </Text>

                                        <div className="space-y-2.5 mb-8">
                                            {work.achievements.map(
                                                (achievement, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <span className="text-primary/70 mt-1">
                                                            •
                                                        </span>
                                                        <Text className="text-sm md:text-base text-primary/80">
                                                            {achievement}
                                                        </Text>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <Button
                                            asChild
                                            className="h-11 px-6 bg-black hover:bg-gray-800 text-white rounded-full"
                                        >
                                            <Link
                                                href={work.buttonLink}
                                                className="flex items-center gap-2"
                                            >
                                                {work.buttonText}
                                                <ExternalLink size={16} />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </ColorfulCard>
                        </AnimatedContainer>
                    ))}
                </div>

                {/* CTA Section */}
                <AnimatedContainer direction="up" delay={0.6}>
                    <div className="mt-16 md:mt-20 text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-3xl">
                        <Text
                            as="h3"
                            className="text-2xl md:text-3xl font-bold mb-3"
                        >
                            Ready to start your project?
                        </Text>
                        <Text className="text-primary/70 text-sm md:text-base mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your vision and create something
                            amazing together.
                        </Text>
                        <Button
                            asChild
                            className="h-12 px-8 bg-black hover:bg-gray-800 text-white rounded-full"
                        >
                            <Link href="/contact" className="flex items-center gap-2">
                                Start Your Project
                                <ExternalLink size={16} />
                            </Link>
                        </Button>
                    </div>
                </AnimatedContainer>
            </Container>
        </section>
    );
};

export default RecentWorks;