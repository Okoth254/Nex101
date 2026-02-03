'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IMPACT_STATS } from '@/lib/constants';
import styles from './TrustBar.module.css';

export default function TrustBar() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section ref={ref} className={styles.section}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 className={styles.heading} variants={itemVariants}>
                    Trusted by {IMPACT_STATS.brandsLaunched}+ Brands Across Africa
                </motion.h2>

                {/* Logo placeholders with pulse effect */}
                <div className={styles.logoGrid}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className={styles.logoCard}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={styles.logoPlaceholder}>
                                <span>Client {i + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p className={styles.subtext} variants={itemVariants}>
                    Join leading businesses, organizations, and institutions who trust NEX101
                </motion.p>
            </motion.div>
        </section>
    );
}
