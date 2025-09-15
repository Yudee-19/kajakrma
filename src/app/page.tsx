import Container from "@/components/shared/Container";
import { TextAnimation } from "@/components/shared/TextAnimation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ColorfulCard from "@/components/ui/colorful-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Text from "@/components/ui/text";
import {
    Brain,
    ChevronRight,
    Cpu,
    Laptop,
    Smartphone,
    SquareCode,
    Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GiTrafficLightsRed } from "react-icons/gi";
import { IoIosGlobe } from "react-icons/io";
import { RiUserCommunityLine } from "react-icons/ri";

export default function Home() {
    return (
        <div>
            <Container className="flex relative flex-col space-y-3 justify-center items-center py-20">
                <TextAnimation
                    className="text-5xl font-semibold"
                    text="We build. We scale. We grow."
                />

                <TextAnimation
                    className="text-primary/70"
                    text="The perfect team to bring your ideas to life."
                />
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
                <div className="flex justify-between items-center gap-2 mt-5">
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
                <div className=" m-10">
                    <Image
                        src="/images/hero-image.png"
                        alt="Hero Image"
                        width={1440}
                        height={600}
                        className="rounded-lg mx-auto"
                    />
                </div>
                <section className="w-full px-10 ">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="max-w-sm text-left ">
                            <Text
                                as={"h6"}
                                className="text-sm font-semibold text-blue-700 text-left "
                            >
                                Our Mission
                            </Text>
                            <Text
                                as={"h2"}
                                className="text-3xl font-bold text-left"
                            >
                                Build smarter. Grow faster. Win bigger.
                            </Text>
                            <Text className="text-left text-primary/70 text-sm mt-5">
                                At Kajkarma, we help startups and businesses
                                launch scalable digital solutions, expand
                                online, and convert ideas into revenue - with or
                                without code.
                            </Text>
                            <div className="flex flex-col mt-5 gap-2">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="space-y-2"
                                    defaultValue="item-1"
                                >
                                    <AccordionItem
                                        value="item-1"
                                        className="bg-orange-50 dark:bg-orange-900/20 px-5 rounded-lg border border-orange-200 dark:border-orange-700"
                                    >
                                        <AccordionTrigger className="hover:no-underline text-orange-700 dark:text-orange-300">
                                            <div className="flex flex-col items-start gap-3">
                                                <GiTrafficLightsRed
                                                    className="text-orange-500"
                                                    size={24}
                                                />
                                                <Text
                                                    as={"h4"}
                                                    className="text-lg font-medium"
                                                >
                                                    Turn traffic into action
                                                </Text>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Text className="text-xs text-orange-700/70 dark:text-orange-300/70 text-left ">
                                                Turn traffic into from landing
                                                pages to full-scale apps, we
                                                build experiences that convert
                                                users into loyal customers.
                                            </Text>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="item-2"
                                        className="bg-sky-50 dark:bg-sky-900/20 px-5 rounded-lg border border-sky-200 dark:border-sky-700"
                                    >
                                        <AccordionTrigger className="hover:no-underline text-sky-700 dark:text-sky-300">
                                            <div className="flex flex-col items-start gap-3">
                                                <IoIosGlobe
                                                    className="text-sky-500"
                                                    size={24}
                                                />
                                                <Text
                                                    as={"h4"}
                                                    className="text-lg font-medium"
                                                >
                                                    Launch anywhere. Sell
                                                    everywhere
                                                </Text>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Text className="text-xs text-sky-700/70 dark:text-sky-300/70 text-left ">
                                                Deploy your solutions across
                                                multiple platforms and reach
                                                customers wherever they are with
                                                our comprehensive launch
                                                strategy.
                                            </Text>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="item-3"
                                        className="bg-fuchsia-50 dark:bg-fuchsia-900/20 px-5 rounded-lg border border-fuchsia-200 dark:border-fuchsia-700"
                                    >
                                        <AccordionTrigger className="hover:no-underline text-fuchsia-700 dark:text-fuchsia-300">
                                            <div className="flex flex-col items-start gap-3">
                                                <RiUserCommunityLine
                                                    className="text-fuchsia-500"
                                                    size={24}
                                                />
                                                <Text
                                                    as={"h4"}
                                                    className="text-lg font-medium"
                                                >
                                                    Diversify and dominate
                                                </Text>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Text className="text-xs text-fuchsia-700/70 dark:text-fuchsia-300/70 text-left ">
                                                Expand your market presence and
                                                establish dominance in your
                                                industry through strategic
                                                diversification and growth
                                                tactics.
                                            </Text>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <Button asChild className="w-fit mt-4">
                                    <Link href="/">Start Here</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center items-end">
                            <Image
                                src="/images/mission-image.png"
                                alt="Mission Image"
                                width={500}
                                height={500}
                                className="rounded-lg mx-auto "
                            />
                        </div>
                    </div>
                </section>
            </Container>
            <section className="bg-slate-50 dark:bg-black/30 w-full flex flex-col justify-center items-center text-center py-10 px-5 rounded-lg mt-10">
                <Container>
                    <Text
                        as={"h6"}
                        className="text-sm font-semibold text-blue-700 "
                    >
                        Your all-in-one IT service partner.
                    </Text>
                    <Text as={"h2"} className="text-3xl font-bold ">
                        Build, launch, and grow — all under one roof.
                    </Text>
                    <Text className=" text-primary/70 text-sm mt-5">
                        From idea to execution, we handle everything.
                    </Text>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 py-10 w-full max-w-5xl mx-auto">
                        <div className=" flex-col col-span-1 md:col-span-2 flex justify-between items-start bg-gradient-to-b from-fuchsia-100 via-fuchsia-200 to-slate-50 border-1 rounded-xs border-fuchsia-200">
                            <Text
                                as={"h4"}
                                className="text-sm text-fuchsia-500 font-medium pt-5 pl-2 max-w-40 text-left"
                            >
                                Custom Dashboard Development
                            </Text>
                            <Image
                                src="/images/dashboard-image.png"
                                alt="Custom Dashboard"
                                width={700}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                        <div className=" flex-col  flex justify-between items-start bg-gradient-to-b from-orange-100 via-orange-200 to-slate-50 border-1 rounded-xs border-orange-200">
                            <Text
                                as={"h4"}
                                className="text-sm text-orange-500 font-medium pt-5 pl-2 max-w-40 text-left"
                            >
                                Grow your brand on Social Media
                            </Text>
                            <Image
                                src="/images/socialmedia-grow-image.png"
                                alt="Social Media Growth"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>

                        <div className=" flex-col  flex justify-between items-start bg-gradient-to-b from-amber-100 via-amber-200 to-slate-50 border-1 rounded-xs border-amber-200">
                            <Text
                                as={"h4"}
                                className="text-sm text-amber-500 font-medium pt-5 pl-2 max-w-40 text-left"
                            >
                                Turn visitors into clients
                            </Text>
                            <Image
                                src="/images/customer-client-image.png"
                                alt="Social Media Growth"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                        <div className=" flex-col col-span-1 md:col-span-2 flex justify-between items-start bg-gradient-to-b from-indigo-100 via-indigo-200 to-slate-50 border-1 rounded-xs border-indigo-200">
                            <Text
                                as={"h4"}
                                className="text-sm text-indigo-500 font-medium pt-5 pl-2 max-w-40 text-left"
                            >
                                Build Custom Web aplication
                            </Text>
                            <Image
                                src="/images/custom-webapplication-image.png"
                                alt="Custom Dashboard"
                                width={500}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <Container className="flex flex-col space-y-3 justify-center items-center py-20">
                <section className="">
                    <Text
                        as={"h2"}
                        className="text-3xl font-bold max-w-md mx-auto"
                    >
                        Everything you need to sell, scale, and succeed
                    </Text>
                    <Image
                        src="/images/down-arrows.svg"
                        alt="Everything You Need"
                        width={1350}
                        height={300}
                        className="rounded-lg md:block hidden px-40"
                    />
                    <div className="max-w-xs md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4">
                        <ColorfulCard
                            className=" aspect-square rounded-lg flex flex-col justify-center items-center m-2"
                            variant="orange"
                        >
                            <Cpu className="bg-orange-200 p-1" size={30} />
                            <Text as={"h4"} className="text-lg font-medium">
                                Ai assistant and models
                            </Text>
                            <Text className="text-xs text-primary/70 ">
                                Smart AI solutions to automate tasks, enhance
                                efficiency, and scale your business operations.
                            </Text>
                        </ColorfulCard>
                        <ColorfulCard
                            className=" aspect-square rounded-lg flex flex-col justify-center items-center m-2"
                            variant="fuchsia"
                        >
                            <Cpu className="bg-fuchsia-200 p-1" size={30} />
                            <Text as={"h4"} className="text-lg font-medium">
                                Complete marketing
                            </Text>
                            <Text className="text-xs text-primary/70 ">
                                End-to-end digital marketing strategies that
                                drive visibility, engagement, and growth.
                            </Text>
                        </ColorfulCard>
                        <ColorfulCard
                            className=" aspect-square rounded-lg flex flex-col justify-center items-center m-2"
                            variant="indigo"
                        >
                            <Cpu className="bg-indigo-200 p-1" size={30} />
                            <Text as={"h4"} className="text-lg font-medium">
                                Custom CRM , Web and App for Your Business
                            </Text>
                            <Text className="text-xs text-primary/70 ">
                                Tailor-made CRM systems to streamline customer
                                management and boost sales.
                            </Text>
                        </ColorfulCard>
                        <ColorfulCard
                            className=" aspect-square rounded-lg flex flex-col justify-center items-center m-2"
                            variant="sky"
                        >
                            <Cpu className="bg-sky-200 p-1" size={30} />
                            <Text as={"h4"} className="text-lg font-medium">
                                Building MVPs
                            </Text>
                            <Text className="text-xs text-primary/70 ">
                                Fast and cost-effective development of Minimum
                                Viable Products to validate your ideas.
                            </Text>
                        </ColorfulCard>
                    </div>
                </section>

                <section className="my-20">
                    <Text
                        as={"h6"}
                        className="text-sm font-semibold text-blue-700 "
                    >
                        Pricing
                    </Text>
                    <Text as={"h2"} className="text-3xl font-bold ">
                        For creators, brands and agencies.
                    </Text>
                    <Text className=" text-primary/70 text-sm mt-5">
                        We offer you different options to make your life easier.
                    </Text>
                    <div className="mt-10 flex justify-center items-center ">
                        <Tabs
                            defaultValue="package"
                            className="w-[400px] flex justify-center items-center"
                        >
                            <TabsList className=" ">
                                <TabsTrigger value="package">
                                    Package
                                </TabsTrigger>
                                <TabsTrigger value="services">
                                    Services
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="package">
                                <div className="flex flex-col lg:flex-row justify-between items-center">
                                    <div>
                                        <Text
                                            as="h4"
                                            className="text-gray-500 "
                                        >
                                            We&apos;re a team of builders,
                                            strategists, and innovators helping
                                            businesses grow with AI, digital
                                            marketing, and technology.
                                        </Text>
                                    </div>
                                    <div></div>
                                </div>
                            </TabsContent>
                            <TabsContent value="services">
                                Change your password here.
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </Container>
        </div>
    );
}
