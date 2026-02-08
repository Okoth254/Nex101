'use client';

import { BLOG_POSTS } from '@/lib/blog-data';
import BlogCard from './BlogCard';
import styles from './RelatedPosts.module.css';

interface RelatedPostsProps {
    currentSlug: string;
    category: string;
}

export default function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
    // Filter posts: same category, not current post, take up to 3
    const relatedPosts = BLOG_POSTS
        .filter(post => post.category === category && post.slug !== currentSlug)
        .slice(0, 3);

    // If no related posts in same category, fall back to recent posts
    if (relatedPosts.length === 0) {
        const recentPosts = BLOG_POSTS
            .filter(post => post.slug !== currentSlug)
            .slice(0, 3);

        if (recentPosts.length === 0) return null;

        return (
            <section className={styles.section}>
                <h2 className={styles.heading}>Latest Articles</h2>
                <div className={styles.grid}>
                    {recentPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Related Articles</h2>
            <div className={styles.grid}>
                {relatedPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>
        </section>
    );
}
