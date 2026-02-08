import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | NEX101',
    description: 'Terms of Service for NEX101.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-6 py-24 min-h-screen">
            <h1 className="text-4xl md:text-5xl font-monumental mb-8">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none font-figtree">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <h2>1. Introduction</h2>
                <p>Welcome to NEX101. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>

                <h2>2. Intellectual Property</h2>
                <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.</p>

                <h2>3. Use of Services</h2>
                <p>You agreed to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>

                <h2>4. changes to Terms</h2>
                <p>NEX101 reserves the right to change these terms at any time. Your continued use of the site will signify your acceptance of any adjustment to these terms.</p>

                <h2>5. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us.</p>
            </div>
        </div>
    );
}
