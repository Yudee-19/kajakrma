import React from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import ColorfulCard from "@/components/ui/colorful-card";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import Container from "@/components/shared/Container";
import {
    Globe,
    TrendingUp,
    Cpu,
    Lightbulb,
    BarChart3,
    Users,
    Palette,
    Target,
    ChevronRight,
} from "lucide-react";

interface ServiceCategory {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    icon: React.ReactNode;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    bgColor: string;
    iconBgColor: string;
}

const serviceCategories: ServiceCategory[] = [
    {
        title: "Web & App Development",
        description: "",
        features: [
            "Custom websites",
            "dashboards",
            "CRMs",
            "e-commerce",
            "membership portals.",
        ],
        buttonText: "Build My Website",
        buttonLink: "/",
        icon: <Globe size={20} />,
        variant: "orange",
        bgColor: "bg-orange-50",
        iconBgColor: "bg-orange-200",
    },
    {
        title: "Marketing & Growth Solutions",
        description: "",
        features: [
            "Social media",
            "SEO",
            "email campaigns",
            "content",
            "brand strategy",
        ],
        buttonText: "Boost My Growth",
        buttonLink: "/",
        icon: <TrendingUp size={20} />,
        variant: "fuchsia",
        bgColor: "bg-fuchsia-50",
        iconBgColor: "bg-fuchsia-200",
    },
    {
        title: "Automation & AI Agents",
        description: "",
        features: [
            "Workflow automation",
            "AI assistants",
            "predictive analytics",
            "smart integrations",
            "AI Agents",
        ],
        buttonText: "Automate My Workflow",
        buttonLink: "/",
        icon: <Cpu size={20} />,
        variant: "sky",
        bgColor: "bg-sky-50",
        iconBgColor: "bg-sky-200",
    },
    {
        title: "MVP & Product Development",
        description: "",
        features: [
            "No-code/low-code MVPs",
            "feature testing",
            "scalable builds",
            "product strategy",
        ],
        buttonText: "Launch My Product",
        buttonLink: "/",
        icon: <Lightbulb size={20} />,
        variant: "lime",
        bgColor: "bg-lime-50",
        iconBgColor: "bg-lime-200",
    },
    {
        title: "Sales & Outreach Services",
        description: "",
        features: [
            "Visual identity",
            "UI/UX design",
            "brand positioning for a consistent digital presence",
        ],
        buttonText: "Get more clients",
        buttonLink: "/",
        icon: <BarChart3 size={20} />,
        variant: "indigo",
        bgColor: "bg-indigo-50",
        iconBgColor: "bg-indigo-200",
    },
    {
        title: "Hire team of developers",
        description: "",
        features: [
            "Compelling web copy",
            "blogs",
            "campaigns",
            "storytelling to engage audiences",
        ],
        buttonText: "Create My Content",
        buttonLink: "/",
        icon: <Users size={20} />,
        variant: "sky",
        bgColor: "bg-sky-50",
        iconBgColor: "bg-sky-200",
    },
    {
        title: "Brand Identity & Design",
        description: "",
        features: [
            "Performance tracking",
            "data dashboards",
            "insights to guide growth decisions",
        ],
        buttonText: "Analyze My Data",
        buttonLink: "/",
        icon: <Palette size={20} />,
        variant: "orange",
        bgColor: "bg-orange-50",
        iconBgColor: "bg-orange-200",
    },
    {
        title: "Consulting & Strategy",
        description: "",
        features: [
            "Business",
            "product",
            "digital strategy tailored to accelerate scaling",
        ],
        buttonText: "Plan My Strategy",
        buttonLink: "/",
        icon: <Target size={20} />,
        variant: "fuchsia",
        bgColor: "bg-fuchsia-50",
        iconBgColor: "bg-fuchsia-200",
    },
];

const ServiceContent = () => {
    return (
        <section className="w-full py-20">
            <Container>
                <AnimatedContainer direction="up" delay={0.1}>
                    <Text
                        as="h6"
                        className="text-sm font-semibold text-blue-700 text-center"
                    >
                        Our Services
                    </Text>
                    <Text
                        as="h2"
                        className="text-3xl font-bold text-center mt-2"
                    >
                        Comprehensive services, tailored for growth.
                    </Text>
                    <Text className="text-primary/70 text-sm mt-3 text-center max-w-2xl mx-auto">
                        Web, marketing, AI, product development, design, content,
                        data, and strategy — all under one roof.
                    </Text>
                </AnimatedContainer>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                    {serviceCategories.map((service, index) => (
                        <AnimatedContainer
                            key={service.title}
                            direction={index % 2 === 0 ? "left" : "right"}
                            delay={0.1 + index * 0.05}
                        >
                            <ColorfulCard
                                variant={service.variant}
                                className={`${service.bgColor} rounded-lg p-6 flex flex-col justify-between items-start h-full min-h-[320px]`}
                            >
                                <div className="flex flex-col gap-4 w-full">
                                    <div
                                        className={`${service.iconBgColor} p-2 rounded-lg w-fit`}
                                    >
                                        {service.icon}
                                    </div>
                                    <Text
                                        as="h4"
                                        className="text-lg font-semibold text-left"
                                    >
                                        {service.title}
                                    </Text>
                                    <ul className="space-y-1.5">
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="text-xs text-primary/70 text-left flex items-start"
                                            >
                                                <span className="mr-1.5">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    asChild
                                    className="w-full mt-4 h-10 bg-primary text-background hover:bg-primary/90"
                                >
                                    <a
                                        href={service.buttonLink}
                                        className="flex items-center justify-center gap-1"
                                    >
                                        {service.buttonText}
                                        <ChevronRight size={16} />
                                    </a>
                                </Button>
                            </ColorfulCard>
                        </AnimatedContainer>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServiceContent;