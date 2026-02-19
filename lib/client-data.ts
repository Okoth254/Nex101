export interface Client {
    id: string;
    name: string;
    logo: string;
}

export const CLIENTS: Client[] = [
    { id: '1', name: 'Maluki Digital Media Services', logo: '/assets/clients/maluki.png' },
    { id: '2', name: 'NeXTra', logo: '/assets/clients/nextra.png' },
    { id: '3', name: 'Sauti ya Mkenya', logo: '/assets/clients/sauti-ya-mkenya.png' },
    { id: '4', name: 'Guardian Star Security Group', logo: '/assets/clients/guardian-star.png' },
    { id: '5', name: 'Kaalmo Relief and Development', logo: '/assets/clients/kaalmo.png' },
    { id: '6', name: 'Bilkheir Travel & Cargo Agency', logo: '/assets/clients/bilkheir.png' },
    { id: '7', name: 'CEFRESA', logo: '/assets/clients/cefresa.png' },
];
