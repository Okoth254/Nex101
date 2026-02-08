import KineticTypography from '@/components/home/KineticTypography';
import TrustBar from '@/components/home/TrustBar';
import GapSection from '@/components/home/GapSection';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import ImpactStats from '@/components/home/ImpactStats';
import CTASection from '@/components/home/CTASection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero} style={{ height: '100vh', overflow: 'hidden' }}>
        <KineticTypography />
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Gap Section */}
      <GapSection />

      {/* Services Teaser */}
      <ServicesTeaser />

      {/* Impact Stats */}
      <ImpactStats />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
