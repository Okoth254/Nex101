import ServiceTemplate from '@/components/services/ServiceTemplate';

export default function StartupSolutionsPage() {
    return (
        <ServiceTemplate
            icon="🚀"
            title="Startup Solutions"
            description="Launch with clarity, confidence, and a strong brand foundation. We help entrepreneurs and early-stage businesses enter the market with a professional identity and the creative tools required for growth."
            features={[
                'Logo and Brand Design',
                'Complete Brand Identity Design',
                'Professional Website Development',
                'Marketing Materials (Company profile, business cards, brochures)',
                'Invoices and Receipts Design',
                'Promotional Items (Diaries, notebooks, t-shirts, flyers)',
            ]}
            benefits={[
                'Professional market entry with strong brand foundation',
                'Clear direction and strategic positioning',
                'Complete creative toolkit for immediate use',
                'Cost-effective package designed for startups',
            ]}
            cta={{
                text: 'Launch Your Brand',
                link: '/contact',
            }}
            galleryImages={[
                '/assets/services/startup/startup-1.png',
                '/assets/services/startup/startup-2.png',
                '/assets/services/startup/startup-3.png',
                '/assets/services/startup/startup-4.png',
                '/assets/services/startup/startup-5.png',
                '/assets/services/startup/startup-6.png',
            ]}
        />
    );
}
