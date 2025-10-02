// app/data/blogData.tsx
import { BookOpen, Code, TrendingUp, Lightbulb, Cpu, Globe, Palette, BarChart3 } from "lucide-react";

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishedDate: string;
    readTime: string;
    category: string;
    tags: string[];
    icon: React.ReactNode;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    bgColor: string;
    iconBgColor: string;
    featured?: boolean;
}

export const blogCategories = [
    "All",
    "Web Development",
    "Marketing",
    "AI & Automation",
    "Business Strategy",
    "Design",
];

export const blogPostsData: BlogPost[] = [
    {
        id: "1",
        slug: "must-have-features-business-website",
        title: "5 Must-Have Features Every Business Website Needs",
        excerpt: "A great website goes beyond aesthetics—it's a strategic tool designed to attract, engage, and convert visitors into loyal customers.",
        content: `A great website goes beyond aesthetics—it's a strategic tool designed to attract, engage, and convert visitors into loyal customers.

## 1. Responsive Design
Your website must work flawlessly on all devices. With over 60% of web traffic coming from mobile devices, responsive design isn't optional—it's essential.

## 2. Fast Loading Speed
Users expect pages to load in under 3 seconds. Optimize images, leverage browser caching, and use modern frameworks to ensure lightning-fast performance.

## 3. Clear Call-to-Actions
Every page should guide visitors toward a specific action—whether that's signing up, making a purchase, or contacting you.

## 4. SEO Optimization
Built-in SEO ensures your site ranks well on search engines. This includes proper meta tags, structured data, and optimized content.

## 5. Security Features
SSL certificates, secure payment gateways, and regular updates protect both your business and your customers' data.`,
        author: "Sarah Johnson",
        publishedDate: "2024-09-15",
        readTime: "5 min read",
        category: "Web Development",
        tags: ["Web Design", "UX", "SEO"],
        icon: <Globe size={20} />,
        variant: "orange",
        bgColor: "bg-orange-100",
        iconBgColor: "bg-orange-200",
        featured: true,
    },
    {
        id: "2",
        slug: "ecommerce-trends-2025",
        title: "E-commerce Trends 2025: What's Next?",
        excerpt: "Discover the key shifts reshaping the e-commerce landscape—from AI-driven shopping to sustainable practices that consumers demand.",
        content: `The e-commerce landscape is evolving rapidly. Here are the trends that will define success in 2025.

## AI-Powered Personalization
Machine learning algorithms now predict customer preferences with stunning accuracy, creating truly personalized shopping experiences.

## Social Commerce Integration
Instagram, TikTok, and Facebook are becoming primary shopping platforms. Brands must integrate social selling into their strategy.

## Sustainable Practices
Consumers increasingly favor brands with eco-friendly packaging, carbon-neutral shipping, and transparent supply chains.

## Voice Commerce
With smart speakers in millions of homes, voice-activated shopping is becoming mainstream. Optimize your product listings for voice search.

## AR Try-Before-You-Buy
Augmented reality lets customers visualize products in their space before purchasing, dramatically reducing return rates.`,
        author: "Michael Chen",
        publishedDate: "2024-09-10",
        readTime: "7 min read",
        category: "Marketing",
        tags: ["E-commerce", "Trends", "Digital Strategy"],
        icon: <TrendingUp size={20} />,
        variant: "fuchsia",
        bgColor: "bg-fuchsia-100",
        iconBgColor: "bg-fuchsia-200",
        featured: true,
    },
    {
        id: "3",
        slug: "custom-dashboard-vs-off-the-shelf",
        title: "Custom Dashboard vs Off-the-Shelf: Which is Right for You?",
        excerpt: "Making the choice between building custom or buying ready-made can save you thousands. Here's how to decide what your team actually needs.",
        content: `Choosing between a custom dashboard and an off-the-shelf solution can significantly impact your efficiency and costs.

## When to Choose Off-the-Shelf
If you're a small business with standard needs, pre-built solutions like Tableau or Google Data Studio offer quick deployment and lower initial costs.

### Benefits:
- Quick implementation
- Lower upfront costs
- Regular updates included
- Proven reliability

## When to Build Custom
For unique business processes or specific data integration needs, custom dashboards provide flexibility and competitive advantage.

### Benefits:
- Tailored to exact needs
- Better integration with existing systems
- Scalable architecture
- Complete control over features

## The Hybrid Approach
Many successful companies start with off-the-shelf solutions and gradually build custom components as needs evolve.

## Making the Decision
Evaluate your budget, timeline, team size, and long-term scalability needs before committing to either approach.`,
        author: "Alex Rivera",
        publishedDate: "2024-09-05",
        readTime: "6 min read",
        category: "Business Strategy",
        tags: ["Dashboards", "CRM", "Software Selection"],
        icon: <BarChart3 size={20} />,
        variant: "indigo",
        bgColor: "bg-indigo-100",
        iconBgColor: "bg-indigo-200",
        featured: true,
    },
    {
        id: "4",
        slug: "ai-automation-small-business",
        title: "How AI Automation Can Transform Small Businesses",
        excerpt: "Stop spending hours on repetitive tasks. Learn how AI automation helps small teams compete with enterprise-level efficiency.",
        content: `AI and automation aren't just for tech giants. Small businesses can leverage these tools to compete effectively.

## Customer Service Automation
AI chatbots handle routine inquiries 24/7, freeing your team to focus on complex customer needs.

## Marketing Automation
Email sequences, social media posting, and ad optimization can run on autopilot while maintaining personalization.

## Data Entry & Processing
Eliminate manual data entry by automating invoice processing, lead capture, and inventory updates.

## Predictive Analytics
AI analyzes patterns in your data to forecast sales, predict churn, and optimize pricing strategies.

## Getting Started
Begin with one process that consumes the most time. Automate it, measure results, then expand gradually.`,
        author: "Priya Patel",
        publishedDate: "2024-08-28",
        readTime: "5 min read",
        category: "AI & Automation",
        tags: ["AI", "Automation", "Productivity"],
        icon: <Cpu size={20} />,
        variant: "sky",
        bgColor: "bg-sky-100",
        iconBgColor: "bg-sky-200",
    },
    {
        id: "5",
        slug: "mvp-mistakes-to-avoid",
        title: "7 MVP Mistakes That Cost Startups Thousands",
        excerpt: "Building too much too soon? Here are the costly mistakes that sink MVPs before they launch—and how to avoid them.",
        content: `Most startups fail not because they build the wrong product, but because they build too much of it too soon.

## Mistake #1: Building Too Many Features
The MVP should solve one core problem extremely well. Additional features can wait until you validate product-market fit.

## Mistake #2: Ignoring User Feedback
Your assumptions will be wrong. Build mechanisms to gather and act on user feedback from day one.

## Mistake #3: Perfectionism
Launch with something functional but imperfect. Real users will tell you what actually needs improvement.

## Mistake #4: Wrong Technology Choices
Don't build custom infrastructure for an unvalidated idea. Use no-code tools and proven platforms to move fast.

## Mistake #5: No Clear Success Metrics
Define what success looks like before building. Track the metrics that matter for validation.

## Mistake #6: Skipping Market Research
Understand your competitors and target audience deeply before writing a single line of code.

## Mistake #7: Building in Isolation
Show your MVP to potential customers early and often. Iterate based on real feedback, not assumptions.`,
        author: "David Kim",
        publishedDate: "2024-08-20",
        readTime: "8 min read",
        category: "Business Strategy",
        tags: ["MVP", "Startups", "Product Development"],
        icon: <Lightbulb size={20} />,
        variant: "lime",
        bgColor: "bg-lime-100",
        iconBgColor: "bg-lime-200",
    },
    {
        id: "6",
        slug: "brand-identity-guide",
        title: "Creating a Memorable Brand Identity in 2025",
        excerpt: "Your brand is more than a logo. Discover how to build an identity that resonates emotionally and stands out in crowded markets.",
        content: `A strong brand identity is the foundation of business success. Here's how to create one that lasts.

## Understanding Brand Identity
Brand identity encompasses your visual design, voice, values, and the emotional connection you create with customers.

## Core Elements
- **Visual Identity**: Logo, colors, typography, imagery
- **Brand Voice**: How you communicate across channels
- **Brand Values**: What you stand for and believe in
- **Brand Story**: Your origin, mission, and vision

## The Discovery Process
Start by deeply understanding your target audience, competitors, and unique value proposition.

## Design Principles
Keep it simple, memorable, and versatile. Your brand should work across all mediums and scale effortlessly.

## Consistency is Key
Create comprehensive brand guidelines that ensure consistency across every customer touchpoint.

## Evolution Over Time
Great brands evolve while maintaining core elements that customers recognize and trust.`,
        author: "Emma Thompson",
        publishedDate: "2024-08-12",
        readTime: "6 min read",
        category: "Design",
        tags: ["Branding", "Design", "Marketing"],
        icon: <Palette size={20} />,
        variant: "orange",
        bgColor: "bg-amber-100",
        iconBgColor: "bg-amber-200",
    },
    {
        id: "7",
        slug: "seo-guide-2025",
        title: "The Complete SEO Guide for 2025",
        excerpt: "Search algorithms change constantly, but these core principles remain. Master SEO fundamentals that actually move the needle.",
        content: `SEO continues evolving, but certain fundamentals remain crucial for ranking success.

## Technical SEO Foundations
Ensure your site is crawlable, fast, mobile-friendly, and secure. These are non-negotiables in 2025.

## Content Strategy
Create comprehensive, authoritative content that genuinely answers user queries. Quality over quantity always wins.

## Keyword Research
Target keywords with search intent aligned to your business goals. Focus on long-tail keywords with lower competition.

## Link Building
Earn high-quality backlinks through valuable content, partnerships, and digital PR. Avoid shortcuts.

## User Experience
Google increasingly prioritizes sites that provide excellent user experiences—fast loading, easy navigation, and valuable content.

## Local SEO
For local businesses, optimize Google Business Profile, encourage reviews, and build local citations.

## Measuring Success
Track rankings, organic traffic, conversion rates, and business outcomes—not just vanity metrics.`,
        author: "Robert Martinez",
        publishedDate: "2024-08-05",
        readTime: "10 min read",
        category: "Marketing",
        tags: ["SEO", "Content Marketing", "Digital Strategy"],
        icon: <TrendingUp size={20} />,
        variant: "rose",
        bgColor: "bg-rose-100",
        iconBgColor: "bg-rose-200",
    },
    {
        id: "8",
        slug: "web-development-frameworks-2025",
        title: "Best Web Development Frameworks in 2025",
        excerpt: "React, Next.js, or something else? Navigate the framework landscape and choose the right tool for your next project.",
        content: `Choosing the right framework can make or break your project. Here's what's dominating web development in 2025.

## React & Next.js
React remains the king of frontend frameworks, with Next.js providing the best full-stack experience with built-in SSR and routing.

## Vue.js & Nuxt
Vue's gentle learning curve and Nuxt's powerful features make this combo perfect for teams transitioning from traditional backends.

## Svelte & SvelteKit
Svelte compiles away the framework, resulting in blazing-fast applications with minimal bundle sizes.

## When to Use Each
- **Next.js**: Complex applications needing SEO and performance
- **Nuxt**: Teams familiar with Vue wanting full-stack capabilities  
- **SvelteKit**: Projects prioritizing minimal JavaScript and speed

## The No-Framework Approach
For simple sites, vanilla JavaScript or lightweight libraries might be all you need.

## Making Your Choice
Consider team expertise, project requirements, community support, and long-term maintainability before committing.`,
        author: "Lisa Anderson",
        publishedDate: "2024-07-28",
        readTime: "7 min read",
        category: "Web Development",
        tags: ["Frameworks", "JavaScript", "Web Development"],
        icon: <Code size={20} />,
        variant: "indigo",
        bgColor: "bg-purple-100",
        iconBgColor: "bg-purple-200",
    },
];

// Helper functions
export const getFeaturedPosts = (): BlogPost[] => {
    return blogPostsData.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
    if (category === "All") return blogPostsData;
    return blogPostsData.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPostsData.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
    const currentPost = getPostBySlug(currentSlug);
    if (!currentPost) return [];
    
    return blogPostsData
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, limit);
};