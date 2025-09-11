import React from "react";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDown, ArrowDownAZ, ChevronDown } from "lucide-react";
import { ModeToggle } from "../theme-toggle";

const Header = () => {
    return (
        <header className="bg-slate-50 dark:bg-zinc-800 sticky top-0 z-50 ">
            <Container>
                <div className="flex items-center justify-between py-4">
                    <div className="select-none">
                        <Link href="/">
                            <h1 className="font-poppins font-semibold text-xl">
                                KAJ KARMA
                            </h1>
                        </Link>
                    </div>
                    <div className="md:flex items-center justify-between py-4 gap-5 hidden">
                        <ul className=" list-none flex font-inter text-sm  gap-8">
                            {/* <li>
                                <ModeToggle />
                            </li> */}
                            <li>
                                <Link
                                    href="/services"
                                    className="flex gap-2 justify-center items-center"
                                >
                                    Services
                                    <ChevronDown size={15} />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/resources"
                                    className="flex gap-2 justify-center items-center"
                                >
                                    Resources
                                    <ChevronDown size={15} />
                                </Link>
                            </li>

                            <li>
                                <Link href="/projects">Our Projects</Link>
                            </li>
                            <li>
                                <Link href="/about">About us</Link>
                            </li>

                            <li>
                                <Link href="/pricing">Pricing</Link>
                            </li>

                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                        <Button> Start for free</Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
