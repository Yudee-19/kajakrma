//app/services/[slug]/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
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
    ChevronLeft,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServiceFeature {
    title: string;
    description: string;
    bgColor: string;
    textColor: string;
}

interface ProcessStep {
    step: number;
    title: string;
    description: string;
    bgColor: string;
}

interface DetailSection {
    title: string;
    description: string;
}

interface ServiceDetailData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    iconBgColor: string;
    features: ServiceFeature[];
    aboutSections: DetailSection[];
    whyChoose: {
        title: string;
        description: string;
        benefits: string[];
    };
    process: ProcessStep[];
}

const serviceDetailsData: Record<string, ServiceDetailData> = {
    "web-app-development": {
        slug: "web-app-development",
        title: "Web Development & Platforms",
        subtitle: "Build powerful, scalable digital solutions",
        description:
            "Your website is more than just an online presence, i&apos;s the foundation of your digital growth. We design and develop platforms that are not only visually engaging but also built with performance, security, and scalability in mind. From dynamic websites to powerful dashboards, CRMs, and full-scale e-commerce systems, we deliver end-to-end solutions that empower your business to attract, convert, and retain customers while staying ahead in a competitive market.",
        icon: <Globe size={24} />,
        variant: "orange",
        iconBgColor: "bg-orange-200",
        features: [
            {
                title: "Custom Websites - Responsive, high-performance designs",
                description:
                    "We design websites tailored to your goals — fully responsive, visually precise, and optimized for speed. User experience is our top priority — we use best practices to ensure site loads fast and reflects your brand while performing at top standards.",
                bgColor: "bg-orange-50",
                textColor: "text-orange-900",
            },
            {
                title: "Dashboards & CRMs - Smarter data, better control",
                description:
                    "We build smart dashboards and CRM systems that centralize your data, track performance, and simplify customer management — giving you control and insights to grow faster.",
                bgColor: "bg-purple-50",
                textColor: "text-purple-900",
            },
            {
                title: "E-commerce & Membership - Secure, scalable, and user-friendly",
                description:
                    "Our e-commerce platforms and membership portals come with secure payments, intuitive catalogs, and smooth user flows. Scalable and robust, they grow with your business while driving conversions.",
                bgColor: "bg-blue-50",
                textColor: "text-blue-900",
            },
            {
                title: "Optimized for Speed & SEO - Faster, higher, better",
                description:
                    "Every platform we build is lightning-fast and SEO-driven. With clean code, mobile-first design, and structured data that makes Google&apos;s algorithms love it — while users enjoy engaging.",
                bgColor: "bg-sky-50",
                textColor: "text-sky-900",
            },
        ],
        aboutSections: [
            {
                title: "Custom Development",
                description:
                    "Websites, dashboards, and internal tools designed from scratch.",
            },
            {
                title: "E-commerce Solutions",
                description: "Shopify, WooCommerce, or custom builds.",
            },
            {
                title: "Integrations",
                description: "APIs, payment gateways, CRM connections.",
            },
            {
                title: "Scalable Infrastructure",
                description: "Platforms that grow with your business.",
            },
        ],
        whyChoose: {
            title: "Why Choose Our Web Development?",
            description:
                "We don&apos;t just build websites — we create complete digital ecosystems that act as the foundation of your growth.",
            benefits: [
                "A website or platform today is more than just an online presence. It&apos;s your sales engine, your customer support hub, your brand experience, your operations backbone — it&apos;s where your customers see how serious you are about your business.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Discovery",
                description: "Define goals & audience.",
                bgColor: "bg-pink-50",
            },
            {
                step: 2,
                title: "Build",
                description: "Design, develop & refine.",
                bgColor: "bg-blue-50",
            },
            {
                step: 3,
                title: "Launch",
                description: "Test, secure & go live.",
                bgColor: "bg-green-50",
            },
        ],
    },
    "marketing-growth": {
        slug: "marketing-growth",
        title: "Marketing & Growth Solutions",
        subtitle: "Scale your brand with data-driven strategies",
        description:
            "In today&apos;s digital landscape, visibility is everything. We create comprehensive marketing strategies that drive real results — from social media management to SEO optimization, email campaigns, and content creation. Our data-driven approach ensures every dollar spent delivers measurable ROI while building lasting brand equity.",
        icon: <TrendingUp size={24} />,
        variant: "fuchsia",
        iconBgColor: "bg-fuchsia-200",
        features: [
            {
                title: "Social Media Marketing - Build engaged communities",
                description:
                    "Strategic content creation, community management, and paid campaigns across all major platforms. We craft stories that resonate and convert followers into customers.",
                bgColor: "bg-fuchsia-50",
                textColor: "text-fuchsia-900",
            },
            {
                title: "SEO & Content Strategy - Dominate search rankings",
                description:
                    "Comprehensive SEO audits, keyword research, on-page optimization, and content strategies that put you at the top of search results and keep you there.",
                bgColor: "bg-purple-50",
                textColor: "text-purple-900",
            },
            {
                title: "Email Campaigns - Convert and retain customers",
                description:
                    "Automated email sequences, newsletters, and personalized campaigns that nurture leads and drive repeat business with proven conversion tactics.",
                bgColor: "bg-pink-50",
                textColor: "text-pink-900",
            },
            {
                title: "Brand Strategy - Stand out and stay memorable",
                description:
                    "Complete brand positioning, messaging frameworks, and visual identity systems that make your business instantly recognizable and trusted.",
                bgColor: "bg-rose-50",
                textColor: "text-rose-900",
            },
        ],
        aboutSections: [
            {
                title: "Multi-Channel Campaigns",
                description:
                    "Integrated strategies across social, search, email, and content.",
            },
            {
                title: "Performance Analytics",
                description: "Real-time tracking and optimization of all campaigns.",
            },
            {
                title: "Content Creation",
                description: "Blogs, videos, graphics, and copy that converts.",
            },
            {
                title: "Growth Hacking",
                description: "Innovative tactics to accelerate your market penetration.",
            },
        ],
        whyChoose: {
            title: "Why Choose Our Marketing Services?",
            description:
                "We don&apos;t chase vanity metrics — we focus on growth that matters to your bottom line.",
            benefits: [
                "Marketing today requires a perfect blend of creativity and data science. We combine compelling storytelling with advanced analytics to ensure every campaign delivers measurable results and sustainable growth.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Research",
                description: "Analyze market & competitors.",
                bgColor: "bg-pink-50",
            },
            {
                step: 2,
                title: "Strategy",
                description: "Build custom growth plan.",
                bgColor: "bg-purple-50",
            },
            {
                step: 3,
                title: "Execute",
                description: "Launch & optimize campaigns.",
                bgColor: "bg-fuchsia-50",
            },
        ],
    },
    "automation-ai": {
        slug: "automation-ai",
        title: "Automation & AI Agents",
        subtitle: "Work smarter with intelligent automation",
        description:
            "Transform your business operations with cutting-edge AI and automation. We build intelligent systems that handle repetitive tasks, predict customer behavior, automate workflows, and make data-driven decisions — freeing your team to focus on what truly matters: strategy and growth.",
        icon: <Cpu size={24} />,
        variant: "sky",
        iconBgColor: "bg-sky-200",
        features: [
            {
                title: "Workflow Automation - Eliminate manual tasks",
                description:
                    "Automate repetitive processes across your entire business — from data entry to customer onboarding, invoicing to inventory management. Save hundreds of hours monthly.",
                bgColor: "bg-sky-50",
                textColor: "text-sky-900",
            },
            {
                title: "AI Assistants - 24/7 intelligent support",
                description:
                    "Custom AI chatbots and voice agents that handle customer inquiries, qualify leads, book appointments, and provide support around the clock with human-like conversation.",
                bgColor: "bg-cyan-50",
                textColor: "text-cyan-900",
            },
            {
                title: "Predictive Analytics - Make smarter decisions",
                description:
                    "AI-powered forecasting and insights that predict customer behavior, market trends, and business outcomes — helping you stay ahead of the competition.",
                bgColor: "bg-indigo-50",
                textColor: "text-indigo-900",
            },
            {
                title: "Smart Integrations - Connect everything seamlessly",
                description:
                    "Integrate your tools and platforms with intelligent automation that syncs data, triggers actions, and creates unified workflows across your entire tech stack.",
                bgColor: "bg-blue-50",
                textColor: "text-blue-900",
            },
        ],
        aboutSections: [
            {
                title: "Process Automation",
                description:
                    "Streamline operations with custom workflow automation.",
            },
            {
                title: "AI Chatbots",
                description: "Intelligent conversational agents for sales and support.",
            },
            {
                title: "Data Intelligence",
                description: "Machine learning models for predictive insights.",
            },
            {
                title: "Integration Platform",
                description: "Connect all your tools with smart automation.",
            },
        ],
        whyChoose: {
            title: "Why Choose Our AI & Automation?",
            description:
                "We build automation that works like a skilled team member — reliable, intelligent, and always improving.",
            benefits: [
                "Automation isn&apos;t just about saving time — it&apos;s about scaling your business without scaling your team. Our AI solutions handle the repetitive work while maintaining quality and learning from every interaction.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Audit",
                description: "Identify automation opportunities.",
                bgColor: "bg-sky-50",
            },
            {
                step: 2,
                title: "Design",
                description: "Build intelligent workflows.",
                bgColor: "bg-cyan-50",
            },
            {
                step: 3,
                title: "Deploy",
                description: "Launch & train AI systems.",
                bgColor: "bg-indigo-50",
            },
        ],
    },
    "mvp-product": {
        slug: "mvp-product",
        title: "MVP & Product Development",
        subtitle: "Launch fast, validate faster",
        description:
            "Got an idea? Let&apos;s build it. We specialize in rapid MVP development that gets your product to market quickly without compromising quality. Using no-code, low-code, and custom development approaches, we help you validate concepts, gather user feedback, and iterate toward product-market fit.",
        icon: <Lightbulb size={24} />,
        variant: "lime",
        iconBgColor: "bg-lime-200",
        features: [
            {
                title: "No-code/Low-code MVPs - Launch in weeks, not months",
                description:
                    "Rapid prototyping using powerful platforms like Bubble, Webflow, and Airtable. Get a functional product to market quickly while keeping costs low.",
                bgColor: "bg-lime-50",
                textColor: "text-lime-900",
            },
            {
                title: "Feature Testing - Validate before you scale",
                description:
                    "Build, measure, learn. We implement analytics and testing frameworks that help you understand what users want before investing in full development.",
                bgColor: "bg-green-50",
                textColor: "text-green-900",
            },
            {
                title: "Scalable Builds - Start small, grow big",
                description:
                    "Our MVPs are built with growth in mind. Clean architecture and modular design ensure your product can scale as your user base grows.",
                bgColor: "bg-emerald-50",
                textColor: "text-emerald-900",
            },
            {
                title: "Product Strategy - From idea to market fit",
                description:
                    "Strategic guidance on feature prioritization, user research, competitive analysis, and go-to-market planning to maximize your chances of success.",
                bgColor: "bg-teal-50",
                textColor: "text-teal-900",
            },
        ],
        aboutSections: [
            {
                title: "Rapid Prototyping",
                description: "Working MVPs delivered in 4-8 weeks.",
            },
            {
                title: "User Testing",
                description: "Integrated feedback loops and analytics.",
            },
            {
                title: "Iterative Development",
                description: "Quick pivots based on real user data.",
            },
            {
                title: "Technical Roadmap",
                description: "Plan for scaling from MVP to full product.",
            },
        ],
        whyChoose: {
            title: "Why Choose Our MVP Development?",
            description:
                "We help you avoid the biggest mistake startups make — building too much before validating.",
            benefits: [
                "The best MVPs aren&apos;t perfect — they&apos;re strategic. We help you identify the core features that will validate your hypothesis and attract early adopters, then iterate based on real feedback rather than assumptions.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Ideate",
                description: "Define core features & value prop.",
                bgColor: "bg-lime-50",
            },
            {
                step: 2,
                title: "Build",
                description: "Develop MVP rapidly.",
                bgColor: "bg-green-50",
            },
            {
                step: 3,
                title: "Test",
                description: "Launch, measure & iterate.",
                bgColor: "bg-emerald-50",
            },
        ],
    },
    "sales-outreach": {
        slug: "sales-outreach",
        title: "Sales & Outreach Services",
        subtitle: "Fill your pipeline with qualified leads",
        description:
            "Stop chasing cold leads. We build systematic outreach campaigns that fill your pipeline with qualified prospects. From cold email sequences to LinkedIn outreach, appointment setting to lead nurturing — we handle the grunt work of sales so you can focus on closing deals.",
        icon: <BarChart3 size={24} />,
        variant: "indigo",
        iconBgColor: "bg-indigo-200",
        features: [
            {
                title: "Cold Email Campaigns - Reach decision makers directly",
                description:
                    "Personalized email sequences that get opened, read, and replied to. We handle list building, copywriting, and follow-up automation for maximum response rates.",
                bgColor: "bg-indigo-50",
                textColor: "text-indigo-900",
            },
            {
                title: "LinkedIn Outreach - Network with purpose",
                description:
                    "Strategic LinkedIn campaigns that build relationships and generate B2B leads. Connection requests, messaging sequences, and profile optimization.",
                bgColor: "bg-blue-50",
                textColor: "text-blue-900",
            },
            {
                title: "Appointment Setting - Fill your calendar",
                description:
                    "Professional SDR services that qualify prospects and book meetings with decision makers. We handle objections and ensure high show-up rates.",
                bgColor: "bg-violet-50",
                textColor: "text-violet-900",
            },
            {
                title: "Lead Nurturing - Convert prospects over time",
                description:
                    "Multi-touch campaigns that stay top-of-mind without being pushy. Education-based content that builds trust and moves leads through your funnel.",
                bgColor: "bg-purple-50",
                textColor: "text-purple-900",
            },
        ],
        aboutSections: [
            {
                title: "Outbound Campaigns",
                description: "Systematic cold outreach across multiple channels.",
            },
            {
                title: "Lead Qualification",
                description: "Filter and score prospects before handoff.",
            },
            {
                title: "CRM Management",
                description: "Keep your pipeline organized and up-to-date.",
            },
            {
                title: "Performance Reporting",
                description: "Transparent metrics on every campaign.",
            },
        ],
        whyChoose: {
            title: "Why Choose Our Sales Services?",
            description:
                "We treat your pipeline like it&apos;s our own — because your success is our success.",
            benefits: [
                "Modern sales is about building relationships, not just sending spam. Our outreach campaigns are personalized, value-driven, and designed to start conversations with the right people at the right time.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Targeting",
                description: "Build ideal customer profiles.",
                bgColor: "bg-indigo-50",
            },
            {
                step: 2,
                title: "Outreach",
                description: "Launch multi-channel campaigns.",
                bgColor: "bg-violet-50",
            },
            {
                step: 3,
                title: "Convert",
                description: "Qualify & book appointments.",
                bgColor: "bg-purple-50",
            },
        ],
    },
    "team-hire": {
        slug: "team-hire",
        title: "Hire Team of Developers",
        subtitle: "Scale your tech team on demand",
        description:
            "Need to scale fast without the overhead? We provide dedicated development teams that integrate seamlessly with your operations. From frontend specialists to full-stack engineers, DevOps experts to QA professionals — get the talent you need, when you need it.",
        icon: <Users size={24} />,
        variant: "sky",
        iconBgColor: "bg-sky-200",
        features: [
            {
                title: "Dedicated Developers - Your extended team",
                description:
                    "Handpicked developers who work exclusively on your projects. Full-time commitment, your timezone, your workflow — like having an in-house team without the overhead.",
                bgColor: "bg-sky-50",
                textColor: "text-sky-900",
            },
            {
                title: "Specialized Skills - Find exact expertise needed",
                description:
                    "React, Node.js, Python, DevOps, mobile development — whatever stack you need. We match you with developers who have proven experience in your specific technologies.",
                bgColor: "bg-cyan-50",
                textColor: "text-cyan-900",
            },
            {
                title: "Flexible Engagement - Scale up or down easily",
                description:
                    "Start with one developer or build an entire team. Adjust capacity based on project demands without long-term commitments or hiring friction.",
                bgColor: "bg-blue-50",
                textColor: "text-blue-900",
            },
            {
                title: "Quality Assurance - Vetted professionals only",
                description:
                    "Every developer goes through rigorous technical assessments and soft skills evaluation. We ensure quality, reliability, and excellent communication.",
                bgColor: "bg-indigo-50",
                textColor: "text-indigo-900",
            },
        ],
        aboutSections: [
            {
                title: "Full-Stack Developers",
                description: "End-to-end development capabilities.",
            },
            {
                title: "Specialized Experts",
                description: "Frontend, backend, mobile, DevOps specialists.",
            },
            {
                title: "Team Integration",
                description: "Seamless onboarding into your workflow.",
            },
            {
                title: "Project Management",
                description: "Optional PM support to coordinate delivery.",
            },
        ],
        whyChoose: {
            title: "Why Hire Through Us?",
            description:
                "Get enterprise-level talent without enterprise-level costs and complexity.",
            benefits: [
                "Building an in-house team is expensive and time-consuming. Our developers are pre-vetted, immediately available, and cost 40-60% less than local hires while maintaining the same quality and commitment level.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Requirements",
                description: "Define skills & team size needed.",
                bgColor: "bg-sky-50",
            },
            {
                step: 2,
                title: "Matching",
                description: "Meet & interview candidates.",
                bgColor: "bg-cyan-50",
            },
            {
                step: 3,
                title: "Onboard",
                description: "Start working together.",
                bgColor: "bg-blue-50",
            },
        ],
    },
    "brand-design": {
        slug: "brand-design",
        title: "Brand Identity & Design",
        subtitle: "Create a brand that resonates and converts",
        description:
            "Your brand is more than a logo — it&apos;s the emotional connection you build with customers. We create comprehensive brand identities that tell your story, differentiate you from competitors, and create lasting impressions across every touchpoint.",
        icon: <Palette size={24} />,
        variant: "orange",
        iconBgColor: "bg-orange-200",
        features: [
            {
                title: "Visual Identity - Stand out and stay memorable",
                description:
                    "Complete brand systems including logos, color palettes, typography, and design guidelines. We create cohesive visual languages that work across all media.",
                bgColor: "bg-orange-50",
                textColor: "text-orange-900",
            },
            {
                title: "UI/UX Design - Beautiful and functional",
                description:
                    "User-centered design that combines aesthetics with usability. Wireframes, prototypes, and polished interfaces that users love to interact with.",
                bgColor: "bg-amber-50",
                textColor: "text-amber-900",
            },
            {
                title: "Brand Positioning - Define your unique value",
                description:
                    "Strategic frameworks that clarify who you are, what you stand for, and why customers should choose you. Messaging that resonates with your ideal audience.",
                bgColor: "bg-yellow-50",
                textColor: "text-yellow-900",
            },
            {
                title: "Consistent Digital Presence - One voice, everywhere",
                description:
                    "Brand guidelines and templates that ensure consistency across your website, social media, marketing materials, and customer touchpoints.",
                bgColor: "bg-red-50",
                textColor: "text-red-900",
            },
        ],
        aboutSections: [
            {
                title: "Logo & Identity",
                description: "Complete visual brand systems from scratch.",
            },
            {
                title: "Design Systems",
                description: "Scalable component libraries and style guides.",
            },
            {
                title: "Brand Strategy",
                description: "Positioning, messaging, and voice development.",
            },
            {
                title: "Marketing Collateral",
                description: "Business cards, presentations, social templates.",
            },
        ],
        whyChoose: {
            title: "Why Choose Our Design Services?",
            description:
                "We don&apos;t just make things look pretty — we create strategic brand assets that drive business results.",
            benefits: [
                "Great design isn&apos;t just about aesthetics. It&apos;s about creating a cohesive brand experience that builds trust, communicates value, and makes it easy for customers to choose you over competitors.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Discovery",
                description: "Understand values & audience.",
                bgColor: "bg-orange-50",
            },
            {
                step: 2,
                title: "Create",
                description: "Design identity & guidelines.",
                bgColor: "bg-amber-50",
            },
            {
                step: 3,
                title: "Implement",
                description: "Roll out across all channels.",
                bgColor: "bg-red-50",
            },
        ],
    },
    "consulting-strategy": {
        slug: "consulting-strategy",
        title: "Consulting & Strategy",
        subtitle: "Expert guidance to accelerate growth",
        description:
            "Sometimes you don&apos;t need execution — you need direction. Our strategic consulting helps you make better decisions faster. From business model validation to digital transformation roadmaps, we provide the expertise and outside perspective needed to scale intelligently.",
        icon: <Target size={24} />,
        variant: "fuchsia",
        iconBgColor: "bg-fuchsia-200",
        features: [
            {
                title: "Business Strategy - Chart your path to scale",
                description:
                    "Market analysis, competitive positioning, revenue model optimization, and growth planning. We help you make strategic decisions backed by data and experience.",
                bgColor: "bg-fuchsia-50",
                textColor: "text-fuchsia-900",
            },
            {
                title: "Product Strategy - Build what users actually want",
                description:
                    "Feature prioritization, roadmap planning, user research, and product-market fit validation. Avoid building the wrong thing by getting strategic guidance first.",
                bgColor: "bg-pink-50",
                textColor: "text-pink-900",
            },
            {
                title: "Digital Transformation - Modernize your operations",
                description:
                    "Technology audits, process optimization, tool selection, and change management. We help traditional businesses embrace digital tools and workflows.",
                bgColor: "bg-rose-50",
                textColor: "text-rose-900",
            },
            {
                title: "Tailored to accelerate scaling - Custom solutions",
                description:
                    "No cookie-cutter advice. We dive deep into your specific situation and provide actionable recommendations tailored to your goals, resources, and market.",
                bgColor: "bg-purple-50",
                textColor: "text-purple-900",
            },
        ],
        aboutSections: [
            {
                title: "Strategic Planning",
                description: "Long-term vision and quarterly execution plans.",
            },
            {
                title: "Technology Advisory",
                description: "Stack selection, architecture decisions, vendor evaluation.",
            },
            {
                title: "Process Optimization",
                description: "Streamline operations for efficiency and scale.",
            },
            {
                title: "Fractional Leadership",
                description: "Part-time CTO, CPO, or CMO expertise on demand.",
            },
        ],
        whyChoose: {
            title: "Why Choose Our Consulting?",
            description:
                "We&apos;ve been in the trenches building and scaling businesses — we know what works and what doesn&apos;t.",
            benefits: [
                "Strategy isn&apos;t about planning — it&apos;s about making better decisions faster. We bring years of experience across industries and business models to help you avoid costly mistakes and accelerate toward your goals.",
            ],
        },
        process: [
            {
                step: 1,
                title: "Assess",
                description: "Audit current state & goals.",
                bgColor: "bg-fuchsia-50",
            },
            {
                step: 2,
                title: "Strategize",
                description: "Develop actionable roadmap.",
                bgColor: "bg-pink-50",
            },
            {
                step: 3,
                title: "Guide",
                description: "Support execution & pivots.",
                bgColor: "bg-purple-50",
            },
        ],
    },
};

