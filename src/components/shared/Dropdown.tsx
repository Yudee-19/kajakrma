"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface DropdownItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    iconBg: string;
    iconColor: string;
}

interface DropdownProps {
    label: string;
    items: DropdownItem[];
    sectionTitle?: string;
    viewAllText?: string;
    viewAllHref?: string;
    width?: string;
    columns?: 1 | 2 | 3;
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    items,
    sectionTitle,
    viewAllText = "See all",
    viewAllHref,
    width = "w-[780px]",
    columns = 2,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="flex items-center gap-1 text-sm hover:text-primary/70 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {label}
                <svg
                    className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-zinc-800 p-8 z-50",
                        width
                    )}
                >
                    {sectionTitle && (
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                {sectionTitle}
                            </h3>
                        </div>
                    )}

                    <div
                        className={cn(
                            "grid gap-x-6 gap-y-1",
                            gridCols[columns]
                        )}
                    >
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 group cursor-pointer"
                            >
                                <div
                                    className={cn(
                                        "flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-105",
                                        item.iconBg
                                    )}
                                >
                                    <div className={item.iconColor}>
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {viewAllHref && (
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zinc-800">
                            <Link
                                href={viewAllHref}
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors group"
                            >
                                {viewAllText}
                                <ChevronRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;