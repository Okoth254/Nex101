import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | NEX101',
    description: 'Privacy Policy for NEX101.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-6 py-24 min-h-screen">
            <h1 className="text-4xl md:text-5xl font-monumental mb-8">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none font-figtree">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.</p>

                <h2>2. How We Use Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect NEX101 and our users.</p>

                <h2>3. Sharing of Information</h2>
                <p>We do not share your personal information with third parties except as described in this privacy policy.</p>

                <h2>4. Security</h2>
                <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

                <h2>5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </div>
        </div>
    );
}