interface PageProps {
    params: {
        slug: string;
    };
}

export default function ServiceDetailPage({ params }: PageProps) {
    const { slug } = params;
    const service = serviceDetailsData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="w-full">
            <Container className="py-20">
                <AnimatedContainer direction="up" delay={0.1}>
                    <Link
                        href="/services"
                        className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 mb-8"
                    >
                        <ChevronLeft size={16} />
                        See All Services
                    </Link>

                    <div className="flex flex-col gap-6">
                        <div>
                            <Text as="h1" className="text-4xl md:text-5xl font-bold">
                                {service.title}
                            </Text>
                            <Text className="text-lg text-primary/70 mt-4 max-w-3xl">
                                {service.description}
                            </Text>
                            <Button className="mt-6 h-12 px-8">
                                <Link href="/" className="flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight size={16} />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            {service.features.map((feature, index) => (
                                <AnimatedContainer
                                    key={feature.title}
                                    direction={index % 2 === 0 ? "left" : "right"}
                                    delay={0.1 + index * 0.1}
                                >
                                    <div
                                        className={`${feature.bgColor} ${feature.textColor} p-6 rounded-lg h-full`}
                                    >
                                        <Text as="h3" className="text-lg font-semibold mb-3">
                                            {feature.title}
                                        </Text>
                                        <Text className="text-sm opacity-70">
                                            {feature.description}
                                        </Text>
                                    </div>
                                </AnimatedContainer>
                            ))}
                        </div>
                    </div>
                </AnimatedContainer>

                <section className="mt-20">
                    <AnimatedContainer direction="up" delay={0.2}>
                        <Text as="h2" className="text-3xl font-bold mb-10">
                            About This Service
                        </Text>

                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="lg:w-1/2 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.aboutSections.map((section) => (
                                        <div
                                            key={section.title}
                                            className="bg-white p-6 rounded-lg border border-gray-200"
                                        >
                                            <Text as="h4" className="font-semibold mb-2">
                                                {section.title}
                                            </Text>
                                            <Text className="text-sm text-primary/70">
                                                {section.description}
                                            </Text>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/2 space-y-6">
                                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200">
                                    <Text as="h3" className="text-xl font-semibold mb-3">
                                        {service.whyChoose.title}
                                    </Text>
                                    <Text className="text-sm text-primary/70 mb-4">
                                        {service.whyChoose.description}
                                    </Text>
                                    {service.whyChoose.benefits.map((benefit, index) => (
                                        <Text
                                            key={index}
                                            className="text-sm text-primary/80 mt-4"
                                        >
                                            {benefit}
                                        </Text>
                                    ))}
                                </div>

                                <div className="bg-white p-8 rounded-lg border border-gray-200">
                                    <Text as="h4" className="font-semibold mb-6">
                                        Our Process (3 Steps):
                                    </Text>
                                    <div className="space-y-4">
                                        {service.process.map((step) => (
                                            <div
                                                key={step.step}
                                                className={`${step.bgColor} p-4 rounded-lg`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <Text className="font-bold text-lg">
                                                        {step.step}.
                                                    </Text>
                                                    <div>
                                                        <Text className="font-semibold">
                                                            {step.title}
                                                        </Text>
                                                        <Text className="text-sm text-primary/70 mt-1">
                                                            {step.description}
                                                        </Text>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContainer>
                </section>

                <section className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-lg text-center">
                    <AnimatedContainer direction="up" delay={0.3}>
                        <Text as="h2" className="text-3xl font-bold mb-4">
                            Ready to get started?
                        </Text>
                        <Text className="text-primary/70 mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and create a custom solution that
                            drives real results for your business.
                        </Text>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button className="h-12 px-8">
                                <Link href="/" className="flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight size={16} />
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-12 px-8">
                                <Link href="/">Schedule a Call</Link>
                            </Button>
                        </div>
                    </AnimatedContainer>
                </section>
            </Container>
        </div>
    );
}
export function generateStaticParams() {
    return Object.keys(serviceDetailsData).map((slug) => ({
        slug: slug,
    }));
}