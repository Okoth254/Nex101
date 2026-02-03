'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SERVICES } from '@/lib/constants';
import styles from './ServicesTeaser.module.css';

export default function ServicesTeaser() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.6, 0.01, 0.05, 0.95] as any,
            },
        },
    };

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Our Solutions
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={styles.card}
                        >
                            <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{service.icon}</span>
                                </div>
                                <h3 className={styles.serviceName}>{service.name}</h3>
                                <div className={styles.arrow}>→</div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <Link href="/services" className={styles.ctaButton}>
                        Explore All Solutions →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
