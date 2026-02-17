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

const resources = [
  { type: 'paper', title: 'InstructGPT', author: 'Ouyang et al.', year: '2022', url: 'https://arxiv.org/abs/2203.02155' },
  { type: 'paper', title: 'Direct Preference Optimization (DPO)', author: 'Rafailov et al.', year: '2023', url: 'https://arxiv.org/abs/2305.18290' },
  { type: 'paper', title: 'DeepSeek R1', author: 'DeepSeek-AI', year: '2025', url: 'https://arxiv.org/abs/2501.12948' },
  { type: 'paper', title: 'Reinforcement Learning from Human Feedback', author: 'Nathan Lambert', year: '2025', url: 'https://rlhfbook.com/book.pdf' },
  { type: 'paper', title: 'Open Problems and Fundamental Limitations of RLHF', author: 'Casper et al.', year: '2023', url: 'https://arxiv.org/abs/2307.15217' },
  { type: 'article', title: 'RLHF Learning Resources', author: 'Nathan Lambert', url: 'https://www.interconnects.ai/p/rlhf-resources' },
  { type: 'article', title: '2025 Open Models Year in Review', author: 'Nathan Lambert', url: 'https://www.interconnects.ai/p/2025-open-models-year-in-review' },
  { type: 'article', title: 'The State of LLMs 2025', author: 'Sebastian Raschka', url: 'https://magazine.sebastianraschka.com/p/state-of-llms-2025' },
  { type: 'article', title: '2025 LLM Year in Review', author: 'Andrej Karpathy', url: 'https://karpathy.bearblog.dev/year-in-review-2025/' },
  { type: 'article', title: 'Illustrating RLHF', author: 'Hugging Face', url: 'https://huggingface.co/blog/rlhf' },
  { type: 'article', title: 'RLHF 101: A Technical Tutorial', author: 'CMU ML Blog', url: 'https://blog.ml.cmu.edu/2025/06/01/rlhf-101-a-technical-tutorial-on-reinforcement-learning-from-human-feedback/' },
  { type: 'article', title: 'LLM Course (DPO/GRPO tutorials)', author: 'Maxime Labonne', url: 'https://github.com/mlabonne/llm-course' },
];

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

        <section className="resources-section">
          <h2 className="resources-heading">Resources</h2>
          <div className="resources-grid">
            {resources.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <div className="resource-card-inner">
                  <span className="resource-card-type">{item.type}</span>
                  <span className="resource-card-title">{item.title}</span>
                  <span className="resource-card-author">{item.author}</span>
                </div>
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
