// components/Header.tsx
import React from "react";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import Image from "next/image";

import Link from "next/link";
import ServicesDropdown from "../pages/servicesmenu/servicesdropdown";
import ResourcesDropdown from "../pages/Resource/ResourcesDropdown";

const Header = () => {
  return (
    <header className="bg-slate-50 dark:bg-zinc-800 sticky top-0 z-50 border-b border-gray-100 dark:border-zinc-700">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="select-none">
            <Link href="/">
              {/* <h1 className="font-poppins font-semibold text-xl text-gray-900 dark:text-white">
                KAJ KARMA
              </h1> */}
              <Image
                src="/images/kajkarma-logo.png"
                alt="Company logo"
                width={150}
                height={40}
              />
            </Link>
          </div>
          <div className="md:flex items-center justify-between gap-5 hidden">
            <ul className="list-none flex font-inter text-sm gap-8 items-center">
              <li>
                <ServicesDropdown />
              </li>

              {/* <li>
                               <ResourcesDropdown/>
                            </li>

                            <li>
                                <Link
                                    href="/projects"
                                    className="hover:text-primary/70 transition-colors"
                                >
                                    Our Projects
                                </Link>
                            </li> */}

              <li>
                <Link
                  href="/about"
                  className="hover:text-primary/70 transition-colors"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  href="/Contact"
                  className="hover:text-primary/70 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Button className="h-10 px-6 rounded-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100">
              <Link href="/Contact">Lets Talk</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
