// Portfolio project data structure
export interface PortfolioProject {
    id: string;
    title: string;
    slug: string;
    category: string;
    client: string;
    year: string;
    description: string;
    image: string;
    tags: string[];
    services: string[];
}

// Sample portfolio projects
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        id: '1',
        title: 'Logo Design',
        slug: 'logo-design',
        category: 'Branding',
        client: 'Various Clients',
        year: '2025',
        description: 'Custom logo design covering diverse industries and brand identities.',
        image: '/assets/services/branding/branding-2.png',
        tags: ['Identity', 'Vector', 'Minimalist'],
        services: ['Brand Management'],
    },
    {
        id: '2',
        title: 'Brand Design',
        slug: 'brand-design',
        category: 'Branding',
        client: 'TechVenture Inc.',
        year: '2025',
        description: 'Comprehensive brand identity systems including guidelines and visual assets.',
        image: '/assets/cases/case-1.png',
        tags: ['Identity System', 'Guidelines', 'Visual Language'],
        services: ['Brand Management'],
    },
    {
        id: '3',
        title: 'Web Design',
        slug: 'web-design',
        category: 'Digital',
        client: 'Future Tech',
        year: '2025',
        description: 'Modern, responsive website designs aimed at user engagement and conversion.',
        image: '/assets/portfolio/startup-1.png',
        tags: ['UI/UX', 'Responsive', 'Web Development'],
        services: ['Startup Solutions'],
    },
    {
        id: '4',
        title: 'Brochures',
        slug: 'brochures',
        category: 'Print Design',
        client: 'Corporate Partners',
        year: '2024',
        description: 'Professional brochure layouts for marketing and informational purposes.',
        image: '/assets/services/corporate/corporate-1.png',
        tags: ['Layout', 'Print', 'Marketing Material'],
        services: ['Corporate Documents'],
    },
    {
        id: '5',
        title: 'Profiles',
        slug: 'profiles',
        category: 'Corporate Documents',
        client: 'Global Enterprises',
        year: '2024',
        description: 'Sleek company profiles that effectively communicate organizational value.',
        image: '/assets/portfolio/ngo-1.png',
        tags: ['Company Profile', 'Editorial', 'Layout'],
        services: ['Corporate Documents'],
    },
    {
        id: '6',
        title: 'Reports',
        slug: 'reports',
        category: 'Corporate Documents',
        client: 'FinanceHub',
        year: '2025',
        description: 'Detailed annual and quarterly reports with clear data visualization.',
        image: '/assets/portfolio/report-1.png',
        tags: ['Annual Report', 'Data Viz', 'Typography'],
        services: ['Corporate Documents'],
    },
    {
        id: '7',
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        category: 'Marketing',
        client: 'Growth Co.',
        year: '2025',
        description: 'Strategic digital marketing assets for social media and online campaigns.',
        image: '/assets/portfolio/social-1.png',
        tags: ['Social Media', 'Ads', 'Content Strategy'],
        services: ['Social Media Management'],
    },
    {
        id: '8',
        title: 'Business Cards',
        slug: 'business-cards',
        category: 'Print Design',
        client: 'Elite Network',
        year: '2024',
        description: 'Premium business card designs that leave a lasting impression.',
        image: '/assets/portfolio/real-estate-1.png',
        tags: ['Stationery', 'Print', 'Networking'],
        services: ['Branding & Merchandise'],
    },
];

export const PORTFOLIO_CATEGORIES = [
    'All',
    'Branding',
    'Digital',
    'Print Design',
    'Corporate Documents',
    'Marketing',
];
