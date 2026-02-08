'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IMPACT_STATS } from '@/lib/constants';
import { CLIENTS } from '@/lib/client-data';
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

                {/* Infinite Marquee */}
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrack}>
                        {/* Duplicate list 4 times to ensure smooth infinite scroll even on wide screens */}
                        {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                            <div key={`${client.id}-${i}`} className={styles.logoCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className={styles.logoImage}
                                        sizes="(max-width: 768px) 150px, 200px"
                                        unoptimized // Since we might use placeholder assets initially
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.p className={styles.subtext} variants={itemVariants}>
                    Join leading businesses, organizations, and institutions who trust <span className="wordmark">NEX101</span>
                </motion.p>
            </motion.div>
        </section>
    );
}
