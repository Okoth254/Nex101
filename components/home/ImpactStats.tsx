'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { IMPACT_STATS } from '@/lib/constants';
import styles from './ImpactStats.module.css';

interface StatCardProps {
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
}

function StatCard({ value, label, suffix = '+', delay = 0 }: StatCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const count = useMotionValue(0);
    const rounded = useSpring(count, { damping: 50, stiffness: 100 });

    useEffect(() => {
        if (isInView) {
            count.set(value);
        }
    }, [isInView, value, count]);

    useEffect(() => {
        const unsubscribe = rounded.on('change', (latest) => {
            if (ref.current) {
                (ref.current as HTMLElement).textContent = Math.round(latest) + suffix;
            }
        });
        return unsubscribe;
    }, [rounded, suffix]);

    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            <div ref={ref} className={styles.value}>
                0{suffix}
            </div>
            <div className={styles.label}>{label}</div>
        </motion.div>
    );
}

export default function ImpactStats() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Our Impact in Numbers
                </motion.h2>

                <div className={styles.grid}>
                    <StatCard
                        value={IMPACT_STATS.brandsLaunched}
                        label="Brands Launched"
                        delay={0.1}
                    />
                    <StatCard
                        value={IMPACT_STATS.partnerships}
                        label="Long-term Partnerships"
                        delay={0.2}
                    />
                    <StatCard
                        value={IMPACT_STATS.companyProfiles}
                        label="Company Profiles Designed"
                        delay={0.3}
                    />
                    <StatCard
                        value={IMPACT_STATS.businessesTransformed}
                        label="Businesses Transformed"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
