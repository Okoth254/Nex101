'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import MagneticButton from './MagneticButton';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services', hasDropdown: true },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] as any }}
        >
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoContainer}>
                        <img
                            src="/assets/logo.jpg"
                            alt="NEX101 Logo"
                            className={styles.logoImage}
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu} onMouseLeave={() => setHoveredPath(null)}>
                    {navItems.map((item) => {
                        if (item.hasDropdown) {
                            return (
                                <div
                                    key={item.path}
                                    className={styles.dropdown}
                                    onMouseEnter={() => {
                                        setIsServicesOpen(true);
                                        setHoveredPath(item.path);
                                    }}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <div className={styles.navItem}>
                                        <Link href={item.path} className={styles.navLink}>
                                            {item.name}
                                        </Link>
                                        {hoveredPath === item.path && (
                                            <motion.div
                                                className={styles.hoverPill}
                                                layoutId="hoverPill"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </div>
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                className={styles.dropdownMenu}
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {SERVICES.map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        href={`/services/${service.slug}`}
                                                        className={styles.dropdownItem}
                                                    >
                                                        <span className={styles.serviceIcon}>{service.icon}</span>
                                                        {service.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={item.path}
                                className={styles.navItem}
                                onMouseEnter={() => setHoveredPath(item.path)}
                            >
                                <Link href={item.path} className={styles.navLink}>
                                    {item.name}
                                </Link>
                                {hoveredPath === item.path && (
                                    <motion.div
                                        className={styles.hoverPill}
                                        layoutId="hoverPill"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <MagneticButton>
                    <Link href="/contact" className={styles.ctaButton}>
                        Book Consultation
                    </Link>
                </MagneticButton>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={isMobileMenuOpen ? styles.open : ''}></span>
                    <span className={isMobileMenuOpen ? styles.open : ''}></span>
                    <span className={isMobileMenuOpen ? styles.open : ''}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <Link href="/" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/services" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                            Services
                        </Link>
                        {SERVICES.map((service) => (
                            <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className={styles.mobileSubLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {service.icon} {service.name}
                            </Link>
                        ))}
                        <Link href="/case-studies" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                            Case Studies
                        </Link>
                        <Link href="/portfolio" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                            Portfolio
                        </Link>
                        <Link href="/blog" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                            Blog
                        </Link>
                        <Link href="/about" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="/contact" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
