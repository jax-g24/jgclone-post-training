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
;

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
    { title: 'InstructGPT', url: 'https://arxiv.org/abs/2203.02155' },
    { title: 'Direct Preference Optimization (DPO)', url: 'https://arxiv.org/abs/2305.18290' },
    { title: 'DeepSeek R1', url: 'https://arxiv.org/abs/2501.12948' },
    { title: 'RLHF (Lambert)', url: 'https://rlhfbook.com/book.pdf' },
    { title: 'Open Problems in RLHF', url: 'https://arxiv.org/abs/2307.15217' },
    { title: 'RLHF Learning Resources', url: 'https://www.interconnects.ai/p/rlhf-resources' },
    { title: '2025 Open Models Review', url: 'https://www.interconnects.ai/p/2025-open-models-year-in-review' },
    { title: 'State of LLMs 2025', url: 'https://magazine.sebastianraschka.com/p/state-of-llms-2025' },
    { title: '2025 LLM Year in Review', url: 'https://karpathy.bearblog.dev/year-in-review-2025/' },
    { title: 'Illustrating RLHF', url: 'https://huggingface.co/blog/rlhf' },
    { title: 'RLHF 101: A Technical Tutorial', url: 'https://blog.ml.cmu.edu/2025/06/01/rlhf-101-a-technical-tutorial-on-reinforcement-learning-from-human-feedback/' },
    { title: 'LLM Course (DPO/GRPO)', url: 'https://github.com/mlabonne/llm-course' },
  ];

  const handleTileClick = (e, tile, index) => {
    if (tile.url) return; // let the native link handle it
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
    if (prevModuleTitle.current && !activeModuleTitle && activeModule !== null) {
      setActiveModule(null);
    }
    prevModuleTitle.current = activeModuleTitle;
  }, [activeModuleTitle, activeModule]);

  const isOverlayOpen = !!activeOverlay;
  const OverlayComponent = activeOverlay ? overlayComponents[activeOverlay] : null;
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOverlayOpen) return;
    const handleWheel = (e) => {
      const content = contentRef.current;
      if (!content) return;
      if (!content.contains(e.target)) {
        content.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isOverlayOpen]);

  return (
    <div className="home-canvas">
      <div className={`home-page ${activeModule !== null ? 'out' : ''} ${isOverlayOpen ? 'dimmed' : ''}`}>
        <header className="home-header">
          <span className="home-logo-text">Post Training</span>
        </header>

        <section className="home-modules">
          <div className="tile-grid">
            {tiles.map((tile, i) => (
              <a
                key={i}
                href={tile.url || '#'}
                className="tile"
                onClick={(e) => handleTileClick(e, tile, i)}
                {...(tile.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="tile-image">
                  {tile.image
                    ? <img src={tile.image} alt={tile.title} />
                    : <div className="tile-placeholder" />}
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

      {/* Page overlay popup */}
      {isOverlayOpen && (
        <div className="page-overlay open" data-overlay={activeOverlay}>
          <div className="page-overlay-backdrop" onClick={() => setActiveOverlay(null)} />
          <div className="page-overlay-inner">
            <button className="overlay-close" onClick={() => setActiveOverlay(null)}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="page-overlay-sidebar">
              <div className="page-overlay-sidebar-inner">
                <h1 className="page-overlay-branding">Building Thoughtful AI Systems</h1>
                <p className="page-overlay-meta">CDSS 94 · Spring 2026 · Mondays, 5–7:30 PM</p>
                <p className="page-overlay-desc">
                  A rigorous, hands-on exploration of post-training — how we shape model behavior
                  through reinforcement learning, align objectives, design reward functions, build
                  evaluations, and turn foundation models into reliable, useful AI systems.
                </p>
                <div className="page-overlay-staff">
                  <a href="https://x.com/karinanguyen_" target="_blank" rel="noopener noreferrer" className="page-overlay-staff-member">
                    <img src="/assets/images/karina.jpeg" alt="Karina Nguyen" />
                    <span>Karina Nguyen</span>
                  </a>
                  <a href="https://x.com/KJHMiao" target="_blank" rel="noopener noreferrer" className="page-overlay-staff-member">
                    <img src="/assets/images/kevin.png" alt="Kevin Miao" />
                    <span>Kevin Miao</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="page-overlay-content" ref={contentRef}>
              {OverlayComponent && <OverlayComponent />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
