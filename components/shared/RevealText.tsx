'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealTextProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function RevealText({
    children,
    delay = 0,
    className = ''
}: RevealTextProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.6, 0.01, 0.05, 0.95] as any
            }}
        >
            {children}
        </motion.div>
    );
}
