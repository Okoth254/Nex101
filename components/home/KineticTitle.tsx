'use client';

import { motion } from 'framer-motion';
import styles from './KineticTitle.module.css';

/**
 * KineticTitle Component
 * 
 * Animated H1 title where letters assemble from fragments
 */
export default function KineticTitle() {
    const title = "NEX101";
    const subtitle = "A Future-Focused Creative Hub";

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
            scale: 0.5,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.6, 0.01, 0.05, 0.95] as any,
            },
        }),
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.8,
                duration: 0.6,
            },
        },
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title.split('').map((letter, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        className={styles.letter}
                    >
                        {letter}
                    </motion.span>
                ))}
            </h1>
            <motion.p
                className={styles.subtitle}
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
            >
                {subtitle}
            </motion.p>
            <motion.p
                className={styles.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                Pushing Brands Beyond the Expected Level
            </motion.p>
        </div>
    );
}
