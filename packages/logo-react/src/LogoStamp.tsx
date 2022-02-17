import { useId, useIntersectionObserver } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { useRef, useState } from "react";

export interface LogoStampProps {
    className?: string;
    id?: string;
    /** Roterer teksten rundt logostempelet første gangen stempelet kommer til syne */
    animated?: boolean;
    /**
     * Beskrivelse av logostempelet tilgjengelig for skjermlesere.
     * Teksten i logostempelet er en path, og ikke tilgjengelig for skjermlesere.
     */
    title?: string;
}

export const LogoStamp = ({
    className,
    id,
    animated = false,
    title = "Fremtind, fra SpareBank 1 og DNB",
}: LogoStampProps): JSX.Element => {
    const uniqueId = useId(id || "jkl-logo-stamp", { generateSuffix: !id });

    const stampRef = useRef<SVGSVGElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [visible, setVisible] = useState(false);

    const onIntersect = (entires: IntersectionObserverEntry[]) => {
        const intersecting = entires.some((entry) => entry.isIntersecting);
        setVisible(intersecting);
        if (intersecting) {
            setHasAnimated(true);
        }
    };
    useIntersectionObserver(stampRef, onIntersect, () => setVisible(true), {
        rootMargin: "50% 0% 0% 0%",
        threshold: 0.5,
    });

    return (
        <svg
            ref={stampRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-labelledby={uniqueId}
            className={cn("jkl-logo-stamp", className, {
                "jkl-logo-stamp--animated": animated,
                "jkl-logo-stamp--rotate": animated && (visible || hasAnimated),
            })}
            role="img"
        >
            <title id={uniqueId}>{title}</title>
            <g className="jkl-logo-stamp__logo">
                <path
                    fill="currentColor"
                    d="M256 177.2L146.4 286.8l8.5 8.4 51.4-51.4 51.4 51.4 8.2-8.1-51.5-51.5 41.9-41.8L357.5 295l8.1-8.2z"
                />
            </g>
            <g className="jkl-logo-stamp__text">
                <path
                    fill="currentColor"
                    d="M121.8 119.1l-20.2-22.3 13-11.8 2.8 3.1-9.8 8.9 6 6.7 8.7-7.9 2.8 3.1-8.7 7.9 8.6 9.5-3.2 2.8zM150.3 96L135 70.1l10.1-6c1-.6 2.1-1 3.2-1.2 1.1-.2 2.2-.2 3.2 0 1.1.2 2.1.7 3 1.4 1 .8 1.9 1.8 2.5 2.9 1 1.4 1.4 3.2 1.2 4.9-.2 1.6-.9 3.2-1.9 4.5L169 85l-4 2.3-11.7-7.9-5.8 3.4 6.5 11-3.7 2.2zM147 67.8l-6.1 3.6 4.6 7.8 5.9-3.5c1.1-.6 1.9-1.5 2.4-2.6.4-1.3.2-2.6-.6-3.7-.5-1.2-1.6-2.1-2.9-2.3-1.2-.1-2.3.1-3.3.7zM186.6 77.3l-9.7-28.5 16.6-5.7 1.3 4-12.5 4.2 2.8 8.2 10.9-3.7 1.3 4-10.9 3.7 2.9 8.5 12.7-4.3 1.4 4-16.8 5.6zM222.4 66.7l-2.7-30 5-.4 13.5 23 8.7-25 5.6-.5 2.7 30-4.3.4-2.1-23-8.4 23.9-3.2.3-12.4-21.3 2 22.3-4.4.3zM282.7 66.3l3.9-25.6-9.4-1.4.6-4.1 23.1 3.5-.6 4.1-9.4-1.4L287 67l-4.3-.7zM314.2 73.5l9.5-28.5 4.1 1.4-9.5 28.5-4.1-1.4zM338.2 82.5l14.7-26.2 4 2.2 3 28.5 11.4-20.4 3.8 2.1L360.5 95l-4-2.2-3-28.6L342 84.7l-3.8-2.2zM377.3 107.4l20.4-22.1 7.9 7.3c1.5 1.3 2.6 2.9 3.5 4.7.8 1.6 1.2 3.4 1.2 5.2 0 1.9-.4 3.7-1.1 5.4-.8 1.9-2 3.7-3.4 5.2-1.4 1.6-3.1 3-5 4-1.6.9-3.4 1.4-5.3 1.6-1.8.1-3.6-.2-5.3-.9-1.9-.8-3.5-1.9-5-3.2l-7.9-7.2zM402.1 95l-4-3.7-14.7 16 4.2 3.9c1.9 1.9 4.5 3.1 7.2 3.1 2.5-.1 5-1.5 7.6-4.2 2.7-2.9 3.9-5.5 3.6-8-.4-2.8-1.7-5.3-3.9-7.1zM421.9 160.1l26.6-14.1 7.7 14.4-2.1 1.1-6.5-12.2-10.4 5.5 5.8 10.9-2.1 1.1-5.8-10.9-12.1 6.4-1.1-2.2zM437.1 192.9l28.8-8.5 3.1 10.4c.3 1 .4 2 .4 3.1-.1 2.1-1.1 4-2.7 5.2-1 .8-2.1 1.3-3.3 1.6-1.7.6-3.6.5-5.3-.2-1.5-.7-2.9-1.8-3.8-3.1L442.7 212l-.8-2.7 11.3-10-2.3-7.7-13.1 3.9-.7-2.6zm29.6 2.3l-2.3-7.7-11.3 3.4 2.2 7.5c.4 1.5 1.3 2.7 2.6 3.6 1.5.8 3.2.9 4.7.3 2-.6 3.3-1.5 3.9-2.9.6-1.4.6-2.9.2-4.2zM446 228.5l30.9 9.2.2 2.5-29.1 13.9-.2-2.7 7.9-3.7-1.1-14.2-8.4-2.4-.2-2.6zm11 5.7l.9 12.4 16.2-7.5-17.1-4.9zM440.7 304.3c.5-2.4 1.8-4.5 3.7-6.1 2-1.6 4.6-2.2 7.2-1.9l-.6 2.3c-2-.1-3.9.5-5.4 1.7-2.5 2.6-3.5 6.4-2.4 9.9.6 1.5 1.9 2.7 3.5 3 1.3.5 2.8.3 4-.3 1.2-.9 2.2-2 2.9-3.3l2.3-4c.9-1.8 2.4-3.3 4.2-4.1 1.6-.7 3.4-.9 5.1-.4 2.3.5 4.2 2.1 5.1 4.2.5 1 .7 2.1.8 3.2.1 1.2 0 2.3-.3 3.4s-.7 2.1-1.4 3c-.6.9-1.4 1.7-2.2 2.4-.9.7-2 1.1-3.1 1.4-1.3.3-2.5.3-3.8.1l.6-2.3c1.8.3 3.6-.2 5-1.2 1.3-1 2.2-2.4 2.5-4 .5-1.6.4-3.3-.2-4.9-.7-1.5-2-2.5-3.6-2.8-1.2-.4-2.5-.3-3.6.2-1.3.7-2.3 1.8-2.9 3.1l-2.5 4.5c-.4.8-.9 1.5-1.5 2.1-.6.7-1.2 1.2-2 1.6-.8.5-1.6.8-2.5.9-1 .1-2 .1-3-.2-1.2-.3-2.3-.8-3.2-1.6-.9-.7-1.5-1.6-2-2.6-.5-1.1-.8-2.3-.8-3.4-.3-1.3-.2-2.6.1-3.9zM431.8 332.4l27 13.2-4.1 8.4c-.6 1.2-1.3 2.2-2.2 3.2-.8.9-1.8 1.6-2.9 2-1.1.5-2.3.7-3.5.6-1.4-.1-2.7-.4-3.9-1-1.2-.6-2.3-1.4-3.3-2.4-.8-.9-1.4-1.9-1.7-3.1-.3-1.2-.4-2.4-.2-3.5.2-1.3.6-2.6 1.1-3.7l3-6.2-10.5-5.1 1.2-2.4zm21 20.2l2.8-5.7-12.3-6-3 6.3c-.9 1.6-1.2 3.5-.7 5.4.6 1.8 2 3.3 3.8 4 1.7 1 3.7 1.1 5.6.4 1.7-1 3.1-2.5 3.8-4.4zM416.1 361.9l16.9 27.4-1.5 2-31-9 1.6-2.2 8.4 2.5 8.6-11.3-4.7-7.4 1.7-2zm4.4 11.6l-7.6 9.9 17.1 5.1-9.5-15zM387.2 395.8l19.5 22.9-8.2 7c-.8.7-1.7 1.2-2.6 1.6-.9.4-1.9.5-2.9.5-1-.1-2.1-.3-3-.8-1.1-.6-2-1.4-2.8-2.3-1.2-1.3-2-3.1-2-4.9 0-1.7.4-3.3 1.3-4.8l-14.4-6.3 2.1-1.8 13.7 6.2 6.1-5.2-8.9-10.4 2.1-1.7zm10 28l6.1-5.2-7.7-9-5.9 5.1c-1.2.9-2 2.3-2.2 3.8-.1 1.7.5 3.3 1.6 4.5 1.4 1.6 2.8 2.4 4.2 2.4 1.4-.2 2.8-.7 3.9-1.6zM355.3 420l14.6 26.3-14.3 7.9-1.1-2 12.1-6.7-5.5-9.9-10.6 5.9-1.1-2 10.6-5.9-5.8-10.3-12.3 6.7-1.1-2 14.5-8zM321.9 436.1l9.1 28.7-9 2.8c-2.1.8-4.3.7-6.4-.2-1.9-.9-3.3-2.7-3.9-4.7-.5-1.4-.5-3 0-4.5.5-1.3 1.2-2.4 2.2-3.4-1.7.1-3.3-.3-4.7-1.1-1.5-.9-2.5-2.3-3-3.9-.8-2.2-.6-4.6.5-6.6 1.2-2 3.2-3.5 5.5-4.1l9.7-3zm-5.1 16.5l6.9-2.2-3.6-11.3-7.1 2.2c-1.7.4-3.2 1.5-4 3-.7 1.4-.8 3-.3 4.5.4 1.6 1.6 2.9 3.1 3.6 1.6.7 3.4.8 5 .2zm4.7 12.7l6.3-2-3.4-10.7-6.3 2c-1.5.4-2.8 1.3-3.6 2.6-.8 1.4-.8 3.1-.2 4.6.4 1.4 1.3 2.6 2.6 3.3 1.4.7 3.1.8 4.6.2zM287.9 445.3l-8.5 31.1-2.5.2-14.6-28.8 2.7-.3 3.9 7.8L283 454l2.2-8.4 2.7-.3zm-5.5 11.1l-12.4 1.2 7.9 16 4.5-17.2zM243.4 447.5l-3.8 29.8-2.7-.4-15-28.3-3.3 26-2.5-.3 3.9-29.9 2.6.3 15 28.4 3.3-26 2.5.4zM198.7 439l-10.4 28.2-2.4-.9 5.9-16.1-20.1 10.8-2.9-1.1 15.1-8-6.8-21 2.9 1.1 6 18.9 7.1-3.8 3.4-9.1 2.2 1zM136.9 406l-14.4 18.2 4.9 3.9-1.2 1.5c-.9-.7-1.8-1.4-2.8-2-.6-.4-1.3-.6-2-.7-.6 0-1.3.2-1.8.6-.7.5-1.4 1.1-2 1.8L116 428l18.8-23.7 2.1 1.7zM95.3 359.2c1.1 1.7 1.9 3.6 2.2 5.6.3 1.9.3 3.8-.2 5.7-.5 1.9-1.3 3.7-2.5 5.3-1.3 1.7-2.9 3.2-4.7 4.4-1.8 1.2-3.7 2-5.8 2.4-1.9.4-3.8.4-5.7 0-1.9-.4-3.6-1.1-5.2-2.2-1.7-1.2-3.1-2.6-4.2-4.3-1.1-1.7-1.9-3.6-2.2-5.6-.3-1.9-.3-3.8.1-5.6.4-1.9 1.2-3.6 2.4-5.2 1.2-1.7 2.8-3.2 4.6-4.3 1.8-1.2 3.8-2 5.9-2.5 1.9-.4 3.9-.4 5.8-.1 1.9.4 3.7 1.1 5.2 2.2 1.9 1 3.3 2.4 4.3 4.2zm-2 1.3c-.9-1.4-2-2.6-3.3-3.5-1.3-.9-2.8-1.6-4.3-1.9-1.6-.3-3.3-.3-4.9.1-1.8.4-3.6 1.2-5.2 2.2-1.6 1-2.9 2.2-4 3.7-1 1.3-1.6 2.8-2 4.4-.3 1.5-.3 3.1 0 4.6.3 1.6.9 3.1 1.8 4.5s2 2.6 3.3 3.6c1.2.9 2.7 1.6 4.2 1.9 1.6.3 3.2.3 4.8 0 1.8-.4 3.6-1.1 5.1-2.2 1.6-1 3-2.3 4.2-3.8 1-1.3 1.7-2.8 2.1-4.4.4-1.5.4-3.1.1-4.6-.3-1.7-1-3.3-1.9-4.6zM75.3 317.8c.6 1.8.9 3.8.8 5.7-.1 1.8-.6 3.6-1.5 5.3-.9 1.7-2.1 3.2-3.6 4.4-1.7 1.4-3.6 2.4-5.6 3.1-2 .7-4.2 1.1-6.4 1-1.9 0-3.8-.5-5.6-1.2-1.7-.8-3.2-1.9-4.5-3.2-1.3-1.5-2.3-3.2-2.9-5.1-.4-1.2-.7-2.5-.7-3.8-.1-1.2 0-2.5.4-3.7.3-1.2.8-2.3 1.5-3.3.7-1.1 1.7-2 2.8-2.6l.8 2.3c-1.5 1.1-2.5 2.7-2.9 4.5-.4 1.9-.2 3.9.5 5.8.5 1.4 1.3 2.8 2.2 4 1 1.2 2.2 2.1 3.6 2.8 1.5.7 3.1 1.1 4.7 1.1 1.9.1 3.8-.3 5.7-.9 1.8-.6 3.4-1.5 4.9-2.6 1.3-1 2.3-2.2 3.1-3.6.7-1.3 1.1-2.8 1.2-4.3.1-1.6-.2-3.2-.7-4.7-.4-1.2-1-2.2-1.8-3.2s-1.7-1.8-2.8-2.3c-1.2-.6-2.5-.9-3.8-1-1.6-.1-3.1.2-4.6.7l-1.1.4 3 8.9-2.2.8-3.9-11.3 14.8-5.1.6 1.9-5.7 2.5c2.2 0 4.3.8 6 2.1 1.8.9 3.1 2.6 3.7 4.6zM64.3 261.5l-30.1-.8.3-9.8c0-1.9.4-3.8 1.2-5.6.7-1.6 1.8-3.1 3.2-4.2 1.4-1.2 3.1-2.1 4.8-2.6 2-.6 4.1-.9 6.2-.8 2.1 0 4.3.4 6.3 1.1 1.7.6 3.3 1.6 4.7 2.8 1.3 1.2 2.2 2.7 2.9 4.3.7 1.8 1 3.8.9 5.8l-.4 9.8zm-27.5-9.9l-.2 6.6 25.4.7.2-6.9c.1-3.6-.9-6.4-3-8.5s-5.2-3.1-9.4-3.3-7.5.9-9.6 2.9c-2.3 2.3-3.5 5.4-3.4 8.5zM67.8 218.5l-29.1-7.7.7-2.6 30-11.1-25.3-6.7.6-2.4 29.1 7.7-.7 2.6L43 209.5l25.4 6.7-.6 2.3zM82.2 175l-26.7-13.9 4.3-8.4c.9-2 2.6-3.5 4.6-4.4 2-.7 4.3-.5 6.1.6 1.4.7 2.5 1.8 3.1 3.2.6 1.2.9 2.6.8 4 1.1-1.2 2.6-2.1 4.2-2.5 1.6-.4 3.4-.2 4.8.7 2.1 1 3.6 2.8 4.3 5 .6 2.3.2 4.7-1 6.8l-4.5 8.9zm-20.3-21l-3 5.8 10 5.2 3.1-5.9c.8-1.3 1-2.9.7-4.4-.5-1.6-1.6-2.8-3.1-3.4-1.3-.7-2.8-.9-4.2-.5-1.6.5-2.9 1.7-3.5 3.2zm12.3 5.7l-3.4 6.4 10.5 5.5 3.5-6.6c.9-1.5 1.2-3.3.7-5-.5-1.5-1.6-2.7-3-3.4-1.4-.8-3.2-1-4.7-.4-1.6.7-2.9 1.9-3.6 3.5z"
                />
            </g>
        </svg>
    );
};
