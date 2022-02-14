import { useEffect, useState } from "react";
import { addMediaQueryListener, getInitialMediaQueryMatch } from "../mediaQueryUtils";

export type ColorScheme = "light" | "dark";
type BrowserPreferences = {
    prefersReducedMotion: boolean;
    prefersColorScheme: ColorScheme;
};

const PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const PREFERS_LIGHT_COLOR_SCHEME = "(prefers-color-scheme: light)";

export const useBrowserPreferences = (): BrowserPreferences => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialMediaQueryMatch(PREFERS_REDUCED_MOTION));
    const [prefersColorScheme, setPrefersColorScheme] = useState<ColorScheme>(
        getInitialMediaQueryMatch(PREFERS_LIGHT_COLOR_SCHEME) ? "light" : "dark",
    );

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia) {
            addMediaQueryListener(window.matchMedia(PREFERS_REDUCED_MOTION), (e) => {
                setPrefersReducedMotion(e.matches);
            });

            addMediaQueryListener(window.matchMedia(PREFERS_LIGHT_COLOR_SCHEME), (e) => {
                setPrefersColorScheme(e.matches ? "light" : "dark");
            });
        }
    }, []);

    return { prefersReducedMotion, prefersColorScheme };
};
