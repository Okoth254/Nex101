'use client';

import Link from 'next/link';
import { SERVICES, CONTACT } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Company Info */}
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoContainer}>
                                <img
                                    src="/assets/logo.jpg"
                                    alt="NEX101 Logo"
                                    className={styles.logoImage}
                                />
                            </div>
                        </Link>
                        <p className={styles.tagline}>
                            Your next level creative hub that pushes brands beyond the expected level.
                        </p>
                        <div className={styles.social}>
                            <a href={`https://facebook.com/${CONTACT.social.facebook}`} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                Facebook
                            </a>
                            <a href={`https://instagram.com/${CONTACT.social.instagram}`} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                Instagram
                            </a>
                            <a href={`https://tiktok.com/${CONTACT.social.tiktok}`} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                TikTok
                            </a>
                            <a href={CONTACT.social.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                WhatsApp
                            </a>
                            <a href={`https://linkedin.com/company/${CONTACT.social.linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/case-studies">Case Studies</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Our Solutions</h4>
                        <ul className={styles.linkList}>
                            {SERVICES.map((service) => (
                                <li key={service.id}>
                                    <Link href={`/services/${service.slug}`}>{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Get in Touch</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <strong>Phone:</strong><br />
                                {CONTACT.phone.join(' | ')}
                            </li>
                            <li>
                                <strong>Email:</strong><br />
                                {CONTACT.email.general}
                            </li>
                            <li>
                                <strong>Location:</strong><br />
                                {CONTACT.location.full}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} NEX101 Ltd. All rights reserved.
                    </p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
