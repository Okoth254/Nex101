'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Pipeline3D from '@/components/services/Pipeline3D';
import { SERVICES } from '@/lib/constants';
import styles from './page.module.css';

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <motion.h1
                    className={`${styles.title} font-heavy`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Solutions That Solve Real Business Problems
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Strategic creativity for startups, SMEs, and corporate entities
                </motion.p>
            </section>

            {/* 3D Pipeline */}
            <Pipeline3D />

            {/* Services Grid */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Our Solutions</h2>

                    <div className={styles.grid}>
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                                    <div className={styles.cardIcon}>{service.icon}</div>
                                    <h3 className={styles.cardTitle}>{service.name}</h3>
                                    <p className={styles.cardDescription}>
                                        {getServiceDescription(service.id)}
                                    </p>
                                    <div className={styles.cardArrow}>Learn More →</div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function getServiceDescription(id: string): string {
    const descriptions: Record<string, string> = {
        'startup-solutions': 'Launch with clarity, confidence, and a strong brand foundation',
        'creative-partnership': 'Your outsourced creative department for ongoing needs',
        'corporate-documents': 'Professional documents that communicate credibility',
        'social-media': 'Build a strong, consistent digital presence',
        'brand-management': 'Keep your brand aligned, relevant, and competitive',
        'branding-merchandise': 'High-quality branded items that reflect your brand',
        'consultancy': 'Expert-led guidance for informed strategic decisions',
    };
    return descriptions[id] || '';
}
