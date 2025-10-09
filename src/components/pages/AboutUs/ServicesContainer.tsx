import React from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import {
    SquareCode,
    Brain,
    Laptop,
    Smartphone,
    Target,
    MessageSquare,
    Users,
    Sparkles,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

interface Service {
    icon: React.ReactNode;
    iconBgColor: string;
    iconColor: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: <SquareCode size={20} />,
        iconBgColor: "bg-rose-200",
        iconColor: "text-rose-600",
        title: "Web Applications",
        description:
            "We build powerful, scalable web applications tailored to your business needs - from dashboards to SaaS platforms.",
    },
    {
        icon: <Brain size={20} />,
        iconBgColor: "bg-fuchsia-200",
        iconColor: "text-fuchsia-600",
        title: "AI Agents",
        description:
            "Deploy AI agents to handle lead calls, automate tasks, and boost operational efficiency - as if a real team member is working.",
    },
    {
        icon: <Laptop size={20} />,
        iconBgColor: "bg-orange-200",
        iconColor: "text-orange-600",
        title: "Website Development",
        description:
            "Whether you want full-stack custom code or a fast no-code build - we deliver stunning websites with seamless performance.",
    },
    {
        icon: <Smartphone size={20} />,
        iconBgColor: "bg-indigo-200",
        iconColor: "text-indigo-600",
        title: "Mobile App Development",
        description:
            "Launch high-performing iOS and Android apps - built natively or cross-platform - with beautiful UI and robust features.",
    },
    {
        icon: <Target size={20} />,
        iconBgColor: "bg-purple-200",
        iconColor: "text-purple-600",
        title: "Landing pages",
        description:
            "We craft beautiful landing pages with stunning design and content is strategically written to drive engagement and boost conversions.",
    },
    {
        icon: <MessageSquare size={20} />,
        iconBgColor: "bg-lime-200",
        iconColor: "text-lime-600",
        title: "Digital Marketing",
        description:
            "From social media to search - we run result-driven campaigns that increase visibility, drive traffic, and convert leads.",
    },
    {
        icon: <Users size={20} />,
        iconBgColor: "bg-indigo-200",
        iconColor: "text-indigo-600",
        title: "Social media Management",
        description:
            "We manage your social media with creative strategy and consistent branding, grow your presence, and build lasting connections.",
    },
    {
        icon: <Sparkles size={20} />,
        iconBgColor: "bg-orange-200",
        iconColor: "text-orange-600",
        title: "Brand Building",
        description:
            "We help you create an unforgettable digital brand - everything from your logo, landing pages, content, to marketing execution.",
    },
];

const ServicesContainer = () => {
    return (
        <section className="mb-16 w-full flex flex-col items-center">
            {/* AnimatedContainer को केवल एक ही child element मिलेगा */}
            <AnimatedContainer direction="right" delay={0.2}>
                <div className="w-full">
                    
                    {/* 1. Header Section - Center Aligned */}
                    <div className="flex flex-col items-center w-full max-w-7xl px-4 lg:px-20 mx-auto text-center">
                        <Text as={"h6"} className="text-sm font-semibold text-blue-700">
                            Our Services
                        </Text>
                        <Text as={"h2"} className="text-4xl font-extrabold mt-2 leading-tight">
                            Everything you need — under <br className="hidden md:inline"/> one expert roof.
                        </Text>
                        
                        <Text className="text-primary/70 text-base mt-4 max-w-2xl">
                            We design, develop, and deliver tech solutions that help you build,
                            launch, scale, and automate your digital presence.
                        </Text>
                        <Button asChild className="mt-8 h-12 px-8 bg-black hover:bg-gray-800 text-white rounded-full text-base font-semibold">
                            <Link href="/" className="flex items-center gap-2">
                                Let&apos;s Build
                                <ChevronRight size={18} />
                            </Link>
                        </Button>
                    </div>

                    {/* 2. Service Items - Grid Layout, Left Aligned Content */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-12 w-full lg:px-20 max-w-7xl mx-auto">
                        {services.map((service) => (
                            <div
                                className="flex flex-col justify-start items-start text-left max-w-sm mx-auto md:mx-0"
                                key={service.title}
                            >
                                {/* Icon and Title */}
                                <div className="flex items-center gap-3 mb-2">
                                    <div
                                        className={cn(
                                            "p-2.5 rounded-lg",
                                            service.iconBgColor,
                                            service.iconColor
                                        )}
                                    >
                                        {service.icon}
                                    </div>
                                    <Text as="h4" className="text-lg font-bold">
                                        {service.title}
                                    </Text>
                                </div>

                                {/* Description */}
                                <Text className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                </Text>
                            </div>
                        ))}
                    </div>

                </div>
            </AnimatedContainer>
        </section>
    );
};

export default ServicesContainer;