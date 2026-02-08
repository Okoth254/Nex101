'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Redefining Creative Standards Across Africa
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    A multidisciplinary team of expert creatives, brand strategists, and digital specialists
                </motion.p>
            </section>

            {/* Company Overview */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.sectionHeading}>Who We Are</h2>
                        <div className={styles.content}>
                            <p>NEX101 Ltd is a modern creative and strategic company established to redefine how businesses build, manage, and grow their brands. We exist to help organizations market effectively, position competitively, and leverage digital space for sustainable growth.</p>
                            <p>Powered by a multidisciplinary team of expert creatives, brand strategists, and digital specialists, we understand the real challenges businesses face in today's highly competitive market. Through deep market insights and strategic thinking, we deliver creative solutions that bridge gaps, solve real business problems, and empower local and regional brands to grow with confidence.</p>
                            <p>We operate as an outsourced or complementary creative department, providing brand management, creative direction, and strategic support that allows our partners to focus on running their core operations.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* NEX101 Meaning */}
            <section className={`${styles.section} ${styles.meaningSection}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading} style={{ fontWeight: 800 }}>The Meaning Behind <span className="wordmark">NEX101</span></h2>

                    <div className={styles.meaningGrid}>
                        <motion.div
                            className={styles.meaningCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3><span className="wordmark">NEX</span> = NEXT + NEXUS</h3>
                            <div className={styles.meaningPart}>
                                <h4>NEXT</h4>
                                <p>Next level, next step, and the future of a brand. <span className="wordmark">NEX101</span> is about helping businesses move forward.</p>
                            </div>
                            <div className={styles.meaningPart}>
                                <h4>NEXUS</h4>
                                <p>A hub. <span className="wordmark">NEX101</span> is a central creative hub where businesses outsource from.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.meaningCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3>101</h3>
                            <p>101% - doing more than expected. We go beyond the usual standards and create work that stands out, not blends in.</p>
                        </motion.div>
                    </div>

                    <motion.p
                        className={styles.meaningConclusion}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <strong><span className="wordmark">NEX101</span> means:</strong> Your next level creative hub that pushes brands beyond the expected level.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.mvGrid}>
                        <motion.div
                            className={styles.mvCard}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={styles.mvIcon}>🎯</div>
                            <h3>Our Mission</h3>
                            <p>To deliver cutting-edge creative solutions that help businesses and corporate entities start, grow, stay relevant, and compete globally.</p>
                        </motion.div>

                        <motion.div
                            className={styles.mvCard}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={styles.mvIcon}>🔭</div>
                            <h3>Our Vision</h3>
                            <p>To be Africa's leading creative hub, known for exceptional creativity and innovative solutions that enable brands to unlock limitless growth.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className={`${styles.section} ${styles.commitmentSection}`}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.commitmentCard}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.sectionHeading} style={{ color: 'var(--nex-navy)', marginBottom: '2rem', fontWeight: 800 }}>Our Commitment</h2>
                        <p className={styles.commitmentText}>
                            "We are committed to leading the creative industry, rewriting the standards of branding, and helping businesses compete globally from brand creation onwards. Every project we take on is fueled by the promise of innovation, impact, and measurable growth."
                        </p>
                        <div className={styles.commitmentAuthor}>— The <span className="wordmark">NEX101</span> Promise</div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className={`${styles.section} ${styles.valuesSection}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Core Values</h2>
                    <div className={styles.valuesGrid}>
                        {[
                            { title: 'Creativity with Purpose', desc: 'Every design solves a business need' },
                            { title: 'Integrity & Transparency', desc: 'We operate honestly, communicate openly, and deliver reliably' },
                            { title: 'Excellence', desc: 'We aim beyond ordinary results' },
                            { title: 'Innovation', desc: 'We constantly adapt to new technologies and market needs' },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h4>{value.title}</h4>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Why Partner With NEX101?</h2>
                    <div className={styles.whyList}>
                        {[
                            'Creativity + strategy = real business solutions',
                            'Long-term partnership, not one-off service',
                            'Access to multiple experts through one partnership',
                            'High professional and global standards',
                            'Strong foundations for startups + structured management for established brands',
                            'Future-focused design for lasting relevance',
                            'Transparency, clear communication, integrity',
                        ].map((reason, index) => (
                            <motion.div
                                key={index}
                                className={styles.whyItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className={styles.checkIcon}>✓</span>
                                {reason}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
