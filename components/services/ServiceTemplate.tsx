'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './ServiceTemplate.module.css';

interface ServiceTemplateProps {
    icon: string;
    title: string;
    description: string;
    features: string[];
    benefits?: string[];
    targetClients?: string[];
    galleryImages?: string[];
    cta: {
        text: string;
        link: string;
    };
    children?: ReactNode;
}

export default function ServiceTemplate({
    icon,
    title,
    description,
    features,
    benefits,
    targetClients,
    galleryImages,
    cta,
    children,
}: ServiceTemplateProps) {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <motion.div
                    className={styles.iconWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.icon}>{icon}</span>
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {description}
                </motion.p>
            </section>

            {/* Features */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>What's Included</h2>
                    <div className={styles.featureGrid}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={styles.checkmark}>✓</div>
                                <p>{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits (if provided) */}
            {benefits && benefits.length > 0 && (
                <section className={`${styles.section} ${styles.benefitsSection}`}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionHeading}>Key Benefits</h2>
                        <div className={styles.benefitsList}>
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.benefitItem}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className={styles.benefitIcon}>→</span>
                                    {benefit}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Target Clients (if provided) */}
            {targetClients && targetClients.length > 0 && (
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionHeading}>Ideal For</h2>
                        <div className={styles.targetGrid}>
                            {targetClients.map((client, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.targetCard}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {client}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Section */}
            {galleryImages && galleryImages.length > 0 && (
                <section className={`${styles.section} ${styles.gallerySection}`}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionHeading}>Recent Work</h2>
                        <div className={styles.galleryGrid}>
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.galleryItem}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery item ${index + 1}`}
                                        className={styles.galleryImage}
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Custom content */}
            {children}

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <motion.h2
                        className={styles.ctaHeading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Get Started?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link href={cta.link} className={styles.ctaButton}>
                            {cta.text}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
