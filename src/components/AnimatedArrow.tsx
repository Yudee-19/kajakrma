"use client";
import React from "react";
import {
    useScroll,
    motion,
    useTransform,
    useMotionValueEvent,
} from "motion/react";
import { useRef } from "react";
const Arrow = () => {
    return (
        <div className="w-full flex justify-center relative h-[100vh] mt-10">
            <AnimatedArrow />
        </div>
    );
};
const AnimatedArrow = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const pathLengthAnimate = useTransform(scrollYProgress, [0, 1], [0, 1]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    });
    return (
        <div ref={ref} className="h-full">
            <svg
                className="sticky top-0 w-full"
                width="9"
                height="170"
                viewBox="0 0 9 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M4.14645 169.355C4.34171 169.55 4.65829 169.55 4.85355 169.355L8.03553 166.173C8.2308 165.978 8.2308 165.661 8.03553 165.466C7.84027 165.271 7.52369 165.271 7.32843 165.466L4.5 168.294L1.67157 165.466C1.47631 165.271 1.15973 165.271 0.964466 165.466C0.769204 165.661 0.769204 165.978 0.964466 166.173L4.14645 169.355ZM4.5 -0.00146484L4 -0.00146484V169.001H4.5H5V-0.00146484L4.5 -0.00146484Z"
                    fill="black"
                    // strokeWidth="100"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengthAnimate }}
                    transition={{ duration: 0, ease: "linear" }}
                />
            </svg>
        </div>
    );
};

export default Arrow;
