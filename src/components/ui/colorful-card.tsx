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
        sky: "bg-sky-100 ",
        fuchsia: "bg-fuchsia-100",
        lime: "bg-lime-100 ",
        orange: "bg-orange-100 ",
        rose: "bg-rose-100",
        indigo: "bg-indigo-100",
    };

    return (
        <div
            className={cn(
                `rounded-full my-1  py-2.5 px-3 flex justify-between items-center gap-2 transition-all duration-500 text-primary dark:text-background text-xs `,
                colorVariants[variant],
                className
            )}
        >
            {children}
        </div>
    );
};

export default ColorfulCard;
