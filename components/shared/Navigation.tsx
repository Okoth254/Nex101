'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
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
                <div className={styles.desktopMenu}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link href="/services" className={styles.navLink}>
                            Services
                        </Link>
                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    className={styles.dropdownMenu}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
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

                    <Link href="/case-studies" className={styles.navLink}>
                        Case Studies
                    </Link>

                    <Link href="/portfolio" className={styles.navLink}>
                        Portfolio
                    </Link>

                    <Link href="/blog" className={styles.navLink}>
                        Blog
                    </Link>

                    <Link href="/about" className={styles.navLink}>
                        About
                    </Link>

                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </div>

                {/* CTA Button */}
                <Link href="/contact" className={styles.ctaButton}>
                    Book Consultation
                </Link>

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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
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
