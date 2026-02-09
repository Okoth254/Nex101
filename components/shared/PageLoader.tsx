'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            className={styles.loader}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            onAnimationComplete={() => setIsLoading(false)}
        >
            <div className={styles.loaderContent}>
                <motion.div
                    className={styles.logo}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.logoText}>
                        {"NEX101".split('').map((char, index) => (
                            <span
                                key={index}
                                style={{ color: char === 'X' ? 'black' : '#CE0054' }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.progressBar}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
            </div>
        </motion.div>
    );
}
