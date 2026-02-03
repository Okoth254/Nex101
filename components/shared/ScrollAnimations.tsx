'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // Parallax effect for hero sections
        const heroSections = document.querySelectorAll('[data-parallax="hero"]');
        heroSections.forEach((section) => {
            gsap.to(section, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        });

        // Fade in on scroll
        const fadeElements = document.querySelectorAll('[data-scroll="fade"]');
        fadeElements.forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        // Scale on scroll
        const scaleElements = document.querySelectorAll('[data-scroll="scale"]');
        scaleElements.forEach((element) => {
            gsap.from(element, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        // Slide in from left
        const slideLeftElements = document.querySelectorAll('[data-scroll="slide-left"]');
        slideLeftElements.forEach((element) => {
            gsap.from(element, {
                x: -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        // Slide in from right
        const slideRightElements = document.querySelectorAll('[data-scroll="slide-right"]');
        slideRightElements.forEach((element) => {
            gsap.from(element, {
                x: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return null;
}
