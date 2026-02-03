'use client';

import { motion } from 'framer-motion';
import styles from './FeaturedCases.module.css';

const caseStudies = [
    {
        id: 1,
        title: 'Startup Launch Success',
        industry: 'Technology',
        challenge: 'New business needed complete brand identity to enter competitive market',
        solution: 'Full startup package including logo, brand identity, website, and marketing materials',
        results: [
            'Successfully launched with professional brand presence',
            'Gained immediate market traction',
            'Established credibility with target audience',
        ],
        image: '/assets/cases/case-1.png',
    },
    {
        id: 2,
        title: 'Corporate Rebranding',
        industry: 'Financial Services',
        challenge: 'Established company needed modern refresh to stay relevant',
        solution: 'Comprehensive brand management, digital documents, and strategic repositioning',
        results: [
            'Improved brand perception among stakeholders',
            'Increased engagement across digital channels',
            'Modernized corporate identity',
        ],
        image: '/assets/cases/case-2.png',
    },
    {
        id: 3,
        title: 'Social Media Growth',
        industry: 'Retail',
        challenge: 'Low engagement and inconsistent social media presence',
        solution: 'Full social media management with content strategy and community engagement',
        results: [
            '300% increase in follower growth',
            '250% increase in engagement rates',
            'Consistent brand voice established',
        ],
        image: '/assets/cases/case-3.png',
    },
];

export default function FeaturedCases() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Case Studies
                </motion.h2>

                <div className={styles.cases}>
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            className={styles.caseCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.caseImage}>
                                <img src={study.image} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div className={styles.caseContent}>
                                <div className={styles.caseHeader}>
                                    <h3 className={styles.caseTitle}>{study.title}</h3>
                                    <span className={styles.industry}>{study.industry}</span>
                                </div>

                                <div className={styles.caseSection}>
                                    <h4 className={styles.sectionTitle}>Challenge</h4>
                                    <p>{study.challenge}</p>
                                </div>

                                <div className={styles.caseSection}>
                                    <h4 className={styles.sectionTitle}>Solution</h4>
                                    <p>{study.solution}</p>
                                </div>

                                <div className={styles.caseSection}>
                                    <h4 className={styles.sectionTitle}>Results</h4>
                                    <ul className={styles.resultsList}>
                                        {study.results.map((result, i) => (
                                            <li key={i}>{result}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
