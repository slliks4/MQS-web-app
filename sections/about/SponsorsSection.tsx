import Image from 'next/image';
import { sponsors } from '@/lib/aboutConsts';

export function SponsorsSection() {
  return (
    <section className="sponsors-section">
      <h2>Our Sponsors</h2>
      <div className="sponsors-container">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            className="sponsor-logo-wrapper"
            href={sponsor.link}
            target="_blank"
            rel="noreferrer"
          >
            <div style={{ width: '100%', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={120}
                height={60}
                className="sponsors-image"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
