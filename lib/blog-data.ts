// Blog post data structure
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
}

// Sample blog posts
export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Branding in Africa',
        slug: 'future-of-branding-africa',
        excerpt: 'Exploring how African brands are redefining creative standards and competing globally in the digital age.',
        content: 'Full blog post content here...',
        author: 'NEX101 Team',
        date: '2026-01-15',
        category: 'Branding',
        image: '/assets/blog/post-1.png',
        readTime: '5 min read',
    },
    {
        id: '2',
        title: '7 Signs Your Brand Needs a Refresh',
        slug: 'signs-brand-needs-refresh',
        excerpt: 'Is your brand keeping up with market changes? Here are the key indicators that it\'s time for a strategic refresh.',
        content: 'Full blog post content here...',
        author: 'NEX101 Team',
        date: '2026-01-10',
        category: 'Strategy',
        image: '/assets/blog/post-2.png',
        readTime: '4 min read',
    },
    {
        id: '3',
        title: 'Building a Strong Social Media Presence',
        slug: 'building-social-media-presence',
        excerpt: 'Practical strategies for businesses to establish and grow their digital presence across social platforms.',
        content: 'Full blog post content here...',
        author: 'NEX101 Team',
        date: '2026-01-05',
        category: 'Digital Marketing',
        image: '/assets/blog/post-3.png',
        readTime: '6 min read',
    },
    {
        id: '4',
        title: 'Why Startups Need Professional Branding',
        slug: 'startups-need-professional-branding',
        excerpt: 'The critical role of brand identity in startup success and how to launch with confidence.',
        content: 'Full blog post content here...',
        author: 'NEX101 Team',
        date: '2025-12-28',
        category: 'Startups',
        image: '/assets/blog/post-4.png',
        readTime: '5 min read',
    },
    {
        id: '5',
        title: 'Creative Partnership vs In-House Teams',
        slug: 'creative-partnership-vs-inhouse',
        excerpt: 'Comparing the benefits of outsourcing creative work versus building internal teams.',
        content: 'Full blog post content here...',
        author: 'NEX101 Team',
        date: '2025-12-20',
        category: 'Business',
        image: '/assets/blog/post-5.jpg',
        readTime: '7 min read',
    },
    {
        id: '6',
        title: 'The Power of Consistent Brand Identity',
        slug: 'power-consistent-brand-identity',
        excerpt: 'How maintaining brand consistency across all touchpoints drives recognition and trust.',
        content: 'Full blog post content here...',
        author: 'NEX101 Team',
        date: '2025-12-15',
        category: 'Branding',
        image: '/assets/blog/post-6.jpg',
        readTime: '5 min read',
    },
];

export const BLOG_CATEGORIES = [
    'All',
    'Branding',
    'Strategy',
    'Digital Marketing',
    'Startups',
    'Business',
];
