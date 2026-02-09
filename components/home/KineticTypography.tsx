'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './KineticTypography.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function KineticTypography() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const container = containerRef.current;
        const textElement = textRef.current;
        const chars = textElement.querySelectorAll(`.${styles.char}`);

        // 1. MOUSE REPULSION LOGIC
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            chars.forEach((char) => {
                const rect = (char as HTMLElement).getBoundingClientRect();
                const charCenterX = rect.left + rect.width / 2;
                const charCenterY = rect.top + rect.height / 2;

                const distX = mouseX - charCenterX;
                const distY = mouseY - charCenterY;
                const distance = Math.sqrt(distX * distX + distY * distY);

                const radius = 300;
                const maxPush = 80;

                if (distance < radius) {
                    const power = 1 - (distance / radius);
                    const moveX = -(distX / distance) * maxPush * power;
                    const moveY = -(distY / distance) * maxPush * power;

                    gsap.to(char, {
                        x: moveX,
                        y: moveY,
                        duration: 0.4,
                        ease: "power2.out",
                        overwrite: "auto"
                    });
                } else {
                    gsap.to(char, {
                        x: 0,
                        y: 0,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.3)",
                        overwrite: "auto"
                    });
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // 2. SCROLL EXPLOSION LOGIC
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
            }
        });

        tl.to(chars, {
            x: () => (Math.random() - 0.5) * window.innerWidth * 1.5,
            y: () => (Math.random() - 0.5) * window.innerHeight * 1.5,
            rotation: () => Math.random() * 360,
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "power2.inOut",
            stagger: {
                amount: 0.2,
                from: "center"
            }
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const text = "next101";

    return (
        <div ref={containerRef} className={styles.heroSection}>
            <div ref={textRef} className={styles.kineticText}>
                {text.split('').map((char, index) => (
                    <span key={index} className={styles.char}>{char}</span>
                ))}
            </div>
            <div className={styles.instruction}>SCROLL TO EXPLODE</div>
        </div>
    );
}
