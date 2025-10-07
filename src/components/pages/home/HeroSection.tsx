import AnimatedContainer from "@/components/shared/AnimatedContainer";
import Container from "@/components/shared/Container";
import { TextAnimation } from "@/components/shared/TextAnimation";
import { Button } from "@/components/ui/button";
import ColorfulCard from "@/components/ui/colorful-card";
import {
    Brain,
    ChevronRight,
    Laptop,
    Smartphone,
    SquareCode,
    Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return (
        <div>
            <Container className="flex relative flex-col space-y-3 justify-center items-center pb-20">
                <TextAnimation
                    className="md:text-5xl text-3xl  font-semibold"
                    text="We Strategize. We Innovate. We Excel."
                />
                <TextAnimation
                    className="text-primary/70 my-4"
                    text="Ideas In Action -Your Vision, Our Expertise. Made Real"
                />
                <AnimatedContainer direction="up" delay={0.1}>
                    <div className="flex justify-center gap-2 items-center flex-wrap text-primary ">
                        <ColorfulCard variant="sky">
                            <Smartphone className="text-sky-500" size={15} />
                            App Developers
                        </ColorfulCard>
                        <ColorfulCard variant="fuchsia">
                            <Brain className="text-fuchsia-500" size={15} />
                            AI Agents
                        </ColorfulCard>
                        <ColorfulCard variant="orange">
                            <Laptop className="text-orange-500" size={15} />
                            Web Developers
                        </ColorfulCard>
                        <ColorfulCard variant="lime">
                            <Target className="text-lime-500" size={15} />
                            Digital Marketers
                        </ColorfulCard>
                        <ColorfulCard variant="rose">
                            <SquareCode className="text-rose-500" size={15} />
                            No-Code Experts
                        </ColorfulCard>
                    </div>
                    <div className="flex justify-between items-center gap-1 mt-5 max-w-[250px] mx-auto ">
                        <Button variant="default" asChild className="h-10">
                            <Link href="/">
                                Start building
                                <ChevronRight
                                    size={5}
                                    className="bg-secondary rounded-[2px] text-primary"
                                />
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="h-10">
                            <Link href="/">Book a Free Demo</Link>
                        </Button>
                    </div>
                </AnimatedContainer>
                <AnimatedContainer direction="up" delay={0.3}>
                    <div className=" m-10">
                        <Image
                            src="/images/hero-image.png"
                            alt="Hero Image"
                            width={1440}
                            height={600}
                            className="rounded-lg mx-auto"
                        />
                    </div>{" "}
                </AnimatedContainer>
            </Container>
        </div>
    );
};

export default HeroSection;
