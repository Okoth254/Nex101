'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Hero3D.module.css';

/**
 * Hero3D Component
 * 
 * This component will integrate a Spline 3D scene.
 * For now, it uses a placeholder with mouse-tracking animation.
 * 
 * TODO: Replace with actual Spline scene when 3D asset is ready
 */
export default function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
        stiffness: 150,
        damping: 20,
    });

    // Generate particles only on client side to avoid hydration mismatch
    const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

    useEffect(() => {
        // Generate particles after component mounts
        const newParticles = Array.from({ length: 20 }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${3 + Math.random() * 4}s`,
        }));
        setParticles(newParticles);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const x = (e.clientX - centerX) / (rect.width / 2);
            const y = (e.clientY - centerY) / (rect.height / 2);

            mouseX.set(x * 20);
            mouseY.set(-y * 20);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={containerRef} className={styles.container}>
            <motion.div
                className={styles.scene}
                style={{
                    rotateX,
                    rotateY,
                }}
            >
                {/* Placeholder 3D Abstract */}
                <div className={styles.abstract}>
                    <div className={styles.core}></div>
                    <div className={styles.ring1}></div>
                    <div className={styles.ring2}></div>
                    <div className={styles.ring3}></div>
                </div>
            </motion.div>

            {/* Ambient particles */}
            <div className={styles.particles}>
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
