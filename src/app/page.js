import HeroSection from '@/components/ui/HeroSection';
import MissionStats from '@/components/ui/MissionStats';
import ImpactGrid from '@/components/ui/ImpactGrid';
import CtaBanner from '@/components/ui/CtaBanner';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <MissionStats />
      <ImpactGrid />
      <CtaBanner />
    </div>
  );
}