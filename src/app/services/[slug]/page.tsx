// app/services/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import ServiceDetailHero from "@/components/pages/servicesmenu/ServiceDetailHero";
import ServiceFeatures from "@/components/pages/servicesmenu/ServiceFeatures";
import AboutServiceSection from "@/components/pages/servicesmenu/AboutServiceSection";
import PricingContainer from "@/components/pages/servicesmenu/PricingContainer";
import RecentWorks from "@/components/pages/servicesmenu/RecentWorks";
import BlogSection from "@/components/pages/servicesmenu/BlogSection";
import { serviceDetailsData } from "@/components/data/serviceDetailsData";
import { servicePricingData } from "@/components/data/servicePricingData";

interface PageProps {
  params: Promise<{ slug: string }>; 
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params; 
  const service = serviceDetailsData[slug];
  const pricing = servicePricingData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full">
      <Container className="py-12 md:py-20">
        <ServiceDetailHero 
          title={service.title}
          description={service.description}
        />

        <ServiceFeatures features={service.features} />

        <AboutServiceSection
          aboutSections={service.aboutSections}
          whyChoose={service.whyChoose}
          process={service.process}
        />

        {pricing && (
          <PricingContainer plans={pricing.plans} tabs={pricing.tabs} />
        )}

        <RecentWorks serviceSlug={slug} limit={3} />
        
        <BlogSection limit={3} showCTA={false} />
      </Container>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(serviceDetailsData).map((slug) => ({
    slug,
  }));
}