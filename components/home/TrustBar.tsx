'use client';

import Link from 'next/link';
import Image from 'next/image';
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
                {/* Client Logos Grid */}
                <div className={styles.logoGrid}>
                    {[
                        { src: "/assets/clients/client-1.png", alt: "DoubleU Tech Biz" },
                        { src: "/assets/clients/client-2.jpg", alt: "Eastview Hospital" },
                        { src: "/assets/clients/client-3.png", alt: "Eastview Hospital Icon" },
                        { src: "/assets/clients/client-4.png", alt: "Neo Grace Medical Centre" },
                        { src: "/assets/clients/client-5.png", alt: "Mental Health Reality Hub" },
                        { src: "/assets/clients/client-6.png", alt: "Alterfibre" },
                        { src: "/assets/clients/client-7.png", alt: "Ashnetworks" },
                        { src: "/assets/clients/client-8.png", alt: "Activeboard" },
                        { src: "/assets/clients/client-9.png", alt: "Bilkheir Travel" },
                        { src: "/assets/clients/client-10.png", alt: "Capital Logo" },
                        { src: "/assets/clients/client-11.png", alt: "Roylen Clinic" },
                        { src: "/assets/clients/client-12.png", alt: "Willary" },
                        { src: "/assets/clients/client-13.png", alt: "Zenith" },
                    ].map((logo, i) => (
                        <motion.div
                            key={i}
                            className={styles.logoCard}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className={styles.logoImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
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
