'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const SERVICES_LIST = [
    {
        title: "End-to-End Application Development",
        description: "We design, build, and deploy complete digital solutions — from concept and design to launch and ongoing support."
    },
    {
        title: "User-Friendly Web & Mobile Experiences",
        description: "We create clean, intuitive, and responsive applications that work seamlessly across phones, tablets, and desktops."
    },
    {
        title: "Secure & Reliable Systems",
        description: "Our solutions are built with security and stability in mind, ensuring your data and users are always protected."
    },
    {
        title: "Backend Systems & Integrations",
        description: "We develop powerful backend systems and integrate third-party services such as payment gateways, APIs, and external platforms."
    },
    {
        title: "Database & Data Management",
        description: "We structure and manage your data to ensure accuracy, performance, and scalability as your business grows."
    },
    {
        title: "Cloud Deployment & Maintenance",
        description: "We deploy applications to the cloud, ensuring high availability, scalability, and minimal downtime."
    },
    {
        title: "Performance Monitoring & Support",
        description: "We continuously monitor systems, resolve issues proactively, and provide ongoing technical support."
    },
    {
        title: "Collaborative Project Delivery",
        description: "We work closely with clients to understand business needs, provide regular updates, and deliver solutions on time."
    },
    {
        title: "Custom E-commerce & ERP Solutions",
        description: "We build scalable custom e-commerce stores with secure payment integrations and robust ERP systems to streamline your business operations."
    }
];

export default function DevelopmentServicesPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <motion.div
                    className={styles.iconWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.icon}>💻</span>
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Development Services
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Transforming ideas into powerful, scalable, and secure digital solutions. We build the technology that powers your business growth.
                </motion.p>
            </section>

            {/* Services Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.h2
                        className={styles.sectionHeading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Development Solutions
                    </motion.h2>

                    <div className={styles.grid}>
                        {SERVICES_LIST.map((service, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className={styles.cardIndex}>0{index + 1}</span>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <motion.h2
                        className={styles.ctaHeading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Have a Project in Mind?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link href="/contact" className={styles.ctaButton}>
                            Start Building Today
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
