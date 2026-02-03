import ServiceTemplate from '@/components/services/ServiceTemplate';

export default function CorporateDocumentsPage() {
    return (
        <ServiceTemplate
            icon="📄"
            title="Corporate Digital Documents"
            description="Professional, well-structured, and visually compelling corporate documents that communicate credibility, clarity, and authority. Crafted to support executive communication, marketing, reporting, and institutional branding."
            features={[
                'Comprehensive Company Profile Design & Printing',
                'Executive and Organizational Reports',
                'Brochures and Magazine Design & Printing',
                'Professional PowerPoint Presentations',
                'Marketing and Performance Reports',
                'Annual Reports and White Papers',
            ]}
            benefits={[
                'Enhanced professional credibility',
                'Clear and compelling communication',
                'Consistent brand representation across all documents',
                'Print-ready files with high-quality standards',
            ]}
            cta={{
                text: 'Elevate Your Documents',
                link: '/contact',
            }}
            galleryImages={[
                '/assets/services/corporate/corporate-1.png',
                '/assets/services/corporate/corporate-2.png',
                '/assets/services/corporate/corporate-3.png',
                '/assets/services/corporate/corporate-4.png',
            ]}
        />
    );
}
