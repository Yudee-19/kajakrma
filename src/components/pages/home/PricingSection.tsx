"use client";

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
  Bot,
  Palette,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

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

const Services = [
  {
    key: "web",
    title: "Web & App Development",
    desc: "Build modern, responsive, and high-performing websites and apps tailored to your business goals.",
    icon: <Globe size={20} />,
    price: "3,499",
    plan: [{ basic: "3500" }, { premium: "5000" }, { advance: "10000" }],
    features: [
      "Responsive website development",
      "Mobile app design & deployment",
      "E-commerce integrations",
      "Dashboard & analytics setup",
      "Custom CRM solutions",
    ],
  },
  {
    key: "marketing",
    title: "Marketing & Growth",
    desc: "Accelerate your reach with SEO, paid ads, and organic growth strategies powered by analytics.",
    icon: <TrendingUp size={20} />,
    price: "2,499",
    plan: [{ basic: "3500" }, { premium: "5000" }, { advance: "10000" }],
    features: [
      "SEO & keyword research",
      "Performance marketing (Meta, Google)",
      "Email automation setup",
      "Influencer & social campaigns",
      "Content strategy & analytics",
    ],
  },
  {
    key: "ai",
    title: "Automation & AI Agents",
    desc: "Streamline your workflow using AI tools and automation systems for smarter operations.",
    icon: <Bot size={20} />,
    price: "3,999",
    features: [
      "AI chatbot integration",
      "Workflow automation pipelines",
      "Predictive data modeling",
      "Custom AI agents for operations",
      "Performance tracking dashboards",
    ],
  },
  {
    key: "mvp",
    title: "MVP & Product Development",
    desc: "Turn your innovative idea into a real, functional MVP ready to scale — from strategy to launch.",
    icon: <Rocket size={20} />,
    price: "1,999",
    features: [
      "Idea validation & planning",
      "UI/UX wireframes & prototypes",
      "Agile development process",
      "Product launch support",
      "Post-launch iterations",
    ],
  },
  {
    key: "sales",
    title: "Sales & Outreach Services",
    desc: "Boost your revenue with automated sales funnels, CRM systems, and personalized outreach campaigns.",
    icon: <TrendingUp size={20} />,
    price: "999",
    features: [
      "Cold email & LinkedIn outreach",
      "Funnel creation & optimization",
      "Lead scoring automation",
      "CRM integration",
      "Campaign performance tracking",
    ],
  },
  {
    key: "hire",
    title: "Hire Team of Developers",
    desc: "Hire dedicated, skilled developers to build and scale your digital products with flexibility.",
    icon: <Users size={20} />,
    price: "2,499",
    features: [
      "Frontend & backend specialists",
      "Full-time or part-time availability",
      "Agile collaboration workflow",
      "Direct reporting & updates",
      "Flexible engagement models",
    ],
  },
  {
    key: "branding",
    title: "Brand Identity & Design",
    desc: "Craft a timeless visual identity and design language that sets your brand apart.",
    icon: <Palette size={20} />,
    price: "1,999",
    plan: [{ basic: "3500" }, { premium: "5000" }, { advance: "10000" }],
    features: [
      "Logo & brand design system",
      "Typography & color palette creation",
      "UI/UX mockups",
      "Product & packaging design",
      "Brand guidelines & assets",
    ],
  },
];

