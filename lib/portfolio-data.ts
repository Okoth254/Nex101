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
        title: 'Tech Startup Brand Launch',
        slug: 'tech-startup-brand-launch',
        category: 'Branding',
        client: 'TechVenture Inc.',
        year: '2025',
        description: 'Complete brand identity and launch package for innovative tech startup',
        image: '/assets/portfolio/startup-1.png',
        tags: ['Logo Design', 'Brand Identity', 'Website'],
        services: ['Startup Solutions', 'Brand Management'],
    },
    {
        id: '2',
        title: 'Financial Services Rebrand',
        slug: 'financial-services-rebrand',
        category: 'Rebranding',
        client: 'FinanceHub Ltd.',
        year: '2025',
        description: 'Modern rebrand for established financial services company',
        image: '/assets/portfolio/rebrand-1.png',
        tags: ['Rebranding', 'Corporate Documents', 'Digital'],
        services: ['Brand Management', 'Corporate Documents'],
    },
    {
        id: '3',
        title: 'Retail Social Media Campaign',
        slug: 'retail-social-campaign',
        category: 'Digital Marketing',
        client: 'StyleMart',
        year: '2025',
        description: 'Comprehensive social media strategy and content creation',
        image: '/assets/portfolio/social-1.png',
        tags: ['Social Media', 'Content Creation', 'Strategy'],
        services: ['Social Media Management'],
    },
    {
        id: '4',
        title: 'Event Branding Package',
        slug: 'event-branding-package',
        category: 'Event Branding',
        client: 'Summit Africa',
        year: '2024',
        description: 'Full branding solution for large-scale corporate event',
        image: '/assets/portfolio/event-1.png',
        tags: ['Event Design', 'Merchandise', 'Signage'],
        services: ['Branding & Merchandise'],
    },
    {
        id: '5',
        title: 'NGO Brand Development',
        slug: 'ngo-brand-development',
        category: 'Branding',
        client: 'Hope Foundation',
        year: '2024',
        description: 'Brand identity and marketing materials for non-profit organization',
        image: '/assets/portfolio/ngo-1.png',
        tags: ['Logo', 'Brand Guidelines', 'Marketing'],
        services: ['Startup Solutions', 'Corporate Documents'],
    },
    {
        id: '6',
        title: 'Restaurant Brand Identity',
        slug: 'restaurant-brand-identity',
        category: 'Branding',
        client: 'Savory Kitchen',
        year: '2024',
        description: 'Complete brand identity including menu design and packaging',
        image: '/assets/portfolio/restaurant-1.png',
        tags: ['Branding', 'Packaging', 'Menu Design'],
        services: ['Startup Solutions', 'Branding & Merchandise'],
    },
    {
        id: '7',
        title: 'Premium Corporate Merchandise',
        slug: 'premium-corporate-merchandise',
        category: 'Branding',
        client: 'Elite Corp',
        year: '2025',
        description: 'High-end branded apparel and merchandise for corporate identity',
        image: '/assets/portfolio/merch-1.png',
        tags: ['Apparel', 'Merchandise', 'Identity'],
        services: ['Branding & Merchandise'],
    },
    {
        id: '8',
        title: 'Executive Annual Reports',
        slug: 'executive-annual-reports',
        category: 'Corporate Documents',
        client: 'Global Finance',
        year: '2025',
        description: 'Professional design for executive summaries and annual reports',
        image: '/assets/portfolio/report-1.png',
        tags: ['Reports', 'Clean Design', 'Corporate'],
        services: ['Corporate Documents'],
    },
    {
        id: '9',
        title: 'Urban Real Estate Identity',
        slug: 'urban-real-estate-identity',
        category: 'Branding',
        client: 'Urban Estates',
        year: '2024',
        description: 'Distinctive brand identity for a modern real estate firm',
        image: '/assets/portfolio/real-estate-1.png',
        tags: ['Business Cards', 'Logo', 'Real Estate'],
        services: ['Startup Solutions', 'Brand Management'],
    },
    {
        id: '10',
        title: 'Digital Safety Campaign',
        slug: 'digital-safety-campaign',
        category: 'Digital Marketing',
        client: 'SecureNet',
        year: '2024',
        description: 'Informative social media campaign focusing on digital security',
        image: '/assets/portfolio/security-1.png',
        tags: ['Social Media', 'Education', 'Campaign'],
        services: ['Social Media Management'],
    },
];

export const PORTFOLIO_CATEGORIES = [
    'All',
    'Branding',
    'Rebranding',
    'Digital Marketing',
    'Event Branding',
    'Corporate Documents',
];
