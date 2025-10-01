// app/data/recentWorksData.tsx
import { Rocket } from "lucide-react";

export interface WorkProject {
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
    serviceSlug: string;
}

export const recentWorksData: Record<string, WorkProject[]> = {
    "web-app-development": [
        {
            title: "E-commerce Fashion Store",
            description:
                "Built a Shopify-powered store for a fast-growing fashion brand. With optimized product pages, secure payment gateways, and a seamless checkout flow, the brand experienced remarkable growth.",
            achievements: [
                "+45% increase in conversions within the first 3 months",
                "Faster page load times (under 2 seconds)",
                "Mobile-first experience that drove repeat purchases",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "orange",
            bgColor: "bg-orange-50",
            iconBgColor: "bg-orange-200",
            imagePlaceholder: true,
            serviceSlug: "web-app-development",
        },
        {
            title: "CRM Dashboard for Healthcare",
            description:
                "A custom CRM system built for a healthcare provider to manage patient data more efficiently. Features included secure data handling, appointment tracking, and analytics dashboards.",
            achievements: [
                "Streamlined patient records management",
                "Reduced admin workload by 35%",
                "Improved doctor-patient communication with real-time notifications",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "sky",
            bgColor: "bg-sky-50",
            iconBgColor: "bg-sky-200",
            imagePlaceholder: true,
            serviceSlug: "web-app-development",
        },
        {
            title: "Membership Portal for EdTech Startup",
            description:
                "Developed a scalable portal for an education-tech platform, designed to support thousands of users simultaneously. Key features included gamified learning paths, subscription management, and community tools.",
            achievements: [
                "Onboarded 10,000+ users seamlessly in first quarter",
                "Improved engagement by 60% through personalized dashboards",
                "Scalable architecture ready for 10x growth",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "indigo",
            bgColor: "bg-purple-50",
            iconBgColor: "bg-purple-200",
            imagePlaceholder: true,
            serviceSlug: "web-app-development",
        },
    ],

    "marketing-growth": [
        {
            title: "Social Media Campaign for Lifestyle Brand",
            description:
                "Created and managed a comprehensive social media strategy across Instagram, Facebook, and TikTok. Developed engaging content calendars, ran targeted ad campaigns, and built an active community.",
            achievements: [
                "Grew follower base by 250% in 6 months",
                "Achieved 8.5% average engagement rate (3x industry standard)",
                "Generated $120K in direct sales from social channels",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "fuchsia",
            bgColor: "bg-fuchsia-50",
            iconBgColor: "bg-fuchsia-200",
            imagePlaceholder: true,
            serviceSlug: "marketing-growth",
        },
        {
            title: "SEO Transformation for SaaS Company",
            description:
                "Executed a complete SEO overhaul including technical audit, content strategy, and link building. Targeted high-intent keywords and created pillar content to dominate search rankings.",
            achievements: [
                "Increased organic traffic by 340% in 9 months",
                "Ranked #1 for 15 primary target keywords",
                "Reduced cost per acquisition by 55%",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "indigo",
            bgColor: "bg-purple-50",
            iconBgColor: "bg-purple-200",
            imagePlaceholder: true,
            serviceSlug: "marketing-growth",
        },
        {
            title: "Email Campaign for E-learning Platform",
            description:
                "Designed and automated email sequences for lead nurturing, onboarding, and retention. Implemented A/B testing and personalization to maximize conversion rates.",
            achievements: [
                "Achieved 42% open rate (2x industry average)",
                "Increased course completion rate by 35%",
                "Generated $85K in upsell revenue through automated sequences",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "rose",
            bgColor: "bg-pink-50",
            iconBgColor: "bg-pink-200",
            imagePlaceholder: true,
            serviceSlug: "marketing-growth",
        },
    ],

    "automation-ai": [
        {
            title: "AI Chatbot for Customer Support",
            description:
                "Implemented an intelligent chatbot that handles customer inquiries 24/7. The AI assistant was trained on company knowledge base and integrated with CRM for seamless handoffs to human agents.",
            achievements: [
                "Resolved 70% of customer queries automatically",
                "Reduced support ticket volume by 60%",
                "Improved customer satisfaction score by 25%",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "sky",
            bgColor: "bg-sky-50",
            iconBgColor: "bg-sky-200",
            imagePlaceholder: true,
            serviceSlug: "automation-ai",
        },
        {
            title: "Workflow Automation for Real Estate Agency",
            description:
                "Automated repetitive tasks including lead assignment, document generation, appointment scheduling, and follow-up sequences. Integrated multiple tools into unified workflows.",
            achievements: [
                "Saved 200+ hours per month in manual work",
                "Reduced lead response time from 4 hours to 5 minutes",
                "Increased agent productivity by 45%",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "sky",
            bgColor: "bg-cyan-50",
            iconBgColor: "bg-cyan-200",
            imagePlaceholder: true,
            serviceSlug: "automation-ai",
        },
        {
            title: "Predictive Analytics for Retail Chain",
            description:
                "Built machine learning models to forecast inventory demand, predict customer churn, and optimize pricing strategies. Integrated insights into existing dashboard systems.",
            achievements: [
                "Reduced inventory costs by 28%",
                "Improved demand forecasting accuracy to 92%",
                "Increased revenue by $2.3M through dynamic pricing",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "indigo",
            bgColor: "bg-indigo-50",
            iconBgColor: "bg-indigo-200",
            imagePlaceholder: true,
            serviceSlug: "automation-ai",
        },
    ],

    "mvp-product": [
        {
            title: "Fitness App MVP (No-Code)",
            description:
                "Launched a fitness tracking app in 6 weeks using Bubble and Airtable. Features included workout logging, progress tracking, and community challenges. Validated concept before custom development.",
            achievements: [
                "Launched in 6 weeks with $8K budget",
                "Acquired 500 early adopters in first month",
                "Validated product-market fit before scaling",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "lime",
            bgColor: "bg-lime-50",
            iconBgColor: "bg-lime-200",
            imagePlaceholder: true,
            serviceSlug: "mvp-product",
        },
        {
            title: "B2B Marketplace Platform",
            description:
                "Built an MVP for a B2B service marketplace connecting vendors with businesses. Implemented core features: vendor profiles, booking system, reviews, and payment processing.",
            achievements: [
                "Onboarded 50 vendors and 200 businesses in beta",
                "Processed $150K in transactions within 3 months",
                "Secured seed funding based on traction",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "lime",
            bgColor: "bg-green-50",
            iconBgColor: "bg-green-200",
            imagePlaceholder: true,
            serviceSlug: "mvp-product",
        },
        {
            title: "Recipe Sharing Social App",
            description:
                "Rapid prototype for a social recipe-sharing platform with user profiles, recipe uploads, ingredient shopping lists, and social features. Built to test user engagement.",
            achievements: [
                "Delivered working prototype in 5 weeks",
                "Gathered feedback from 1,000+ test users",
                "Pivoted features based on real usage data",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "lime",
            bgColor: "bg-emerald-50",
            iconBgColor: "bg-emerald-200",
            imagePlaceholder: true,
            serviceSlug: "mvp-product",
        },
    ],

    "sales-outreach": [
        {
            title: "Cold Email Campaign for SaaS Startup",
            description:
                "Designed and executed personalized cold email sequences targeting decision makers at mid-sized companies. Handled list building, copywriting, A/B testing, and follow-up automation.",
            achievements: [
                "Achieved 35% open rate and 8% reply rate",
                "Booked 45 qualified demos in first quarter",
                "Generated $180K in pipeline value",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "indigo",
            bgColor: "bg-indigo-50",
            iconBgColor: "bg-indigo-200",
            imagePlaceholder: true,
            serviceSlug: "sales-outreach",
        },
        {
            title: "LinkedIn Outreach for Consulting Firm",
            description:
                "Managed strategic LinkedIn campaigns including profile optimization, connection requests, and messaging sequences. Built relationships with C-suite executives in target industries.",
            achievements: [
                "Connected with 800+ decision makers",
                "Scheduled 30 high-value discovery calls",
                "Closed 8 consulting contracts worth $350K",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "sky",
            bgColor: "bg-blue-50",
            iconBgColor: "bg-blue-200",
            imagePlaceholder: true,
            serviceSlug: "sales-outreach",
        },
        {
            title: "Appointment Setting for Digital Agency",
            description:
                "Provided dedicated SDR services to qualify prospects and book sales meetings. Handled objections, nurtured leads through multi-touch sequences, and ensured high show-up rates.",
            achievements: [
                "Booked 120 qualified appointments in 3 months",
                "Maintained 85% show-up rate",
                "Contributed to $500K in closed revenue",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "indigo",
            bgColor: "bg-violet-50",
            iconBgColor: "bg-violet-200",
            imagePlaceholder: true,
            serviceSlug: "sales-outreach",
        },
    ],

    "team-hire": [
        {
            title: "Frontend Team for Fintech Startup",
            description:
                "Provided a dedicated team of 3 React developers to build a modern fintech dashboard. Team integrated seamlessly with in-house product and design teams.",
            achievements: [
                "Delivered MVP 2 weeks ahead of schedule",
                "Reduced hiring costs by 60% vs. local talent",
                "Scaled team to 5 developers within 2 months",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "sky",
            bgColor: "bg-sky-50",
            iconBgColor: "bg-sky-200",
            imagePlaceholder: true,
            serviceSlug: "team-hire",
        },
        {
            title: "Full-Stack Team for E-commerce Platform",
            description:
                "Assembled a complete development team including frontend, backend, and DevOps engineers to rebuild an aging e-commerce platform with modern tech stack.",
            achievements: [
                "Migrated 50,000+ products without downtime",
                "Improved site performance by 70%",
                "Maintained quality with 95% test coverage",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "sky",
            bgColor: "bg-cyan-50",
            iconBgColor: "bg-cyan-200",
            imagePlaceholder: true,
            serviceSlug: "team-hire",
        },
        {
            title: "Mobile Dev Team for Health App",
            description:
                "Provided specialized iOS and Android developers to build native mobile applications for a health tracking platform. Team worked in client's timezone with daily standups.",
            achievements: [
                "Launched iOS and Android apps simultaneously",
                "Achieved 4.7-star rating on both app stores",
                "Processed 1M+ user sessions without crashes",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "sky",
            bgColor: "bg-blue-50",
            iconBgColor: "bg-blue-200",
            imagePlaceholder: true,
            serviceSlug: "team-hire",
        },
    ],

    "brand-design": [
        {
            title: "Complete Rebrand for Tech Startup",
            description:
                "Created comprehensive brand identity including logo, color system, typography, and brand guidelines. Designed marketing collateral and website to reflect new positioning.",
            achievements: [
                "Increased brand recognition by 180%",
                "Improved trust metrics in user surveys by 65%",
                "Created cohesive experience across 12 touchpoints",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "orange",
            bgColor: "bg-orange-50",
            iconBgColor: "bg-orange-200",
            imagePlaceholder: true,
            serviceSlug: "brand-design",
        },
        {
            title: "UI/UX Redesign for SaaS Platform",
            description:
                "Redesigned entire user interface of a complex B2B SaaS platform. Conducted user research, created wireframes, prototypes, and implemented design system with 150+ components.",
            achievements: [
                "Reduced user onboarding time by 50%",
                "Increased feature adoption by 75%",
                "Decreased support tickets by 40%",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "orange",
            bgColor: "bg-amber-50",
            iconBgColor: "bg-amber-200",
            imagePlaceholder: true,
            serviceSlug: "brand-design",
        },
        {
            title: "Brand Strategy for Wellness Company",
            description:
                "Developed strategic brand positioning, messaging framework, and visual identity for a wellness startup entering competitive market. Created differentiated brand voice and story.",
            achievements: [
                "Defined unique market position in crowded space",
                "Created brand assets used across 50+ campaigns",
                "Helped secure $2M in Series A funding",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "lime",
            bgColor: "bg-yellow-50",
            iconBgColor: "bg-yellow-200",
            imagePlaceholder: true,
            serviceSlug: "brand-design",
        },
    ],

    "consulting-strategy": [
        {
            title: "Digital Transformation for Manufacturing Firm",
            description:
                "Conducted technology audit, identified inefficiencies, and created roadmap for digital transformation. Guided implementation of cloud infrastructure, automation tools, and data analytics.",
            achievements: [
                "Reduced operational costs by 35%",
                "Improved production efficiency by 50%",
                "Created 3-year technology roadmap",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "fuchsia",
            bgColor: "bg-fuchsia-50",
            iconBgColor: "bg-fuchsia-200",
            imagePlaceholder: true,
            serviceSlug: "consulting-strategy",
        },
        {
            title: "Product Strategy for Mobile App Startup",
            description:
                "Helped refine product vision, prioritize features, and create go-to-market strategy. Conducted competitive analysis and user research to validate product-market fit.",
            achievements: [
                "Identified and cut 40% of unnecessary features",
                "Accelerated time-to-market by 3 months",
                "Increased user retention by 2x through strategic pivots",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "rose",
            bgColor: "bg-pink-50",
            iconBgColor: "bg-pink-200",
            imagePlaceholder: true,
            serviceSlug: "consulting-strategy",
        },
        {
            title: "Growth Strategy for E-commerce Brand",
            description:
                "Provided fractional CMO services to develop comprehensive growth strategy. Analyzed current performance, identified opportunities, and created quarterly execution plans.",
            achievements: [
                "Increased revenue by 120% year-over-year",
                "Expanded into 3 new market segments",
                "Built scalable marketing infrastructure",
            ],
            buttonText: "View Case Study",
            buttonLink: "#",
            icon: <Rocket size={20} />,
            variant: "rose",
            bgColor: "bg-rose-50",
            iconBgColor: "bg-rose-200",
            imagePlaceholder: true,
            serviceSlug: "consulting-strategy",
        },
    ],
};

// Helper function to get works by service
export const getWorksByService = (serviceSlug: string): WorkProject[] => {
    return recentWorksData[serviceSlug] || [];
};

// Get all works (for home page or general portfolio)
export const getAllWorks = (): WorkProject[] => {
    return Object.values(recentWorksData).flat();
};