const PricingSection = () => {
  const [selected, setSelected] = useState("web");
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const iconColorVariants = {
    sky: "bg-sky-300",
    fuchsia: "bg-fuchsia-300",
    lime: "bg-lime-300",
    orange: "bg-orange-300",
    rose: "bg-rose-300",
    indigo: "bg-indigo-300",
  };

  const activeService = Services.find((s) => s.key === selected)!;

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
          className="w-full flex flex-col justify-center items-center"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="package">Packages</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          {/* =============== PACKAGE SECTION =============== */}
          <TabsContent value="package" className="w-full">
            {Packages.map((plan, index) => (
              <ColorfulCard
                variant={plan.variant}
                className="p-10 rounded-md w-full my-2.5"
                key={plan.title}
              >
                <AnimatedContainer
                  direction={`${index % 2 === 0 ? "left" : "right"}`}
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
                        {plan.desc}
                      </Text>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 mt-2">
                        {plan.features.map((feature) => (
                          <div
                            className="flex justify-start items-center gap-2"
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

                    <div className="px-10 flex flex-col justify-between items-center gap-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm">
                      <p>{plan.subtitle}</p>
                      <div className="flex justify-center items-center gap-2">
                        <Text as="h2" className="text-2xl font-bold">
                          ${plan.price}
                        </Text>
                        <p className="text-xs font-normal">{plan.period}</p>
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
                </AnimatedContainer>
              </ColorfulCard>
            ))}
          </TabsContent>

          {/* =============== SERVICES SECTION =============== */}
          <TabsContent value="services" className="w-full mt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start  gap:10 lg:gap-30">
              {/* Left side - Accordion */}
              <div className="lg:w-1/2 w-full">
                <Text className="text-gray-500 mb-6 text-left">
                  We&apos;re a team of builders, strategists, and innovators
                  helping businesses grow with AI, design, and technology.
                </Text>

                <Accordion
                  type="single"
                  collapsible
                  defaultValue="web"
                  className="divide-y divide-gray-200"
                >
                  {Services.map((service) => (
                    <AccordionItem key={service.key} value={service.key}>
                      <AccordionTrigger
                        onClick={() => setSelected(service.key)}
                        className="py-4 text-left font-medium hover:underline decoration-black flex justify-between items-center"
                      >
                        {service.title}
                        <ArrowRight size={15} />
                      </AccordionTrigger>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right side - Service Card */}
              <div className="lg:w-1/2 w-full relative">
                <ColorfulCard
                  variant="indigo"
                  className="rounded-xl bg-[#ECFAFF] px-10 py-10 max-w-lg flex flex-col justify-between items-start gap-5"
                >
                  <div className="flex justify-between items-start w-full">
                    <Text className="text-2xl font-semibold text-left">
                      {activeService.title}
                    </Text>
                    <div className="bg-indigo-200 rounded-sm p-2">
                      {activeService.icon}
                    </div>
                  </div>

                  {["web", "marketing", "branding"].includes(
                    activeService.key
                  ) ? (
                    <>
                      <p className="text-md mb-0">Choose your plan</p>
                      <div className="flex items-center gap-3 -mt-2">
                        {["Basic", "Premium", "Advance"].map((item) => (
                          <button
                            key={item}
                            onClick={() => setSelectedPlan(item.toLowerCase())}
                            className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200
                              ${
                                selectedPlan === item.toLowerCase()
                                  ? "bg-[#D0F2FF] text-black border-[#D0F2FF]"
                                  : "border-gray-300 text-black hover:bg-gray-100"
                              }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>

                      <Text className="font-semibold text-4xl w-full rounded-tr-full rounded-br-full text-left bg-white -ml-10 pl-10 pr-4 py-3">
                        $
                        {activeService.plan?.find(
                          (p) => p[selectedPlan as keyof typeof p]
                        )?.[
                          selectedPlan as keyof (typeof activeService.plan)[number]
                        ] || activeService.price}
                      </Text>
                    </>
                  ) : (
                    <div>
                      <Button>{"Let's Talk"}</Button>
                    </div>
                  )}

                  <Text className="text-sm text-primary/70 mt-1 text-left">
                    {activeService.desc}
                  </Text>

                  <Text className="text-sm text-primary/70 mt-1 text-left">
                    Delivaravbles
                  </Text>

                  <div className="flex flex-col gap-2">
                    {activeService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CircleCheck size={12} />
                        <Text className="text-sm text-primary/80">
                          {feature}
                        </Text>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex justify-between items-center w-full">
                    {/* <Text className="text-3xl font-bold">
                      ${activeService.price}
                    </Text> */}
                    <Button className="rounded-full px-10 py-4 text-sm">
                      Build My Website{" "}
                      <ChevronRight className="bg-white text-black rounded-xs" />
                    </Button>
                  </div>
                </ColorfulCard>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
