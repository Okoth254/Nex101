'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/blog-data';
import styles from './BlogCard.module.css';

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
        >
            <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.meta}>
                        <span className={styles.category}>{post.category}</span>
                        <span className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>

                    <div className={styles.footer}>
                        <span className={styles.author}>{post.author}</span>
                        <span className={styles.readTime}>{post.readTime}</span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
