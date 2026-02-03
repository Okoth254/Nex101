import ServiceTemplate from '@/components/services/ServiceTemplate';

export default function BrandingMerchandisePage() {
    return (
        <ServiceTemplate
            icon="👕"
            title="Branding & Merchandise"
            description="High-quality branded merchandise that aligns precisely with your brand's identity and guidelines. We go beyond printing logos—every item reflects your brand's personality, purpose, and professionalism."
            features={[
                'Shirts and T-shirts',
                'Reflectors and Safety Gear',
                'Hoodies and Capes',
                'Stationery and Office Supplies',
                'Name Tags and ID Cards',
                'Backdrops and Rollup Banners',
                'Teardrop and Flag Banners',
                'Packaging Bags and Umbrellas',
                'Mugs and Flasks',
            ]}
            benefits={[
                'Precise brand alignment on all items',
                'Professional quality that reflects brand standards',
                'Versatile merchandise for multiple use cases',
                'Memorable brand touchpoints',
            ]}
            targetClients={[
                'Corporates for staff branding',
                'Event planners for trade fairs and expos',
                'Businesses for product launches',
                'Institutions for campaigns and promotions',
            ]}
            cta={{
                text: 'Brand Your Merchandise',
                link: '/contact',
            }}
            galleryImages={[
                '/assets/services/branding/branding-1.png',
                '/assets/services/branding/branding-2.png',
                '/assets/services/branding/branding-3.png',
                '/assets/services/branding/branding-4.png',
                '/assets/services/branding/branding-5.png',
                '/assets/services/branding/branding-6.png',
            ]}
        />
    );
}
