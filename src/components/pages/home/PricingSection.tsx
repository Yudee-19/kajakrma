"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CircleCheck,
  Rocket,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ColorfulCard from "@/components/ui/colorful-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";

// ---- PLAN INTERFACE ----
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

// ---- PACKAGE DATA ----
const Packages: Plan[] = [
  {
    icon: <Rocket size={20} />,
    variant: "fuchsia",
    title: "The Kickstarter",
    desc: "The Kickstarter is the perfect plan for small businesses & creators who want to launch their ideas online.",
    features: [
      "Start for free",
      "Landing page design",
      "4 pieces of social media content",
      "Launch your first ad",
      "30-day free trial",
      "Free strategy session",
    ],
    subtitle: "Start your 30-day free trial",
    price: "199.99",
    period: "/month",
    action: "Launch your idea!",
    actionLink: "/",
  },
  {
    icon: <Zap size={20} />,
    variant: "sky",
    title: "The Brand Builder",
    desc: "Ideal for businesses that want to grow their brand presence with consistent, high-quality content.",
    features: [
      "Social media content distribution",
      "Email marketing and newsletters",
      "e-Commerce stores",
      "Funnel building",
      "CRO-focused landing pages",
      "Cross-platform strategy",
    ],
    subtitle: "Perfect for growing brands",
    price: "1,459.99",
    period: "/month",
    action: "Build your brand",
    actionLink: "/",
  },
  {
    icon: <TrendingUp size={20} />,
    variant: "lime",
    title: "The 7-Figure Roadmap",
    desc: "Perfect for established businesses aiming to scale from 6 to 7 figures in profit.",
    features: [
      "Content diversification across multiple platforms",
      "A/B testing and optimization",
      "High-budget ad campaigns",
      "SEO & content optimization",
      "Analytics and insights dashboard",
      "Tailored growth strategy",
    ],
    subtitle: "Cancel anytime",
    price: "4,999.00",
    period: "/month",
    action: "Go to the next level",
    actionLink: "/",
  },
];

