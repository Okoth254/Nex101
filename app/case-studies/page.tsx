'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import ImpactOverview from '@/components/case-studies/ImpactOverview';
import FeaturedCases from '@/components/case-studies/FeaturedCases';
import { IMPACT_STATS } from '@/lib/constants';
import styles from './page.module.css';

export default function CaseStudiesPage() {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });
    const count = useMotionValue(0);
    const rounded = useSpring(count, { damping: 50, stiffness: 100 });
    const displayRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (isHeroInView) {
            count.set(IMPACT_STATS.brandsLaunched);
        }
    }, [isHeroInView, count]);

    useEffect(() => {
        const unsubscribe = rounded.on('change', (latest) => {
            if (displayRef.current) {
                displayRef.current.textContent = Math.round(latest) + '+';
            }
        });
        return unsubscribe;
    }, [rounded]);

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section ref={heroRef} className={styles.hero}>
                <motion.div
                    className={styles.heroMetric}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span ref={displayRef} className={styles.metricValue}>
                        0+
                    </span>
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Measurable Impact, Proven Results
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Strategic creativity that delivers business growth
                </motion.p>
            </section>

            {/* Impact Overview */}
            <ImpactOverview />

            {/* Featured Case Studies */}
            <FeaturedCases />

            {/* Testimonials Section */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <motion.h2
                        className={styles.sectionHeading}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        What Our Partners Say
                    </motion.h2>

                    <div className={styles.testimonialGrid}>
                        {[
                            {
                                quote: "NEX101 transformed our brand identity and helped us stand out in a competitive market. Their strategic approach and creative excellence are unmatched.",
                                author: "Sarah M.",
                                role: "CEO, Tech Startup",
                            },
                            {
                                quote: "Working with NEX101 feels like having an entire creative department at our disposal. They understand our vision and consistently deliver beyond expectations.",
                                author: "James K.",
                                role: "Marketing Director, Financial Services",
                            },
                            {
                                quote: "The impact on our social media presence has been remarkable. NEX101's strategic content and community management drove real, measurable growth.",
                                author: "Linda T.",
                                role: "Founder, Retail Brand",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className={styles.testimonialCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <p className={styles.quote}>"{testimonial.quote}"</p>
                                <div className={styles.author}>
                                    <strong>{testimonial.author}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
