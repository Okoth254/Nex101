// Animation configuration constants for consistent timing across the app

export const ANIMATION_DURATIONS = {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    verySlow: 1.0,
} as const;

export const ANIMATION_EASINGS = {
    smooth: [0.6, 0.01, 0.05, 0.95],
    spring: [0.68, -0.55, 0.265, 1.55],
    easeOut: [0.16, 1, 0.3, 1],
    easeIn: [0.7, 0, 0.84, 0],
} as const;

// Framer Motion variants for common animations
export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: ANIMATION_DURATIONS.normal,
            ease: ANIMATION_EASINGS.smooth,
        },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: ANIMATION_DURATIONS.normal,
        },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: ANIMATION_DURATIONS.normal,
            ease: ANIMATION_EASINGS.spring,
        },
    },
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: ANIMATION_DURATIONS.normal,
            ease: ANIMATION_EASINGS.smooth,
        },
    },
};

export const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: ANIMATION_DURATIONS.normal,
            ease: ANIMATION_EASINGS.smooth,
        },
    },
};

// Stagger children animation
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Magnetic button effect
export const magneticVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

// Liquid button transition
export const liquidTransition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
};
