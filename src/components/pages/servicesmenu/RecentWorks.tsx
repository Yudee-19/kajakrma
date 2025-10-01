// components/pages/home/RecentWorks.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import ColorfulCard from "@/components/ui/colorful-card";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import Container from "@/components/shared/Container";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { getAllWorks, getWorksByService, type WorkProject } from "@/components/data/recentWorksData";

interface RecentWorksProps {
    serviceSlug?: string;
    limit?: number;
    showCTA?: boolean;
}

const RecentWorks: React.FC<RecentWorksProps> = ({
    serviceSlug,
    limit = 3,
    showCTA = true,
}) => {
    const works = serviceSlug 
        ? getWorksByService(serviceSlug).slice(0, limit)
        : getAllWorks().slice(0, limit);

    if (works.length === 0) return null;

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
                            {serviceSlug ? "Service" : "Our"} Portfolio
                        </Text>
                        <Text
                            as="h2"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        >
                            Recent Works
                        </Text>
                        <Text className="text-primary/70 text-sm md:text-base max-w-2xl mx-auto">
                            {serviceSlug
                                ? "Real results from real projects in this service category."
                                : "Some of our latest projects across different services."}
                        </Text>
                    </div>
                </AnimatedContainer>

                {/* Work Items */}
                <div className="space-y-8 md:space-y-12">
                    {works.map((work, index) => (
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

                
            </Container>
        </section>
    );
};

export default RecentWorks;