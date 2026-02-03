'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export default function MagneticButton({
    children,
    className = '',
    onClick,
    href
}: MagneticButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const buttonContent = (
        <motion.div
            className={`${styles.magneticButton} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} className={styles.magneticLink}>
                {buttonContent}
            </a>
        );
    }

    return buttonContent;
}
