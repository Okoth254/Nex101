'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { IMPACT_STATS } from '@/lib/constants';
import styles from './ImpactOverview.module.css';

export default function ImpactOverview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const stats = [
        { value: IMPACT_STATS.brandsLaunched, label: 'Brands Created & Launched', suffix: '+' },
        { value: IMPACT_STATS.partnerships, label: 'Long-term Creative Partnerships', suffix: '' },
        { value: IMPACT_STATS.socialAccounts, label: 'Social Media Accounts Managed', suffix: '' },
        { value: IMPACT_STATS.companyProfiles, label: 'Company Profiles Designed', suffix: '+' },
        { value: IMPACT_STATS.executiveReports, label: 'Executive Reports Designed', suffix: '+' },
        { value: IMPACT_STATS.businessesTransformed, label: 'Businesses Transformed', suffix: '' },
        { value: IMPACT_STATS.largeScaleEvents, label: 'Large-scale Events (Full Branding)', suffix: '' },
    ];

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Our Track Record
                </motion.h2>

                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface StatCardProps {
    value: number;
    label: string;
    suffix: string;
    delay: number;
}

function StatCard({ value, label, suffix, delay }: StatCardProps) {
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            <div ref={ref} className={styles.value}>
                0{suffix}
            </div>
            <div className={styles.label}>{label}</div>
        </motion.div>
    );
}
