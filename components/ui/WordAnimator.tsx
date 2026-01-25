'use client';
import React, { useEffect, useRef } from 'react';
import { animatedTextLines } from '@/lib/aboutConsts';

interface WordAnimatorProps {
  className?: string;
}

export function WordAnimator({ className = '' }: WordAnimatorProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[][]>([]);

  // Initialize word refs
  if (wordRefs.current.length !== animatedTextLines.length) {
    wordRefs.current = animatedTextLines.map((line) => {
      const words = line.split(' ').filter(Boolean);
      return Array(words.length).fill(null);
    });
  }

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
    <section ref={sectionRef} className={`animated-text-section ${className}`}>
      <div className="animated-text-content">
        {animatedTextLines.map((line, li) => {
          const words = line.split(' ').filter(Boolean);
          if (words.length === 0) {
            return <p key={li} className="animated-line">&nbsp;</p>;
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
          );
        })}
      </div>
    </section>
  );
}
