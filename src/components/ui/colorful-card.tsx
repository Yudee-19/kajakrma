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
        sky: "bg-sky-100 hover:bg-sky-200 shadow-[5px_5px_0px_rgba(8,_112,_184,_0.7)] hover:shadow-[10px_10px_0px_rgba(8,_112,_184,_0.7)]",
        fuchsia:
            "bg-fuchsia-100 hover:bg-fuchsia-200 shadow-[5px_5px_0px_rgba(199,_21,_133,_0.7)] hover:shadow-[10px_10px_0px_rgba(199,_21,_133,_0.7)]",
        lime: "bg-lime-100 hover:bg-lime-200 shadow-[5px_5px_0px_rgba(132,_204,_22,_0.7)] hover:shadow-[10px_10px_0px_rgba(132,_204,_22,_0.7)]",
        orange: "bg-orange-100 hover:bg-orange-200 shadow-[5px_5px_0px_rgba(255,_159,_28,_0.7)] hover:shadow-[10px_10px_0px_rgba(255,_159,_28,_0.7)]",
        rose: "bg-rose-100 hover:bg-rose-200 shadow-[5px_5px_0px_rgba(255,_38,_74,_0.7)] hover:shadow-[10px_10px_0px_rgba(255,_38,_74,_0.7)]",
        indigo: "bg-indigo-100 hover:bg-indigo-200 shadow-[5px_5px_0px_rgba(75,_85,_210,_0.7)] hover:shadow-[10px_10px_0px_rgba(75,_85,_210,_0.7)]",
    };

    return (
        <div
            className={cn(
                `rounded-full my-1 py-2.5 px-3 flex justify-between items-center gap-2 transition-all duration-500 text-primary dark:text-background `,
                colorVariants[variant],
                className
            )}
        >
            {children}
        </div>
    );
};

export default ColorfulCard;