const PricingSection = () => {
  const [selected, setSelected] = useState<string>("web");

  const iconColorVariants: Record<
    Plan["variant"],
    string
  > = {
    sky: "bg-sky-300",
    fuchsia: "bg-fuchsia-300",
    lime: "bg-lime-300",
    orange: "bg-orange-300",
    rose: "bg-rose-300",
    indigo: "bg-indigo-300",
  };

  return (
    <section className="my-20 w-full">
      {/* Heading */}
      <div className="text-center">
        <Text as="h6" className="text-sm font-semibold text-blue-700">
          Pricing
        </Text>
        <Text as="h2" className="text-3xl font-bold mt-2">
          For creators, brands, and agencies
        </Text>
        <Text className="text-primary/70 text-sm mt-3">
          Choose a plan that fits your business goals.
        </Text>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex justify-center items-center w-full lg:px-20">
        <Tabs defaultValue="package" className="w-full flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="package">Packages</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          {/* ---- PACKAGES TAB ---- */}
          <TabsContent value="package" className="w-full mt-10 space-y-5">
            {Packages.map((plan) => (
              <ColorfulCard
                key={plan.title}
                variant={plan.variant}
                className="p-10 rounded-md w-full"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  {/* Left side content */}
                  <div className="flex flex-col gap-2">
                    <div
                      className={cn(
                        "p-2 rounded-sm w-fit",
                        iconColorVariants[plan.variant]
                      )}
                    >
                      {plan.icon}
                    </div>
                    <Text as="h4" className="text-lg font-semibold">
                      {plan.title}
                    </Text>
                    <Text className="text-sm text-primary/70 max-w-md">
                      {plan.desc}
                    </Text>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2"
                        >
                          <CircleCheck size={12} />
                          <Text className="text-xs">{feature}</Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side pricing box */}
                  <div className="px-10 py-6 min-w-[250px] bg-white shadow-md rounded-md flex flex-col justify-center items-center gap-4">
                    <p className="text-sm text-gray-500">{plan.subtitle}</p>
                    <div className="flex items-baseline gap-1">
                      <Text as="h2" className="text-4xl font-bold">
                        ${plan.price}
                      </Text>
                      <p className="text-xs text-gray-600">{plan.period}</p>
                    </div>
                    <Button asChild className="h-10 w-full">
                      <Link href={plan.actionLink}>
                        {plan.action}
                        <ChevronRight size={12} className="ml-2 text-white" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ColorfulCard>
            ))}
          </TabsContent>

          {/* ---- SERVICES TAB ---- */}
          <TabsContent value="services" className="w-full mt-16">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
              {/* LEFT SIDE */}
              <div className="w-full lg:w-1/2">
                <Text as="h4" className="text-gray-500 text-left">
                  We&apos;re a team of builders, strategists, and innovators helping
                  businesses grow with AI, marketing, and technology.
                </Text>

                <Accordion
                  type="single"
                  collapsible
                  className="py-8 divide-y divide-gray-200"
                >
                  {[
                    {
                      key: "web",
                      label: "Web & App Development",
                     desc: "We build powerful, high-performance websites and mobile applications tailored to your brand and business goals. Our team focuses on creating seamless user experiences, responsive interfaces, and scalable solutions that help you attract, engage, and retain customers effectively.",
    },
                    {
                      key: "marketing",
                      label: "Marketing & Growth Solutions",
                    desc: "From search engine optimization (SEO) to paid ad campaigns, we craft strategies that accelerate your brand’s growth. Our team analyzes user behavior, optimizes your funnels, and creates compelling content that converts — helping you reach the right audience at the right time.",
    },
                    {
                      key: "automation",
                      label: "Automation & AI Agents",
                      desc: "Automate your business workflows with custom-built AI agents and intelligent automation tools. We design systems that reduce repetitive tasks, improve operational accuracy.",
                    },
                    {
                      key: "mvp",
                      label: "MVP & Product Development",
                      desc: "We transform your idea into a working MVP with scalable technology.",
                    },
                    {
                      key: "sales",
                      label: "Sales & Outreach Services",
                      desc: "Automate outreach with intelligent CRM systems and personalized workflows.",
                    },
                    {
                      key: "brand",
                      label: "Brand Identity & Design",
                      desc: "Build a strong, memorable brand identity that stands out everywhere.",
                    },
                  ].map((item) => (
                    <AccordionItem key={item.key} value={item.key}>
                      <AccordionTrigger
                        onClick={() => setSelected(item.key)}
                        className="py-4 text-left font-medium hover:underline decoration-black"
                      >
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-sm py-2">
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* RIGHT SIDE CARD */}
              <div className="w-full lg:w-1/2 bg-blue-50 rounded-2xl p-10 shadow-sm transition-all duration-300">
                <Text as="h3" className="text-2xl font-semibold mb-2 capitalize">
                  {selected.replace(/-/g, " ")}
                </Text>
                <Text className="text-sm text-gray-500 mb-6">
                  Choose Your Plan
                </Text>

                <div className="flex space-x-2 mb-6">
                  {["Basic", "Premium", "Advance"].map((plan) => (
                    <span
                      key={plan}
                      className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {plan}
                    </span>
                  ))}
                </div>

                <Text className="text-4xl font-bold mb-6">$3500</Text>

                <Text className="text-base font-semibold mb-2">
                  Deliverables:
                </Text>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2 mb-6">
                  <li>Custom websites & landing pages aligned with your brand</li>
                  <li>Dashboards & analytics for real-time insights</li>
                  <li>CRM systems tailored to your workflow</li>
                  <li>Scalable e-commerce solutions</li>
                  <li>Ongoing support & maintenance</li>
                </ul>

                <Button className="bg-black text-white text-sm px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
                  <span>Build My Website</span>
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
