"use client";
import React from "react";
import * as motion from "motion/react-client";

export function TextAnimation({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const textVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const charVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: () => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
            filter: "blur(0px)",
        }),
    };

    return (
        <motion.div
            className={className}
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    variants={charVariants}
                    custom={index}
                    className="inline-block whitespace-pre flex-nowrap"
                    style={{ willChange: "transform, opacity, filter" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}
