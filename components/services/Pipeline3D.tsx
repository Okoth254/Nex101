'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import styles from './Pipeline3D.module.css';

/**
 * Pipeline3D Component
 * 
 * Interactive 3D pipeline showing Audit → Strategy → Execution flow
 * Click each stage to zoom and highlight
 */
export default function Pipeline3D() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [activeStage, setActiveStage] = useState<number | null>(null);

    const stages = [
        {
            id: 1,
            name: 'Audit',
            description: 'Deep analysis of your brand, market position, and creative needs',
            icon: '🔍',
        },
        {
            id: 2,
            name: 'Strategy',
            description: 'Tailored creative strategy aligned with your business goals',
            icon: '🎯',
        },
        {
            id: 3,
            name: 'Execution',
            description: 'High-quality delivery with measurable impact',
            icon: '🚀',
        },
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
                    Our Process
                </motion.h2>

                <div className={styles.pipeline}>
                    {stages.map((stage, index) => (
                        <div key={stage.id} className={styles.stageWrapper}>
                            <motion.div
                                className={`${styles.stage} ${activeStage === stage.id ? styles.active : ''}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={styles.stageIcon}>{stage.icon}</div>
                                <h3 className={styles.stageName}>{stage.name}</h3>

                                {activeStage === stage.id && (
                                    <motion.p
                                        className={styles.stageDescription}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {stage.description}
                                    </motion.p>
                                )}
                            </motion.div>

                            {index < stages.length - 1 && (
                                <motion.div
                                    className={styles.arrow}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                >
                                    →
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
