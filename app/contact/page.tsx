'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CONTACT } from '@/lib/constants';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState<{
        type: 'idle' | 'loading' | 'success' | 'error';
        message: string;
    }>({ type: 'idle', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check for any empty fields before submitting
        const { name, email, phone, company, service, message } = formData;
        if (!name || !email || !phone || !company || !service || !message) {
            setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
            return;
        }

        setStatus({ type: 'loading', message: '' });

        const encode = (data: any) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        }

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            });

            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: '',
            });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        }
    };

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Let's Build Something Extraordinary
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Start your journey to becoming a future-ready brand
                </motion.p>
            </section>

            {/* Contact Form & Info */}
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Form */}
                        <motion.div
                            className={styles.formWrapper}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="font-heavy">Get in Touch</h2>

                            {status.message && (
                                <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                                    {status.message}
                                </div>
                            )}

                            <form
                                onSubmit={handleSubmit}
                                className={styles.form}
                                name="contact"
                                data-netlify="true"
                                method="POST"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company">Company/Organization *</label>
                                    <input
                                        type="text"
                                        id="company"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="service">Service Interested In *</label>
                                    <select
                                        id="service"
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="startup">Startup Solutions</option>
                                        <option value="development">Development Services</option>
                                        <option value="partnership">Creative Partnership</option>
                                        <option value="documents">Corporate Documents</option>
                                        <option value="social">Social Media Management</option>
                                        <option value="brand">Brand Management</option>
                                        <option value="merchandise">Branding & Merchandise</option>
                                        <option value="consultancy">Strategic Consultancy</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={status.type === 'loading'}
                                >
                                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className={styles.infoWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2>Contact Information</h2>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>{CONTACT.phone.join(' | ')}</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>✉️</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>{CONTACT.email.general}</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>{CONTACT.location.full}</p>
                                </div>
                            </div>

                            <div className={styles.socialLinks}>
                                <h4>Follow Us</h4>
                                <div className={styles.socialIcons}>
                                    <a href={`https://facebook.com/${CONTACT.social.facebook}`} target="_blank" rel="noopener noreferrer">
                                        Facebook
                                    </a>
                                    <a href={`https://instagram.com/${CONTACT.social.instagram}`} target="_blank" rel="noopener noreferrer">
                                        Instagram
                                    </a>
                                    <a href={`https://tiktok.com/${CONTACT.social.tiktok}`} target="_blank" rel="noopener noreferrer">
                                        TikTok
                                    </a>
                                    <a href={`https://linkedin.com/company/${CONTACT.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
