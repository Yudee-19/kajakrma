// app/data/serviceDetailsData.tsx
import {
    Globe,
    TrendingUp,
    Cpu,
    Lightbulb,
    BarChart3,
    Users,
    Palette,
    Target,
} from "lucide-react";
import type { ServiceDetailData } from '../../types/services';

export const serviceDetailsData: Record<string, ServiceDetailData> = {
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
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Build",
                description: "Design, develop & refine.",
                variant: "sky",
            },
            {
                step: 3,
                title: "Launch",
                description: "Test, secure & go live.",
                variant: "lime",
            },
        ],
    },
    "marketing-growth": {
        slug: "marketing-growth",
        title: "Marketing & Growth Solutions",
        subtitle: "Scale your brand with data-driven strategies",
        description:
           "Your brand's digital presenece is more than just visibility -- it's the engine that drives growth,engagement, and customer loyality.We design implement data-driven marketing strategies across multiple channels to help your business attract, convert, and retain customers while building a strong, memorable brand",
        icon: <TrendingUp size={24} />,
        variant: "fuchsia",
        iconBgColor: "bg-fuchsia-200",
        features: [
            {
                title: "Social Media  - Grow,engage,and connect",
                description:
                   "we craft creative social media stretegies to build your audience, boost engagement, and foster lasting community connections. Every post, campaign,and interaction is designed to amplify your brand voice and generate measurable results.",
                bgColor: "bg-fuchsia-50",
                textColor: "text-fuchsia-900",
            },
            {
                title: "SEO  - Rank higher,get discovered",
                description:
                   "Our SEO stratiegies ensure your website ranks higher in search results, drives organic traffic, and captures relevant leads. From on page optimization to keyword reserch and content strategy, we help your business stay visinle and competitive online",
                bgColor: "bg-purple-50",
                textColor: "text-purple-900",
            },
            {
                title: "Email Campaigns - Nature and convert",
                description:
                 "We create personlized, targeted email campaigns that engage your audience, nurture leads, and drive converions. Automated workflows and data-driven messaging ensure your emails deliver the right message to the right person at the right time.",
                bgColor: "bg-pink-50",
                textColor: "text-pink-900",
            },
            {
                title: "Brand Strategy - Consistant, memorable, and impactful",
                description:
                  "We help you define and execute a cohensive brand strategy that resonates across all digital touchpoints, From visual identity to messaging and positioning, we ensure your brand stands out and builds trust with your audience.",
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
            title: "Why Choose Our Marketing & Growth Solutions?",
            description:
                "We don't just run campigns -- we create measurable growth systems. Your marketing should attract the right audience, engage them with meaningful content, and convert them into loyal customers. Every strategy we implement is data-driven is data-driven,scalable and results-focused .",
            benefits: [
                
            ],
        },
        process: [
            {
                step: 1,
                title: "Plan",
                description: "Understand your business, audience and growth objectives.",
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Execute",
                description: "Run nulti-channel campaigns with precision and creativity.",
                variant: "sky",
            },
            {
                step: 3,
                title: "Analyze & Optimize",
                description: "Measure results, refine strategies, and maximize ROI.",
                variant: "lime",
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
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Design",
                description: "Build intelligent workflows.",
                variant: "sky",
            },
            {
                step: 3,
                title: "Deploy",
                description: "Launch & train AI systems.",
               variant: "lime",
            },
        ],
    },
    "mvp-product": {
        slug: "mvp-product",
        title: "MVP & Product Development",
        subtitle: "Launch fast, validate faster",
        description:
         "Bringing your product idea to life requires speed, precision, and strategy. At Kajkarma we help startups and businesses validate,build, and scale products efficiently using no-code/low-code solutions, features testing, and scalable architectures. From concept to launch, we deliver end to end product development that empowers your business to test ideas faster, reduce risk,and grow with confidence.",
        icon: <Lightbulb size={24} />,
        variant: "lime",
        iconBgColor: "bg-lime-200",
        features: [
            {
                title: "No-code/Low-code MVPs - Build Fast, iterate faster",
                description:
                    "We create no-code and low-code MVPs that allow you to validate your ideas quickly without heavy investment. Rapid prototyping lets you test assumptions, gather feedback, and refine your product efficiently, all under the guidence of Kajkarma's expert team .",
                bgColor: "bg-lime-50",
                textColor: "text-lime-900",
            },
            {
                title: "Feature Testing - Validate before scaling",
                description:
                    "Our process includes systematic feature testing to ensure your product meets user needs, works flawlessly, and is ready for market adoption. This reduces risk and helps you make data-driven decisions",
                bgColor: "bg-green-50",
                textColor: "text-green-900",
            },
            {
                title: "Scalable Builds - Grow without limits",
                description:
                   "We design products with scalability in mind, ensuring your MVP can evolve into a fully-featured, robust platform as your user base and business needs grow",
                bgColor: "bg-emerald-50",
                textColor: "text-emerald-900",
            },
            {
                title: "Product Strategy - From idea to execution ",
                description:
                    "We help define product roadmaps, user journeys, and go-to-market strategies, aligning your development with business goals and market demand for maximum impact.",
                bgColor: "bg-teal-50",
                textColor: "text-teal-900",
            },
        ],
        aboutSections: [
            {
                title: "Rapid MVP Developement",
                description: "We use no-code/low-code platforms to build functional MVPs quickly,allowing early testing and validation",
            },
            {
                title: "Feature Validation & Testing",
                description: "Through continueous testing, we ensure product reliability, and market readliness.",
            },
            {
                title: "Scalable Product Architecture",
                description: "Our solutions are built to scale seamlessly as your product and audience grow .",
            },
            {
                title: "Stretegic Product Planing",
                description:"We provide expert guidence on product roadmaps,feature prioritization, and market strategy to set your product up for long-term success."
            },
        ],
        whyChoose: {
            title: "Why Choose Our MVP & Product Development?",
            description:
                "We don't just build products -- at kajkarma, we turn ideas into scalable, market-ready solutions. Every product we develop is designed to validate quickly, perform flawlessly, and grow sustainably,ensuring you achieve faster time-to-market and higher ROI",
            benefits: [
               
            ],
        },
        process: [
            {
                step: 1,
                title: "Discover-",
                description: "Understand your idea, target users, and business objectives.",
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Build-",
                description: "Develop MVPs, test features, and iterate quickly based ion feedback . ",
                variant: "sky",
            },
            {
                step: 3,
                title: "Launch-",
                description: "Deploy scalable products ready for real-world use, with a roadmap for future growth .",
                variant: "lime",
            },
        ],
    },
    "sales-outreach": {
        slug: "sales-outreach",
        title: "Sales & Outreach Services",
        subtitle: "Fill your pipeline with qualified leads",
        description:
        "Your brand's outreach is more than just messaging -- it's the bridge between your business and your audience. At kajkarma, we design and implement strategic sales and outreach solutions that create aconsistent digital presence,strengthen your brand, and drive measureable results. From visual identity and UI/UX design to brand positioning, we deliver end-to-end services that empower your business to attract, engage,and convert customers effectively .",
        icon: <BarChart3 size={24} />,
        variant: "indigo",
        iconBgColor: "bg-indigo-200",
        features: [
            {
                title: "Visual Identity - Memorable & cohensive",
                description:
                    "We craft a strong visual identity that communicates your brand's values, resonates with your audience, and builds trust across all channels. Every design element is thoughtfully created to ensure consistency and recogination.",
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
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Outreach",
                description: "Launch multi-channel campaigns.",
                variant: "sky",
            },
            {
                step: 3,
                title: "Convert",
                description: "Qualify & book appointments.",
                variant: "lime",
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
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Matching",
                description: "Meet & interview candidates.",
                variant: "sky",
            },
            {
                step: 3,
                title: "Onboard",
                description: "Start working together.",
                variant: "lime",
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
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Create",
                description: "Design identity & guidelines.",
                variant: "sky",
            },
            {
                step: 3,
                title: "Implement",
                description: "Roll out across all channels.",
                variant: "lime",
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
                variant: "fuchsia",
            },
            {
                step: 2,
                title: "Strategize",
                description: "Develop actionable roadmap.",
                variant: "sky",
            },
            {
                step: 3,
                title: "Guide",
                description: "Support execution & pivots.",
                variant: "lime",
            },
        ],
    },
};