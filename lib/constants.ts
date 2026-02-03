// Application constants

// NEX101 Brand Colors (from color palette)
export const COLORS = {
    primary: '#CE0054',
    dark: '#4C0224',
    gold: '#E29D23',
    navy: '#24395B',
    white: '#ffffff',
    black: '#171717',
} as const;

// Contact Information
export const CONTACT = {
    phone: ['0799501465', '0798721441'],
    email: {
        general: 'info@nex101.com', // Placeholder
        support: 'support@nex101.com', // Placeholder
    },
    location: {
        building: 'KTDA Farmers Building',
        street: 'Moi Avenue',
        floor: '3rd Floor',
        suite: 'Suite 303',
        full: 'KTDA Farmers Building, Moi Avenue, 3rd Floor, Suite 303',
    },
    social: {
        facebook: '@nex101hub',
        instagram: '@nex101hub',
        tiktok: '@nex101hub',
        linkedin: 'NEX101',
    },
} as const;

// Services list
export const SERVICES = [
    {
        id: 'startup-solutions',
        name: 'Startup Solutions',
        slug: 'startup-solutions',
        icon: '🚀',
    },
    {
        id: 'creative-partnership',
        name: 'Creative Partnership',
        slug: 'creative-partnership',
        icon: '🤝',
    },
    {
        id: 'corporate-documents',
        name: 'Corporate Digital Documents',
        slug: 'corporate-documents',
        icon: '📄',
    },
    {
        id: 'social-media',
        name: 'Social Media Management',
        slug: 'social-media',
        icon: '📱',
    },
    {
        id: 'brand-management',
        name: 'Brand Management',
        slug: 'brand-management',
        icon: '👑',
    },
    {
        id: 'branding-merchandise',
        name: 'Branding & Merchandise',
        slug: 'branding-merchandise',
        icon: '👕',
    },
    {
        id: 'consultancy',
        name: 'Strategic Consultancy',
        slug: 'consultancy',
        icon: '💡',
    },
    {
        id: 'development-services',
        name: 'Development Services',
        slug: 'development-services',
        icon: '💻',
    },
] as const;

// Impact statistics
export const IMPACT_STATS = {
    brandsLaunched: 200,
    partnerships: 15,
    socialAccounts: 5,
    companyProfiles: 50,
    executiveReports: 20,
    businessesTransformed: 12,
    largeScaleEvents: 2,
} as const;

// Animation timing
export const SCROLL_THRESHOLD = 0.3; // Percentage of element visible before animating
export const PARALLAX_SPEED = 0.5; // Parallax scroll speed multiplier
