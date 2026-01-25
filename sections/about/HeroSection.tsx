'use client';
import React, { useEffect, useState } from 'react';
import { HERO_VIDEO_SRC, JOIN_FORM_URL } from '@/lib/aboutConsts';

export function HeroSection() {
  const [showHeroText, setShowHeroText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeroText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main-title-container">
        <h1 className="main-title">MUN QUANT SOCIETY</h1>
        <a
          href={JOIN_FORM_URL}
          className="nav-link join-us hero-join-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: '1rem', marginBottom: '0.5rem' }}
        >
          JOIN US
        </a>
        <p className="scroll-prompt">scroll down</p>
      </div>
      <div className={`hero-bottom-text ${showHeroText ? 'visible' : ''}`}>
        <h1>Shaping Future Talent</h1>
        <p>Quants | SDEs | Analysts</p>
      </div>
    </section>
  );
}
