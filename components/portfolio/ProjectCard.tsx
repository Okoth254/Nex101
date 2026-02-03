'use client';

import { motion } from 'framer-motion';
import { PortfolioProject } from '@/lib/portfolio-data';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: PortfolioProject;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
        >
            <div className={styles.imageWrapper}>
                <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                />
                <div className={styles.overlay}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.client}>{project.client}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.category}>{project.category}</span>
                    <span className={styles.year}>{project.year}</span>
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
