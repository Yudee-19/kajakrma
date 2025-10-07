"use client";

import { Button } from "@/components/ui/button";
import ColorfulCard from "@/components/ui/colorful-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  CircleCheck,
  Rocket,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    title: "The Brand Builder",
    desc: "The perfect choice for businesses who want to grow their social media presence with organic content.",
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
    title: "The 7-Figure Roadmap",
    desc: "This plan is perfect for established businesses who want to grow from 6 to 7 figures in profit.",
    features: [
      "Content diversification to multiple platforms",
      "A/B testing",
      "Big Ads campaigns",
      "SEO & content optimization",
      "Data & analytics implementation",
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
  const [selected, setSelected] = useState<string>("web");

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
      <Text as="h6" className="text-sm font-semibold text-blue-700">
        Pricing
      </Text>
      <Text as="h2" className="text-3xl font-bold">
        For creators, brands and agencies.
      </Text>
      <Text className="text-primary/70 text-sm mt-5">
        We offer you different options to make your life easier.
      </Text>

      <div className="mt-10 flex justify-center items-center w-full lg:px-20">
        <Tabs
          defaultValue="package"
          className="w-full flex justify-center items-center"
        >
          {/* ---- TAB SWITCH ---- */}
          <TabsList>
            <TabsTrigger value="package">Package</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          {/* ---- PACKAGE TAB ---- */}
          <TabsContent value="package" className="w-full">
            {Packages.map((plan) => (
              <ColorfulCard
                key={plan.title}
                variant={plan.variant}
                className="p-10 rounded-md w-full my-2.5"
              >
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                  <div className="flex flex-col justify-between items-start gap-2">
                    <div
                      className={cn(
                        "p-2 rounded-sm",
                        iconColorVariants[plan.variant]
                      )}
                    >
                      {plan.icon}
                    </div>
                    <Text as="h4" className="text-lg font-semibold">
                      {plan.title}
                    </Text>
                    <Text className="text-sm text-primary/70 max-w-sm text-left">
                      {plan.subtitle}
                    </Text>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex justify-start items-center gap-2"
                        >
                          <CircleCheck size={10} />
                          <Text className="text-xs text-primary text-left">
                            {feature}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-10 min-w-xs flex flex-col justify-between items-center gap-5 max-md:w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm">
                    <p>{plan.subtitle}</p>
                    <div className="flex justify-center items-center gap-2">
                      <Text as="h2" className="text-4xl font-bold">
                        ${plan.price}
                      </Text>
                      <p className="text-xs font-normal">{plan.period}</p>
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
          <TabsContent value="services">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mt-16">
              {/* LEFT SIDE */}
              <div className="w-full lg:w-1/2">
                <Text as="h4" className="text-gray-500 text-left">
                  We're a team of builders, strategists, and innovators helping
                  businesses grow with AI, digital marketing, and technology.
                </Text>

                <Accordion
                  type="single"
                  collapsible
                  className="py-10 divide-y divide-gray-200"
                >
                  {[
                    {
                      key: "web",
                      label: "Web & App Development",
                      desc: "We build custom websites, apps, and digital platforms that reflect your brand and boost engagement.",
                    },
                    {
                      key: "marketing",
                      label: "Marketing & Growth Solutions",
                      desc: "From SEO to paid campaigns — we help you scale faster with data-driven strategies.",
                    },
                    {
                      key: "automation",
                      label: "Automation & AI Agents",
                      desc: "Automate repetitive workflows and integrate AI agents to improve efficiency and user experience.",
                    },
                    {
                      key: "mvp",
                      label: "MVP & Product Development",
                      desc: "We transform your idea into a working MVP with scalable tech and rapid prototyping.",
                    },
                    {
                      key: "sales",
                      label: "Sales & Outreach Services",
                      desc: "Enhance your lead generation and automate outreach with intelligent tools and CRM systems.",
                    },
                    {
                      key: "hire",
                      label: "Hire Team of Developers",
                      desc: "Build your dream team — hire skilled developers for full-time or project-based needs.",
                    },
                    {
                      key: "brand",
                      label: "Brand Identity & Design",
                      desc: "Create a powerful and consistent brand identity that stands out across all touchpoints.",
                    },
                    {
                      key: "consult",
                      label: "Consulting & Strategy",
                      desc: "Get expert consultation to align technology, marketing, and business growth strategies.",
                    },
                  ].map((item) => (
                    <AccordionItem
                      key={item.key}
                      value={item.key}
                      className="border-none py-2"
                    >
                      <AccordionTrigger
                        onClick={() => setSelected(item.key)}
                        className="flex justify-between items-center py-4 text-lg font-medium text-left hover:text-black focus:text-black hover:underline focus:underline decoration-black transition-all"
                      >
                        {item.label}{" "}
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-200 group-data-[state=open]:rotate-90"
                        />
                      </AccordionTrigger>
                      <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out text-gray-600 text-sm py-2">
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* RIGHT SIDE CARD */}
              <div className="w-full lg:w-1/2 bg-blue-50 rounded-2xl p-10 shadow-sm transition-all duration-300 mt-10 lg:mt-0">
                <Text as="h3" className="text-2xl font-semibold mb-2 capitalize">
                  {selected === "marketing"
                    ? "Marketing & Growth Solutions"
                    : selected === "automation"
                    ? "Automation & AI Agents"
                    : selected === "mvp"
                    ? "MVP & Product Development"
                    : selected === "sales"
                    ? "Sales & Outreach Services"
                    : selected === "hire"
                    ? "Hire Team of Developers"
                    : selected === "brand"
                    ? "Brand Identity & Design"
                    : selected === "consult"
                    ? "Consulting & Strategy"
                    : "Web & App Development"}
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
                  <li>
                    Custom websites & landing pages aligned with your brand.
                  </li>
                  <li>
                    Dashboards & analytics for real-time business insights.
                  </li>
                  <li>CRM systems designed to fit your workflow.</li>
                  <li>
                    E-commerce solutions that scale with your growth.
                  </li>
                  <li>
                    Support & maintenance to keep things running smoothly.
                  </li>
                </ul>

                <button className="bg-black text-white text-sm px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
                  <span>Build My Website</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
