import { Button } from "@/components/ui/button";
import ColorfulCard from "@/components/ui/colorful-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    ChevronRight,
    CircleCheck,
    Globe,
    Rocket,
    TrendingUp,
    Zap,
} from "lucide-react";
import { desc, sub } from "motion/react-client";
import Link from "next/link";
import { title } from "process";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
interface Plan {
    icon: React.ReactNode;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    title: string;
    desc: string;
    features: string[];
    subtitle: string;
    price: string;
    period: string;
    action: string;
    actionLink: string;
}
const Packages: Plan[] = [
    {
        icon: <Rocket size={20} />,
        variant: "fuchsia",
        title: "The Kickstarter",
        desc: "The Kickstarter is the perfect plan for small business & creators who want to launch their ideas online.",
        features: [
            "Start for free",
            "Landing page design",
            "4 pieces of social media content",
            "Launch your first ad",
            "30/day free trial",
            "Free strategy session",
        ],
        subtitle: "Start your 30/day free trial",
        price: "199.99",
        period: "/per month",
        action: "Launch your idea!",
        actionLink: "/",
    },
    {
        icon: <Zap size={20} />,
        variant: "sky",
        title: "The Brand builder",
        desc: "The perfect choice for business who want to grow their social media presence with organic content.",
        features: [
            "Social media content distribution",
            "Email marketing and newsletter",
            "e-Commerce stores",
            "Funnel building",
            "Landing pages focused on CRO",
            "Multiple platforms",
        ],
        subtitle: "Perfect for new brands",
        price: "1,459.99",
        period: "/per month",
        action: "Build your brand",
        actionLink: "/",
    },
    {
        icon: <TrendingUp size={20} />,
        variant: "lime",
        title: "The 7-figure roadmap",
        desc: "This plan is perfect for established businesses who want to grow from 6 to 7 figures in profit.",
        features: [
            "Content diversification to multiple platforms",
            "A/B testing",
            "Big Ads campaigns",
            "SEO & content optimization",
            "Data & Analytics Implementation",
            "Different marketing strategies",
        ],
        subtitle: "Cancel anytime",
        price: "4,999.00",
        period: "/per month",
        action: "Go to the next level",
        actionLink: "/",
    },
];

const PricingSection = () => {
    const iconColorVariants = {
        sky: "bg-sky-300",
        fuchsia: "bg-fuchsia-300",
        lime: "bg-lime-300",
        orange: "bg-orange-300",
        rose: "bg-rose-300",
        indigo: "bg-indigo-300",
    };
    return (
        <section className="my-20 w-full">
            <Text as={"h6"} className="text-sm font-semibold text-blue-700 ">
                Pricing
            </Text>
            <Text as={"h2"} className="text-3xl font-bold ">
                For creators, brands and agencies.
            </Text>
            <Text className=" text-primary/70 text-sm mt-5">
                We offer you different options to make your life easier.
            </Text>
            <div className="mt-10 flex justify-center items-center  w-full lg:px-20 ">
                <Tabs
                    defaultValue="package"
                    className="w-full flex justify-center items-center "
                >
                    <TabsList className=" ">
                        <TabsTrigger value="package">Package</TabsTrigger>
                        <TabsTrigger value="services">Services</TabsTrigger>
                    </TabsList>
                    <TabsContent value="package" className="w-full">
                        {Packages.map((plan) => (
                            <ColorfulCard
                                variant={plan.variant}
                                className="p-10 rounded-md w-full my-2.5 "
                                key={plan.title}
                            >
                                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                                    <div className=" flex flex-col justify-between items-start gap-2 ">
                                        <div
                                            className={cn(
                                                "p-2 rounded-sm",
                                                iconColorVariants[plan.variant]
                                            )}
                                        >
                                            {plan.icon}
                                        </div>
                                        <Text
                                            as="h4"
                                            className="text-lg font-semibold"
                                        >
                                            {plan.title}
                                        </Text>
                                        <Text className="text-sm text-primary/70 max-w-sm text-left">
                                            {plan.subtitle}
                                        </Text>
                                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 ">
                                            {plan.features.map((feature) => (
                                                <div
                                                    className=" flex justify-start items-center gap-2"
                                                    key={feature}
                                                >
                                                    <CircleCheck size={10} />
                                                    <Text className="text-xs text-primary text-left">
                                                        {feature}
                                                    </Text>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className=" px-10 min-w-xs flex flex-col justify-between items-center gap-5 max-md:w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm">
                                        <p>{plan.subtitle}</p>
                                        <div className="flex justify-center items-center gap-2 ">
                                            <Text
                                                as="h2"
                                                className="text-4xl font-bold"
                                            >
                                                ${plan.price}
                                            </Text>
                                            <p className="text-xs font-normal">
                                                {plan.period}
                                            </p>
                                        </div>
                                        <Button asChild className="h-10 w-full">
                                            <Link href={plan.actionLink}>
                                                {plan.action}
                                                <ChevronRight
                                                    size={5}
                                                    className="bg-secondary rounded-[2px] text-primary"
                                                />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </ColorfulCard>
                        ))}
                    </TabsContent>
                    <TabsContent value="services">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <div>
                                <Text
                                    as="h4"
                                    className="text-gray-500 text-left "
                                >
                                    We&apos;re a team of builders, strategists,
                                    and innovators helping businesses grow with
                                    AI, digital marketing, and technology.
                                </Text>
                                <Accordion
                                    type="single"
                                    defaultValue="item-1"
                                    className="py-20"
                                >
                                    <AccordionItem
                                        value="item-1"
                                        className="flex border-none flex-col md:flex-row justify-between items-center max-h-10"
                                    >
                                        <AccordionTrigger className="flex justify-between items-center ">
                                            Web and App Development{" "}
                                            <ArrowRight size={15} />
                                        </AccordionTrigger>
                                        <AccordionContent className="overflow-visible">
                                            <ColorfulCard
                                                variant="indigo"
                                                className="rounded-xl px-10 py-10 max-w-lg flex flex-col justify-between items-start gap-5"
                                            >
                                                <div className="flex  justify-between items-start gap-5">
                                                    <Text className="text-xl font-semibold   text-left">
                                                        Web & App <br />{" "}
                                                        Development
                                                    </Text>
                                                    <Globe
                                                        size={20}
                                                        className="mt-1 bg-indigo-200 rounded-sm p-1 "
                                                    />
                                                </div>
                                                <div>
                                                    <Text className="text-sm text-primary/70 mt-5 text-left">
                                                        Choose your plans
                                                    </Text>
                                                </div>
                                            </ColorfulCard>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem
                                        value="item-2"
                                        className="flex border-none flex-col md:flex-row justify-between items-center max-h-10"
                                    >
                                        <AccordionTrigger>
                                            Is it accessible?
                                        </AccordionTrigger>
                                        <AccordionContent className="overflow-visible">
                                            <ColorfulCard
                                                variant="indigo"
                                                className="rounded-xl px-20 py-10 max-w-lg"
                                            >
                                                <div className="flex  justify-between items-start gap-5">
                                                    <Text className="text-xl font-semibold   text-left">
                                                        Web & App <br />{" "}
                                                        Development
                                                    </Text>
                                                    <Globe
                                                        size={20}
                                                        className="mt-1 bg-indigo-200 rounded-sm p-1 "
                                                    />
                                                </div>
                                                <div></div>
                                            </ColorfulCard>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div></div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default PricingSection;
