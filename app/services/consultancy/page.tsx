import ServiceTemplate from '@/components/services/ServiceTemplate';

export default function ConsultancyPage() {
    return (
        <ServiceTemplate
            icon="💡"
            title="Strategic Consultancy"
            description="In today's digital economy, businesses can no longer operate effectively without creative and strategic guidance. We bridge the gap through expert-led consultancy, guiding startups, SMEs, and organizations toward informed decisions."
            features={[
                'Branding Strategy Consultation',
                'Marketing Direction and Planning',
                'Digital Presence Strategy',
                'Brand Management Advisory',
                'Creative Direction Guidance',
                'Market Positioning Analysis',
            ]}
            benefits={[
                'Informed strategic decisions backed by expertise',
                'Clear direction for brand development',
                'Access to accurate, actionable information',
                'Competitive positioning in digital markets',
            ]}
            targetClients={[
                'Startups seeking strategic direction',
                'SMEs planning brand evolution',
                'Organizations entering digital transformation',
                'Founders uncertain about creative strategy',
            ]}
            cta={{
                text: 'Book a Consultation',
                link: '/contact',
            }}
        />
    );
}
