'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/blog/BlogCard';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog-data';
import styles from './page.module.css';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = selectedCategory === 'All'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === selectedCategory);

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
                    Insights & Updates
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Expert perspectives on branding, design, and digital strategy
                </motion.p>
            </section>

            {/* Category Filter */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filters}>
                        {BLOG_CATEGORIES.map((category) => (
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

            {/* Blog Grid */}
            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {filteredPosts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <p className={styles.noResults}>No posts found in this category.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
