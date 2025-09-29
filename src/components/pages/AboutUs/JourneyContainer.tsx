import React from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import Link from "next/link";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { ArrowUpRight } from "lucide-react";

const JourneyContainer = () => {
    return (
        <section className="my-20 w-full">
            <div className="min-h-[60vh] w-full flex items-center justify-center px-4">
                <AnimatedContainer direction="up" delay={0.2}>
                    <div className="text-center max-w-2xl mx-auto">
                        <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Join our journey.
                        </Text>
                        
                        <Text className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
                            We're always looking for passionate creators, marketers,
                            and developers to grow with us.
                        </Text>
                        
                        <div className="flex justify-center">
                            <Button 
                                asChild 
                                className="h-12 px-6 bg-black hover:bg-gray-800 text-white rounded-full"
                            >
                                <Link href="/" className="flex items-center gap-2">
                                    See roles
                                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                                        <ArrowUpRight size={14} className="text-black" />
                                    </div>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimatedContainer>
            </div>
        </section>
    );
};

export default JourneyContainer;