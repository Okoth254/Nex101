import ServiceTemplate from '@/components/services/ServiceTemplate';

export default function CreativePartnershipPage() {
    return (
        <ServiceTemplate
            icon="🤝"
            title="Creative Partnership"
            description="Your outsourced creative department for ongoing design, branding, and digital needs. We operate as an extension of your team, maintaining consistency, quality, and strategic alignment."
            features={[
                'Ongoing Design Support',
                'Brand Consistency Management',
                'Strategic Creative Direction',
                'Access to Multidisciplinary Team',
                'Priority Project Handling',
                'Dedicated Account Management',
            ]}
            benefits={[
                'Consistent quality and strategic alignment',
                'Access to diverse expertise through one partnership',
                'Cost-effective alternative to in-house teams',
                'Scalable support that grows with your business',
            ]}
            targetClients={[
                'Individuals starting new ventures',
                'Busy business owners managing multiple responsibilities',
                'Companies without in-house creative teams',
                'Organizations requiring consistent creative support',
            ]}
            cta={{
                text: 'Become a Partner',
                link: '/contact',
            }}
        />
    );
}
