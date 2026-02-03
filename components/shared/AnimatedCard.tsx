'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './AnimatedCard.module.css';

interface AnimatedCardProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function AnimatedCard({
    children,
    delay = 0,
    className = ''
}: AnimatedCardProps) {
    return (
        <motion.div
            className={`${styles.card} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                y: -10,
                transition: { duration: 0.3 }
            }}
        >
            {children}
        </motion.div>
    );
}
