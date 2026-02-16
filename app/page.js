'use client';

import { useState, useEffect } from 'react';
import PdfSlides from './components/PdfSlides';
import { useModule } from './components/ModuleContext';

export default function HomePage() {
  const [activeModule, setActiveModule] = useState(null);
  const { setActiveModuleTitle } = useModule();

  const tiles = [
    {
      title: 'Fundamentals',
      image: '/assets/images/What we owe machines.jpeg',
      slides: '/assets/slides/WhatWeOweMachines.pdf',
      recording: 'https://player.mediadelivery.net/embed/593384/9d2a9eb8-f376-448f-b346-1047f83c2252',
    },
    {
      title: 'Post-Training',
      image: '/assets/images/posttraining-foundations.jpg',
      slides: null,
      recording: null,
    },
    {
      title: 'Reasoning & Agents',
      image: '/assets/images/Alignment Methods & Model Behavior.jpg',
      slides: null,
      recording: null,
    },
    {
      title: 'Product & Research',
      image: '/assets/images/Evals as Research.jpg',
      slides: null,
      recording: null,
    },
    {
      title: 'Calendar',
      image: '/assets/images/The Lifecycle of a Language Model.jpg',
      href: '/calendar',
    },
    {
      title: 'About',
      image: '/assets/images/RLHF and Reward Learning.jpg',
      href: '/about',
    },
  ];

  const handleTileClick = (e, tile, index) => {
    if (tile.href) return;
    e.preventDefault();
    if (tile.slides || tile.recording) {
      setActiveModule(index);
    }
  };

  const active = activeModule !== null ? tiles[activeModule] : null;

  useEffect(() => {
    setActiveModuleTitle(active ? active.title : null);
  }, [active, setActiveModuleTitle]);

  return (
    <div className="home-canvas">
      {/* Scrollable home content */}
      <div className={`home-page ${activeModule !== null ? 'out' : ''}`}>
        <header className="home-header">
          <span className="home-logo-text">Post Training</span>
        </header>

<section className="home-modules">
          <div className="tile-grid">
            {tiles.map((tile, i) => (
              <a
                key={i}
                href={tile.href || '#'}
                className="tile"
                onClick={(e) => handleTileClick(e, tile, i)}
              >
                <div className="tile-image">
                  <img src={tile.image} alt={tile.title} />
                </div>
                <span className="tile-label">{tile.title}</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Module detail card */}
      <div className={`module-detail ${activeModule !== null ? 'open' : ''}`}>
        {active && (
          <>
            <button className="detail-back" onClick={() => setActiveModule(null)}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {active.title}
            </button>

            {active.slides && (
              <div className="detail-glass">
                <PdfSlides src={active.slides} />
              </div>
            )}

            {active.recording && (
              <div className="detail-glass">
                <div className="detail-embed">
                  <iframe
                    src={active.recording}
                    title="Recording"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
