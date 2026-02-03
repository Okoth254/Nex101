'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './GapSection.module.css';

export default function GapSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.container}>
                {/* LEFT SIDE - The Problem (Static/Dull) */}
                <motion.div
                    className={`${styles.side} ${styles.problem}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>The Challenge</h2>
                    <ul className={styles.list}>
                        <li>Inconsistent brand identity</li>
                        <li>Limited access to creative expertise</li>
                        <li>Costly in-house creative teams</li>
                        <li>Lack of strategic direction</li>
                    </ul>
                    <div className={styles.problemVisual}>
                        <div className={styles.staticBox}></div>
                        <div className={styles.staticBox}></div>
                        <div className={styles.staticBox}></div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE - The Solution (Vibrant/Moving) */}
                <motion.div
                    className={`${styles.side} ${styles.solution}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className={styles.heading}>The NEX101 Solution</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.icon}>✓</span>
                            Access to multidisciplinary experts
                        </li>
                        <li>
                            <span className={styles.icon}>✓</span>
                            One strategic partnership
                        </li>
                        <li>
                            <span className={styles.icon}>✓</span>
                            Future-focused solutions
                        </li>
                        <li>
                            <span className={styles.icon}>✓</span>
                            Global standards, local expertise
                        </li>
                    </ul>
                    <div className={styles.solutionVisual}>
                        <motion.div
                            className={styles.floatingBox}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        ></motion.div>
                        <motion.div
                            className={styles.floatingBox}
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, -5, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        ></motion.div>
                        <motion.div
                            className={styles.floatingBox}
                            animate={{
                                y: [0, -25, 0],
                                rotate: [0, 3, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        ></motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
