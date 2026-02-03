'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import styles from './CTASection.module.css';

export default function CTASection() {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!buttonRef.current) return;

            const rect = buttonRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            // Magnetic effect within 150px
            if (distance < 150) {
                mouseX.set(distanceX * 0.3);
                mouseY.set(distanceY * 0.3);
            } else {
                mouseX.set(0);
                mouseY.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Ready to Push Your Brand Beyond the Expected?
                </motion.h2>

                <motion.p
                    className={styles.subtext}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Let's build something extraordinary together
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        ref={buttonRef}
                        href="/contact"
                        className={styles.ctaButton}
                    >
                        <motion.span
                            style={{ x, y }}
                            className={styles.buttonContent}
                        >
                            Start Your Journey
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
