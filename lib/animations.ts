import { Variants } from "framer-motion";

/** Fade up — used for text blocks sliding in from below */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

/** Simple fade in — used for subtle reveals */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

/** Fade + scale in — used for cards/icons */
export const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

/** Slide down — used for the header */
export const slideDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

/** Stagger container — wraps children so they animate one-by-one */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

/** Stagger container with longer delay — for icon grids */
export const staggerContainerSlow: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        },
    },
};

/** About section specific: Mask reveal from the side */
export const maskReveal: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
        clipPath: "inset(0 0% 0 0)",
        transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
    },
};

/** About section specific: Skew fade up reveal */
export const skewFadeUp: Variants = {
    hidden: { opacity: 0, y: 40, skewY: 7 },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

/** About section specific: Title tracking (letter-spacing) reveal */
export const trackingReveal: Variants = {
    hidden: { opacity: 0, letterSpacing: "-0.05em" },
    visible: {
        opacity: 1,
        letterSpacing: "0em",
        transition: { duration: 1, ease: "easeOut" },
    },
};

/** Mature/Professional: Subtle fade up with minimal movement */
export const matureFade: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
};

/** Mature/Professional: Clean smooth fade for images */
export const matureReveal: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
    },
};
