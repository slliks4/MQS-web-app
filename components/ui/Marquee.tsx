'use client';
import React from 'react';
import Image from 'next/image';

interface MarqueeItem {
  logo: string;
  alt: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  containerClassName?: string;
  imageClassName?: string;
}

export function Marquee({ 
  items, 
  containerClassName = 'fadeout-horizontal',
  imageClassName = 'marquee-image'
}: MarqueeProps) {
  return (
    <div className={`marquee-container ${containerClassName}`}>
      <div className="marquee-track">
        {Array(4)
          .fill(items)
          .flat()
          .map((item, index) => (
            <div key={index} className="marquee-item">
              <div className="marquee-content">
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={120}
                    height={60}
                    className={imageClassName}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
