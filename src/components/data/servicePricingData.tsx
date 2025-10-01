
interface PricingPlan {
    title: string;
    subtitle: string;
    price: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    isPopular?: boolean;
}
interface ServicePricing {
    [key: string]: {
        tabs?: string[];
        plans: PricingPlan[];
    };
}

export const servicePricingData: ServicePricing = {
    "web-app-development": {
        tabs: ["Basic Sites", "Business Apps", "Enterprise"],
        plans: [
            {
                title: "For Beginners",
                subtitle: "Perfect for small businesses",
                price: "FREE",
                features: [
                    "Basic 4 page website",
                    "Mobile responsive design",
                    "Contact form integration",
                    "Basic SEO setup",
                ],
                buttonText: "Build My Website",
                buttonLink: "/contact",
                variant: "sky",
            },
            {
                title: "For Business",
                subtitle: "Complete business solution",
                price: "$750",
                features: [
                    "Custom websites & dashboards",
                    "CRM integration",
                    "E-commerce functionality",
                    "Membership portals",
                    "Advanced features",
                ],
                buttonText: "Build My Website",
                buttonLink: "/contact",
                variant: "indigo",
                isPopular: true,
            },
            {
                title: "For Enterprise",
                subtitle: "Tailored enterprise solutions",
                price: "Let's Talk",
                features: [
                    "Custom enterprise applications",
                    "Advanced dashboards",
                    "Full CRM systems",
                    "Multi-platform deployment",
                    "Dedicated support",
                ],
                buttonText: "Contact Sales",
                buttonLink: "/contact",
                variant: "fuchsia",
            },
        ],
    },
    "marketing-growth": {
        tabs: ["Starter", "Growth", "Scale"],
        plans: [
            {
                title: "Starter Pack",
                subtitle: "Get started with marketing",
                price: "$299",
                features: [
                    "Social media management (2 platforms)",
                    "Basic SEO optimization",
                    "Monthly content calendar",
                    "Performance reports",
                ],
                buttonText: "Start Growing",
                buttonLink: "/contact",
                variant: "orange",
            },
            {
                title: "Growth Plan",
                subtitle: "Accelerate your growth",
                price: "$599",
                features: [
                    "Social media (4 platforms)",
                    "Advanced SEO & content strategy",
                    "Email marketing campaigns",
                    "Brand strategy consultation",
                    "Weekly analytics",
                ],
                buttonText: "Boost My Growth",
                buttonLink: "/contact",
                variant: "fuchsia",
                isPopular: true,
            },
            {
                title: "Scale Package",
                subtitle: "Enterprise marketing",
                price: "Let's Talk",
                features: [
                    "Full-channel marketing",
                    "Dedicated marketing team",
                    "Advanced automation",
                    "Custom strategy",
                    "Priority support",
                ],
                buttonText: "Contact Sales",
                buttonLink: "/contact",
                variant: "indigo",
            },
        ],
    },
    "automation-ai": {
        tabs: ["Basic Automation", "AI Integration", "Enterprise AI"],
        plans: [
            {
                title: "Automation Starter",
                subtitle: "Streamline basic workflows",
                price: "$399",
                features: [
                    "3 workflow automations",
                    "Basic integration setup",
                    "Email automation",
                    "Monthly maintenance",
                ],
                buttonText: "Automate Now",
                buttonLink: "/contact",
                variant: "sky",
            },
            {
                title: "AI Pro",
                subtitle: "AI-powered automation",
                price: "$899",
                features: [
                    "AI assistant implementation",
                    "Smart workflow automation",
                    "Predictive analytics",
                    "Custom integrations",
                    "Ongoing optimization",
                ],
                buttonText: "Get AI Power",
                buttonLink: "/contact",
                variant: "lime",
                isPopular: true,
            },
            {
                title: "Enterprise AI",
                subtitle: "Full AI transformation",
                price: "Let's Talk",
                features: [
                    "Custom AI agents",
                    "Advanced ML models",
                    "Complete automation suite",
                    "Dedicated AI team",
                    "24/7 support",
                ],
                buttonText: "Transform Business",
                buttonLink: "/contact",
                variant: "fuchsia",
            },
        ],
    },
    "mvp-product": {
        tabs: ["MVP Launch", "Product Build", "Full Scale"],
        plans: [
            {
                title: "MVP Sprint",
                subtitle: "Validate your idea fast",
                price: "$1,999",
                features: [
                    "4-week MVP development",
                    "No-code/low-code solution",
                    "Core feature implementation",
                    "User testing setup",
                    "Launch support",
                ],
                buttonText: "Launch MVP",
                buttonLink: "/contact",
                variant: "orange",
            },
            {
                title: "Product Builder",
                subtitle: "Full product development",
                price: "$4,999",
                features: [
                    "8-12 week development",
                    "Custom coded solution",
                    "Advanced features",
                    "Scalable architecture",
                    "Product strategy included",
                ],
                buttonText: "Build Product",
                buttonLink: "/contact",
                variant: "indigo",
                isPopular: true,
            },
            {
                title: "Scale Solution",
                subtitle: "Enterprise product",
                price: "Let's Talk",
                features: [
                    "Full-scale development",
                    "Dedicated development team",
                    "Advanced tech stack",
                    "Ongoing iterations",
                    "Growth partnership",
                ],
                buttonText: "Scale Now",
                buttonLink: "/contact",
                variant: "sky",
            },
        ],
    },
    "sales-outreach": {
        tabs: ["Outreach Basic", "Sales Pro", "Enterprise Sales"],
        plans: [
            {
                title: "Outreach Starter",
                subtitle: "Begin generating leads",
                price: "$499",
                features: [
                    "Cold email campaigns",
                    "Basic LinkedIn outreach",
                    "Lead list of 500 contacts",
                    "Monthly reporting",
                ],
                buttonText: "Start Outreach",
                buttonLink: "/contact",
                variant: "lime",
            },
            {
                title: "Sales Accelerator",
                subtitle: "Scale your pipeline",
                price: "$999",
                features: [
                    "Multi-channel campaigns",
                    "Appointment setting",
                    "Lead nurturing sequences",
                    "CRM integration",
                    "Weekly optimization",
                ],
                buttonText: "Get More Clients",
                buttonLink: "/contact",
                variant: "fuchsia",
                isPopular: true,
            },
            {
                title: "Enterprise Sales",
                subtitle: "Full sales team",
                price: "Let's Talk",
                features: [
                    "Dedicated sales team",
                    "Custom strategy",
                    "Advanced automation",
                    "Performance guarantees",
                    "Priority support",
                ],
                buttonText: "Scale Sales",
                buttonLink: "/contact",
                variant: "rose",
            },
        ],
    },
    "team-hire": {
        tabs: ["Part-Time", "Full-Time", "Dedicated Team"],
        plans: [
            {
                title: "Part-Time Dev",
                subtitle: "Flexible development support",
                price: "$2,500/mo",
                features: [
                    "20 hours per week",
                    "Specialized skill set",
                    "Project-based work",
                    "Monthly billing",
                ],
                buttonText: "Hire Part-Time",
                buttonLink: "/contact",
                variant: "sky",
            },
            {
                title: "Full-Time Dev",
                subtitle: "Dedicated developer",
                price: "$4,500/mo",
                features: [
                    "40 hours per week",
                    "Full project ownership",
                    "Direct communication",
                    "Quality assurance",
                    "Regular updates",
                ],
                buttonText: "Hire Full-Time",
                buttonLink: "/contact",
                variant: "indigo",
                isPopular: true,
            },
            {
                title: "Dev Team",
                subtitle: "Complete development team",
                price: "Let's Talk",
                features: [
                    "Multiple developers",
                    "Project manager included",
                    "QA specialist",
                    "Flexible scaling",
                    "Enterprise support",
                ],
                buttonText: "Build Team",
                buttonLink: "/contact",
                variant: "orange",
            },
        ],
    },
    "brand-design": {
        tabs: ["Brand Basics", "Full Identity", "Enterprise Brand"],
        plans: [
            {
                title: "Brand Starter",
                subtitle: "Essential brand elements",
                price: "$799",
                features: [
                    "Logo design (3 concepts)",
                    "Color palette",
                    "Typography selection",
                    "Brand guidelines (basic)",
                ],
                buttonText: "Start Branding",
                buttonLink: "/contact",
                variant: "fuchsia",
            },
            {
                title: "Full Identity",
                subtitle: "Complete brand package",
                price: "$1,999",
                features: [
                    "Complete visual identity",
                    "UI/UX design system",
                    "Brand positioning strategy",
                    "Marketing collateral",
                    "Style guide",
                ],
                buttonText: "Build My Brand",
                buttonLink: "/contact",
                variant: "rose",
                isPopular: true,
            },
            {
                title: "Enterprise Brand",
                subtitle: "Full brand transformation",
                price: "Let's Talk",
                features: [
                    "Complete brand strategy",
                    "Multi-platform design",
                    "Brand architecture",
                    "Ongoing brand management",
                    "Dedicated design team",
                ],
                buttonText: "Transform Brand",
                buttonLink: "/contact",
                variant: "orange",
            },
        ],
    },
    "consulting-strategy": {
        tabs: ["Strategy Session", "Growth Plan", "Partnership"],
        plans: [
            {
                title: "Strategy Session",
                subtitle: "One-time consultation",
                price: "$499",
                features: [
                    "2-hour strategy session",
                    "Business assessment",
                    "Actionable recommendations",
                    "Follow-up report",
                ],
                buttonText: "Book Session",
                buttonLink: "/contact",
                variant: "lime",
            },
            {
                title: "Growth Package",
                subtitle: "3-month engagement",
                price: "$2,999",
                features: [
                    "Monthly strategy sessions",
                    "Digital transformation plan",
                    "Implementation roadmap",
                    "Ongoing optimization",
                    "Priority support",
                ],
                buttonText: "Plan My Strategy",
                buttonLink: "/contact",
                variant: "indigo",
                isPopular: true,
            },
            {
                title: "Strategic Partnership",
                subtitle: "Long-term collaboration",
                price: "Let's Talk",
                features: [
                    "Dedicated strategist",
                    "Quarterly planning",
                    "Full implementation support",
                    "Performance tracking",
                    "Executive access",
                ],
                buttonText: "Partner With Us",
                buttonLink: "/contact",
                variant: "sky",
            },
        ],
    },
};