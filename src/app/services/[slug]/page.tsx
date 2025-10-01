// app/services/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import Container from "@/components/shared/Container";
import AboutServiceSection from "@/components/pages/servicesmenu/AboutServiceSection";
import PricingContainer from "@/components/pages/servicesmenu/PricingContainer";
import { serviceDetailsData} from "@/components/data/serviceDetailsData";
import RecentWorks from "@/components/pages/servicesmenu/RecentWorks";
import {servicePricingData} from '@/components/data/servicePricingData'
import BlogSection from "@/components/pages/servicesmenu/BlogSection";

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
        {/* Back Link */}
        <AnimatedContainer direction="up" delay={0.1}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 transition-colors mb-8"
          >
            <ChevronLeft size={16} />
            See All Services
          </Link>
        </AnimatedContainer>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left: Title */}
          <AnimatedContainer direction="left" delay={0.2}>
            <Text as="h1" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {service.title}
            </Text>
          </AnimatedContainer>

          {/* Right: Description & Button */}
          <AnimatedContainer direction="right" delay={0.3}>
            <div className="flex flex-col justify-center h-full">
              <Text className="text-sm md:text-base text-primary/70 mb-6 leading-relaxed">
                {service.description}
              </Text>
              <Button className="h-11 px-6 rounded-full bg-black hover:bg-gray-800 text-white w-fit">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </AnimatedContainer>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
          {service.features.map((feature, index) => {
            const getBgColor = () => {
              const colors = ["bg-orange-50", "bg-pink-50", "bg-blue-50", "bg-cyan-50"];
              return colors[index % colors.length];
            };

            const getMarginTop = () => {
              if (index === 0) return "mt-0";
              if (index === 1) return "mt-8 md:mt-12";
              if (index === 2) return "mt-0";
              if (index === 3) return "mt-8 md:mt-12";
              return "mt-0";
            };

            return (
              <AnimatedContainer
                key={feature.title}
                direction="up"
                delay={0.1 + index * 0.08}
                className={getMarginTop()}
              >
                <div
                  className={`${getBgColor()} p-6 rounded-2xl h-[320px] md:h-[360px] relative overflow-hidden transition-all duration-300 hover:shadow-lg group text-gray-900`}
                >
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <Text as="h3" className="text-sm md:text-base font-bold leading-snug -rotate-2 mb-6">
                      {feature.title}
                    </Text>
                    <Text className="text-xs opacity-70 leading-relaxed max-w-[90%]">
                      {feature.description}
                    </Text>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>

        {/* About This Service */}
        <AboutServiceSection
          aboutSections={service.aboutSections}
          whyChoose={service.whyChoose}
          process={service.process}
        />

        {/* Pricing Section */}
        {pricing && (
          <PricingContainer plans={pricing.plans} tabs={pricing.tabs} />
        )}

        <RecentWorks 
                serviceSlug={slug} 
                limit={3} 
            />
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