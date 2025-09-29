"use client";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "../ui/interactive-grid-patterns";

export function InteractiveGridPatternDemo() {
    return (
        <div className="absolute top-0 left-0 -z-10 flex h-[500px] bg-transparent w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
            <InteractiveGridPattern
                className={cn(
                    // A square-like mask with a fade
                    "[mask-image:radial-gradient(farthest-side_at_center,white_50%,transparent)]"
                )}
                width={20}
                height={20}
                squares={[80, 80]}
                squaresClassName="hover:fill-stone-200"
            />
        </div>
    );
}
