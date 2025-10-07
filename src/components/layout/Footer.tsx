import React from "react";
import Container from "../shared/Container";
import ColorfulCard from "../ui/colorful-card";
import Text from "../ui/text";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    ChevronRight,
    Github,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiPinterestLogo } from "react-icons/pi";

const Footer = () => {
    return (
        <section>
            <Container className="max-w-6xl">
                <footer>
                    <div className="w-full flex flex-col justify-center items-center py-10">
                        <div className="w-full">
                            <ColorfulCard
                                variant="fuchsia"
                                className="py-5 px-10  w-full flex flex-col md:flex-row justify-between items-center gap-5 bg-gradient-to-b from-rose-50 via-rose-100 to-rose-50 rounded-none rounded-t-lg mb-0"
                            >
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <Text
                                        as="h2"
                                        className="text-3xl font-bold text-left"
                                    >
                                        Create build and Sell
                                    </Text>
                                    <Text className="text-sm text-primary/70 text-left max-w-sm">
                                        Ready to achieve more?
                                        <br /> Connect with us and start your
                                        digital empire.
                                    </Text>
                                    <Button asChild className="h-10">
                                        <Link href="/">
                                            Build here
                                            <ChevronRight
                                                size={5}
                                                className="bg-secondary rounded-[2px] text-primary"
                                            />
                                        </Link>
                                    </Button>
                                </div>
                                <div>
                                    <ColorfulCard
                                        variant="fuchsia"
                                        className="flex justify-around items-center border-1 border-black py-1 rounded-md rotate-6 gap-2 px-5"
                                    >
                                        <Github size={30} />
                                        <div className="flex flex-col justify-between items-start">
                                            <Text
                                                as="h5"
                                                className="text-lg font-semibold"
                                            >
                                                GitHub
                                            </Text>
                                            <Text className="text-xs text-primary/70 max-w-[220px] text-left">
                                                GitHub enables collaborative
                                                coding and seamless version
                                                control.{" "}
                                            </Text>
                                        </div>
                                    </ColorfulCard>
                                    <ColorfulCard
                                        variant="lime"
                                        className="flex justify-around items-center border-1 border-black py-1 bg-cyan-100 rounded-md -rotate-3 gap-2 px-5"
                                    >
                                        <TbBrandGoogleAnalytics size={30} />
                                        <div className="flex flex-col justify-between items-start">
                                            <Text
                                                as="h5"
                                                className="text-lg font-semibold"
                                            >
                                                Google
                                            </Text>
                                            <Text className="text-xs text-primary/70 max-w-[220px] text-left">
                                                Bring together your marketing
                                                tools and invoice data.
                                            </Text>
                                        </div>
                                    </ColorfulCard>
                                    <ColorfulCard
                                        variant="lime"
                                        className="flex justify-around items-center border-1 border-black py-1  rounded-md rotate-6 gap-2 px-5"
                                    >
                                        <Github size={30} />
                                        <div className="flex flex-col justify-between items-start">
                                            <Text
                                                as="h5"
                                                className="text-lg font-semibold"
                                            >
                                                OpenAI
                                            </Text>
                                            <Text className="text-xs text-primary/70 max-w-[220px] text-left">
                                                OpenAI creates advanced AI to
                                                power smarter applications
                                            </Text>
                                        </div>
                                    </ColorfulCard>
                                    <ColorfulCard
                                        variant="indigo"
                                        className="flex justify-around items-center border-1 border-black py-1  rounded-md rotate-3 gap-2 px-5"
                                    >
                                        <Github size={30} />
                                        <div className="flex flex-col justify-between items-start">
                                            <Text
                                                as="h5"
                                                className="text-lg font-semibold"
                                            >
                                                AWS
                                            </Text>
                                            <Text className="text-xs text-primary/70 max-w-[220px] text-left">
                                                AWS powers scalable, secure
                                                cloud solutions for every
                                                business.
                                            </Text>
                                        </div>
                                    </ColorfulCard>
                                </div>
                            </ColorfulCard>
                        </div>
                        <div className="w-full">
    <ColorfulCard
        variant="sky"
        className="py-13 px-10 w-full flex flex-col md:flex-row justify-between items-center gap-5 bg-sky-100 rounded-none rounded-b-lg mt-0"
    >
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10">
            {/* LEFT SECTION */}
            <div className="flex flex-col items-start justify-between gap-2 w-1/3">
                <Text as="h3" className="text-lg font-semibold">
                    KAJ KARMA
                </Text>
                <Text as="h2" className="text-3xl font-semibold text-left">
                    Where Ideas <br /> become impact.
                </Text>

                {/* SOCIAL MEDIA ICONS */}
                <div className="flex justify-between items-center gap-2">
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin
                            size={20}
                            className="bg-white rounded-[2px] text-primary p-[2px] hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Youtube
                            size={20}
                            className="bg-white rounded-[2px] text-primary p-[2px] hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram
                            size={18}
                            className="bg-white rounded-[2px] text-primary p-[2px] hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                    <a
                        href="https://www.pinterest.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <PiPinterestLogo
                            size={20}
                            className="bg-white rounded-[2px] text-primary p-[2px] hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                </div>

                <Button
                    variant={"outline"}
                    className="rounded-xs w-full py-1 border-1 border-primary"
                >
                    Sign-up Now
                </Button>
                <Button className="rounded-xs w-full py-1">
                    Subscribe
                </Button>
            </div>

            {/* RIGHT SECTION (LINKS GRID) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                {/* Pages Column */}
                <div>
                    <Text as="h4" className="text-lg text-left font-semibold mb-4">
                        Pages
                    </Text>
                    <ul className="space-y-2">
                        <li><Link href="/services" className="text-sm text-primary/70 hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/projects" className="text-sm text-primary/70 hover:text-primary transition-colors">Our projects</Link></li>
                        <li><Link href="/about" className="text-sm text-primary/70 hover:text-primary transition-colors">About us</Link></li>
                        <li><Link href="/pricing" className="text-sm text-primary/70 hover:text-primary transition-colors">Pricing</Link></li>
                        <li><Link href="/help" className="text-sm text-primary/70 hover:text-primary transition-colors">Help center</Link></li>
                    </ul>
                </div>

                {/* Resources Column */}
                <div>
                    <Text as="h4" className="text-lg text-left font-semibold mb-4">
                        Resources
                    </Text>
                    <ul className="space-y-2">
                        <li><Link href="/blog" className="text-sm text-primary/70 hover:text-primary transition-colors">Our blog</Link></li>
                        <li><Link href="/career" className="text-sm text-primary/70 hover:text-primary transition-colors">Career</Link></li>
                        <li><Link href="/lorem-ipsum" className="text-sm text-primary/70 hover:text-primary transition-colors">Lorem Ipsum</Link></li>
                        <li><Link href="/help" className="text-sm text-primary/70 hover:text-primary transition-colors">Help center</Link></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div>
                    <Text as="h4" className="text-lg text-left font-semibold mb-4">
                        Legal
                    </Text>
                    <ul className="space-y-2">
                        <li><Link href="/privacy" className="text-sm text-primary/70 hover:text-primary transition-colors">Privacy policy</Link></li>
                        <li><Link href="/terms" className="text-sm text-primary/70 hover:text-primary transition-colors">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </ColorfulCard>
</div>

                    </div>
                </footer>
            </Container>
            <div className="w-full bg-sky-100 h-10 mb-5">
                <Container className="max-w-6xl">
                    <Text as="h5" className="text-left text-xs pt-2">
                        2025 Kajkarma, All rights reserved
                    </Text>
                </Container>
            </div>
        </section>
    );
};

export default Footer;
