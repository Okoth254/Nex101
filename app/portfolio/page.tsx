'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '@/lib/portfolio-data';
import styles from './page.module.css';

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter(project => project.category === selectedCategory);

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
                    Our Work
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Showcasing brands we've helped build, transform, and grow
                </motion.p>
            </section>

            {/* Category Filter */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filters}>
                        {PORTFOLIO_CATEGORIES.map((category) => (
                            <motion.button
                                key={category}
                                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className={styles.portfolioSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <p className={styles.noResults}>No projects found in this category.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
