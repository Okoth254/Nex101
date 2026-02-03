'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target;

            // Check if target is an Element (has closest method)
            if (!(target instanceof Element)) return;

            // Check if hovering over interactive elements
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true);

                // Check for data-cursor-text attribute
                const cursorTextEl = target.closest('[data-cursor-text]') as HTMLElement;
                if (cursorTextEl) {
                    setCursorText(cursorTextEl.dataset.cursorText || '');
                }
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
            setCursorText('');
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className={`${styles.cursor} ${isHovering ? styles.hovering : ''}`}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                {cursorText && <span className={styles.cursorText}>{cursorText}</span>}
            </motion.div>

            {/* Cursor dot */}
            <motion.div
                className={styles.cursorDot}
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
        </>
    );
}
