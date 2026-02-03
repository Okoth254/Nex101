import ServiceTemplate from '@/components/services/ServiceTemplate';

export default function SocialMediaPage() {
    return (
        <ServiceTemplate
            icon="📱"
            title="Social Media Management"
            description="Build a strong and consistent digital presence across social media platforms. Our approach combines creativity, strategy, and audience engagement to ensure visibility, relevance, and growth."
            features={[
                'Strategic Content Creation',
                'Community Engagement Management',
                'Professional Caption Development',
                'Content Posting and Scheduling',
                'Ad Design and Creation',
                'Page Promotion and Growth Strategies',
            ]}
            benefits={[
                'Increased brand visibility and awareness',
                'Consistent and professional digital presence',
                'Higher engagement rates with target audience',
                'Data-driven growth strategies',
            ]}
            targetClients={[
                'Businesses seeking digital growth',
                'Organizations building online communities',
                'Institutions maintaining public presence',
                'Public figures and influencers',
            ]}
            cta={{
                text: 'Grow Your Presence',
                link: '/contact',
            }}
            galleryImages={[
                '/assets/services/social/social-1.png',
                '/assets/services/social/social-2.png',
                '/assets/services/social/social-3.png',
                '/assets/services/social/social-4.png',
            ]}
        />
    );
}
