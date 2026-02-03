import Hero3D from '@/components/home/Hero3D';
import KineticTitle from '@/components/home/KineticTitle';
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
      <section className={styles.hero}>
        <Hero3D />
        <KineticTitle />
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
