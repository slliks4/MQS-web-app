'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './style.css';
import {
  HERO_VIDEO_SRC,
  JOIN_FORM_URL,
  METABASE_URL,
  animatedTextLines,
  sponsors,
  advisors,
  panels,
} from '@/lib/aboutConsts';


export default function AboutPage() {
    const sectionRef = useRef<HTMLElement>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[][]>([]);
    const [showHeroText, setShowHeroText] = useState(false);

    // Initialize word refs
    if (wordRefs.current.length !== animatedTextLines.length) {
        wordRefs.current = animatedTextLines.map((line) => { 
            const words = line.split(' ').filter(Boolean)
            return Array(words.length).fill(null);
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => setShowHeroText(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handler = () => {
            if (!sectionRef.current) return;
            const { top } = sectionRef.current.getBoundingClientRect();
            const vh = window.innerHeight;
            const progress = Math.min(1, Math.max(0, (vh * 0.75 - top) / (vh * 0.75)));

            const totalWords = wordRefs.current.flat().length;
            const revealUpto = Math.floor(progress * totalWords);

            let idx = 0;
            wordRefs.current.forEach((line) =>
                line.forEach((span) => {
                    if (span) {
                        const on = idx < revealUpto;
                        span.style.opacity = on ? '1' : '.25';
                        span.style.color = on ? '#ffffff' : '#aaa';
                    }
                    idx++;
                })
            );
        };

        handler();
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
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

            {/* Animated Text */}
            <section ref={sectionRef} className="animated-text-section">
                <div className="animated-text-content">
                    {animatedTextLines.map((line, li) => {
                        const words = line.split(' ').filter(Boolean);
                        if (words.length ===0) {
                            return (
                                <p key={li} className="animated-line">
                                    &nbsp;
                                </p>
                            )
                        }

                            return (
                                <p key={li} className="animated-line">
                                    {words.map((word, wi, arr) => (
                                        <React.Fragment key={wi}>
                                            <span
                                                ref={(el: HTMLSpanElement | null) => {
                                                    wordRefs.current[li][wi] = el;
                                                }}
                                                className="animated-word"
                                            >
                                                {word}
                                            </span>
                                            {wi < arr.length - 1 && ' '}
                                        </React.Fragment>
                                    ))}
                                </p>
                            )    
                        })} 
                </div>
            </section>

            {/* Sponsors */}
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

            {/* Advisors */}
            <section className="marquee-section">
                <h2>Our Advisors Have Worked At</h2>
                <div className="marquee-container fadeout-horizontal">
                    <div className="marquee-track">
                        {/* Generate 4 copies of the advisors array for seamless loop */}
                        {[...advisors, ...advisors, ...advisors, ...advisors].map((advisor, index) => (
                            <div key={index} className="marquee-item">
                                <div className="marquee-content">
                                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            src={advisor.logo}
                                            alt={advisor.alt}
                                            width={120}
                                            height={60}
                                            className="marquee-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metabase Embed */}
            <section className="metabase-section">
                <div className="metabase-container">
                    <iframe
                        className="metabase-iframe"
                        src={METABASE_URL}
                        frameBorder={0}
                    ></iframe>
                </div>
            </section>

            {/* Panels */}
            {panels.map(({ title, txt, img }) => (
                <section
                    key={title}
                    className="full-image-section"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="overlay-content">
                        <h2>{title}</h2>
                        <div className="panel-text">{txt}</div>
                    </div>
                </section>
            ))}
        </div>
    );
}
