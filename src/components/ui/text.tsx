import { cn } from "@/lib/utils";
import React from "react";

const Text = ({
    as: Tag = "p",
    className,
    children,
    ...props
}: {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <Tag
            className={cn(
                "font-inter text-foreground  text-lg text-center",
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    );
};
export default Text;
