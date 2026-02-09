import { BLOG_POSTS } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import RelatedPosts from '@/components/blog/RelatedPosts';
import styles from './page.module.css';

// 1. Generate static params for all posts
export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

// 2. Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | NEX101 Blog`,
        description: post.excerpt,
    };
}

// 3. Page Component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className={styles.container}>
            {/* Hero Section */}
            <div className={styles.heroWrapper}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay} />

                <Link href="/blog" className={styles.backLink}>
                    <ArrowLeft size={18} />
                    Back to Blog
                </Link>

                <div className={styles.heroContent}>
                    <span className={styles.category}>{post.category}</span>
                    <h1 className={styles.title}>{post.title}</h1>

                    <div className={styles.meta}>
                        <span className="flex items-center gap-2">
                            <User size={18} /> {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={18} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={18} /> {post.readTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className={styles.grid}>
                <div className={styles.mainContent}>
                    <div className={styles.content}>
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Author Bio */}
                    <div className={styles.authorSection}>
                        <span className={styles.authorLabel}>About the Author</span>
                        <div className={styles.authorName}>{post.author}</div>
                        <p className="text-gray-600 mt-2 text-sm">
                            Expert insights from the team at NEX101, dedicated to elevating African brands through strategy and design.
                        </p>
                    </div>
                </div>

                {/* Sidebar area (currently empty, can be used for TOC or ads later) */}
                <aside className="hidden lg:block">
                    {/* Placeholder for sidebar content */}
                </aside>
            </div>

            {/* Related Posts */}
            <div className="max-w-[1200px] mx-auto px-6 pb-20">
                <RelatedPosts currentSlug={slug} category={post.category} />
            </div>
        </article>
    );
}
