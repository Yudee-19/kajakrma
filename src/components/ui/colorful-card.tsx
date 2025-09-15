import { cn } from "@/lib/utils";
import React from "react";

const ColorfulCard = ({
    className,
    children,
    variant = "sky",
}: {
    className?: string;
    children: React.ReactNode;
    variant?: "sky" | "fuchsia" | "lime" | "orange" | "rose" | "indigo";
}) => {
    const colorVariants = {
        sky: "bg-sky-50 ",
        fuchsia: "bg-fuchsia-50",
        lime: "bg-lime-50 ",
        orange: "bg-orange-50 ",
        rose: "bg-rose-50",
        indigo: "bg-indigo-50",
    };

    return (
        <div
            className={cn(
                `rounded-full my-1 hover:translate-y-[-3px] py-2.5 px-3 flex justify-between items-center gap-2 transition-all duration-500 text-primary dark:text-background text-xs `,
                colorVariants[variant],
                className
            )}
        >
            {children}
        </div>
    );
};

export default ColorfulCard;
