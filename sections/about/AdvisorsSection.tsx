import { Marquee } from '@/components/ui/Marquee';
import { advisors } from '@/lib/aboutConsts';

export function AdvisorsSection() {
  return (
    <section className="marquee-section">
      <h2>Our Advisors Have Worked At</h2>
      <Marquee items={advisors} />
    </section>
  );
}
