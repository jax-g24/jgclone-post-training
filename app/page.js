'use client';

import { useState, useEffect, useRef } from 'react';
import PdfSlides from './components/PdfSlides';
import { useModule } from './components/ModuleContext';
import SyllabusContent from './components/SyllabusContent';
import CalendarContent from './components/CalendarContent';
import ProjectsContent from './components/ProjectsContent';
import AboutContent from './components/AboutContent';

const overlayLabels = {
  syllabus: 'Syllabus',
  calendar: 'Calendar',
  projects: 'Projects',
  about: 'About',
};

const overlayComponents = {
  syllabus: SyllabusContent,
  calendar: CalendarContent,
  projects: ProjectsContent,
  about: AboutContent,
};

export default function HomePage() {
  const [activeModule, setActiveModule] = useState(null);
  const { activeModuleTitle, setActiveModuleTitle, activeOverlay, setActiveOverlay } = useModule();

  const tiles = [
    {
      title: 'Fundamentals',
      image: '/assets/images/What we owe machines-lecture.png',
      slides: '/assets/slides/Lecture1-BuildingThoughtfulAISystems.pdf',
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
      overlay: 'calendar',
    },
    {
      title: 'About',
      image: '/assets/images/RLHF and Reward Learning.jpg',
      overlay: 'about',
    },
  ];

  const handleTileClick = (e, tile, index) => {
    e.preventDefault();
    if (tile.overlay) {
      setActiveOverlay(tile.overlay);
      return;
    }
    if (tile.slides || tile.recording) {
      setActiveModule(index);
    }
  };

  const active = activeModule !== null ? tiles[activeModule] : null;

  useEffect(() => {
    setActiveModuleTitle(active ? active.title : null);
  }, [active, setActiveModuleTitle]);

  // Close module panel when nav clears the module title externally
  const prevModuleTitle = useRef(activeModuleTitle);
  useEffect(() => {
    // Only close if title went from something to null (external clear)
    if (prevModuleTitle.current && !activeModuleTitle && activeModule !== null) {
      setActiveModule(null);
    }
    prevModuleTitle.current = activeModuleTitle;
  }, [activeModuleTitle, activeModule]);

  const isOverlayOpen = !!activeOverlay;
  const OverlayComponent = activeOverlay ? overlayComponents[activeOverlay] : null;

  return (
    <div className="home-canvas">
      {/* Scrollable home content */}
      <div className={`home-page ${activeModule !== null || isOverlayOpen ? 'out' : ''}`}>
        <header className="home-header">
          <span className="home-logo-text">Post Training</span>
        </header>

<section className="home-modules">
          <div className="tile-grid">
            {tiles.map((tile, i) => (
              <a
                key={i}
                href="#"
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

      {/* Page overlay */}
      <div className={`page-overlay ${isOverlayOpen ? 'open' : ''}`}>
        <button className="detail-back" onClick={() => setActiveOverlay(null)}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {activeOverlay ? overlayLabels[activeOverlay] : ''}
        </button>
        <div className="detail-glass overlay-content-glass">
          {OverlayComponent && <OverlayComponent />}
        </div>
      </div>
    </div>
  );
}
