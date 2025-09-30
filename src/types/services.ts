export interface ServiceFeature {
    title: string;
    description: string;
    bgColor: string;
    textColor: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
    variant: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
    
}

export interface DetailSection {
    title: string;
    description: string;
}

export interface ServiceDetailData {
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

export interface PageProps {
    params: {
        slug: string;
    };
}