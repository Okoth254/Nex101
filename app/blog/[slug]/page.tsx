import { BLOG_POSTS } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import styles from './page.module.css';

// 1. Generate static params for all posts
export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

// 2. Generate metadata for SEO
export function generateMetadata({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | NEX101 Blog`,
        description: post.excerpt,
    };
}

// 3. Page Component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={20} />
                Back to Blog
            </Link>

            <header className={styles.header}>
                <span className={styles.category}>{post.category}</span>
                <h1 className={styles.title}>{post.title}</h1>

                <div className={styles.meta}>
                    <span className="flex items-center gap-2">
                        <User size={16} /> {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                        <Calendar size={16} /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock size={16} /> {post.readTime}
                    </span>
                </div>
            </header>

            <div className={styles.imageContainer}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.image}
                    priority
                />
            </div>

            <div className={styles.content}>
                {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </article>
    );
}
