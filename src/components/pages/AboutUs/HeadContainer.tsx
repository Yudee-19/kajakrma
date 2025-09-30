import React from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { ChevronRight } from "lucide-react";

const HeadContainer = () => {
    return (
        <section className="my-20 w-full rounded-3xl p-8 lg:p-16 bg-gradient-to-r from-[#FFF2DA] to-[#FFDAA4] overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
                {/* Left Side - Content */}
                <AnimatedContainer 
                    direction="left" 
                    delay={0.2}
                    className="w-full lg:w-[50%]"
                >
                    <div className="space-y-6">
                        <div>
                            <Text as="h1" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-left">
                                Who we are.
                            </Text>
                            <Text as="h1" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-left">
                                Why we build.
                            </Text>
                        </div>

                        <Text className="text-gray-600 text-base lg:text-lg leading-relaxed text-left">
                            We're a team of builders, strategists, and innovators helping
                            businesses grow with AI, digital marketing, and technology.
                        </Text>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button 
                                asChild 
                                className="h-11 px-6 bg-black hover:bg-gray-800 text-white rounded-full"
                            >
                                <Link href="/" className="flex items-center gap-2">
                                    See our mission
                                    <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                                        <ChevronRight size={14} className="text-black" />
                                    </div>
                                </Link>
                            </Button>
                            
                            <Button 
                                asChild 
                                variant="outline" 
                                className="h-11 px-6 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-full"
                            >
                                <Link href="/">
                                    Meet our team
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimatedContainer>

                {/* Right Side - Image with Cards */}
                <AnimatedContainer 
                    direction="right" 
                    delay={0.3}
                    className="w-full lg:w-[50%]"
                >
                    <div className="w-full">
                        {/* Main Image Container */}
                        <div className="rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] bg-[#FFD08CD9]">
                            <Image
                                src="/images/abouthead.png"
                                alt="Notifications and updates"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </AnimatedContainer>
            </div>
        </section>
    );
};

export default HeadContainer;