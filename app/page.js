'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
  {
    category: 'Videos',
    items: [
      { type: 'video', title: 'Deep Dive into LLMs like ChatGPT', author: 'Andrej Karpathy', year: '2025', url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI', thumb: 'https://img.youtube.com/vi/7xTGNNLPyMI/maxresdefault.jpg' },
      { type: 'video', title: 'How I Use LLMs', author: 'Andrej Karpathy', year: '2025', url: 'https://www.youtube.com/watch?v=EWvNQjAaOHw', thumb: 'https://img.youtube.com/vi/EWvNQjAaOHw/maxresdefault.jpg' },
      { type: 'video', title: 'Intro to Large Language Models', author: 'Andrej Karpathy', year: '2023', url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g', thumb: 'https://img.youtube.com/vi/zjkBMFhNj_g/maxresdefault.jpg' },
      { type: 'video', title: 'Let\'s reproduce GPT-2 (124M)', author: 'Andrej Karpathy', year: '2024', url: 'https://www.youtube.com/watch?v=l8pRSuU81PU', thumb: 'https://img.youtube.com/vi/l8pRSuU81PU/maxresdefault.jpg' },
      { type: 'video', title: 'Let\'s build GPT: from scratch, in code', author: 'Andrej Karpathy', year: '2023', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', thumb: 'https://img.youtube.com/vi/kCc8FmEb1nY/maxresdefault.jpg' },
    ],
  },
  {
    category: 'Papers',
    items: [
      { type: 'paper', title: 'InstructGPT', author: 'Ouyang et al.', year: '2022', url: 'https://arxiv.org/abs/2203.02155' },
      { type: 'paper', title: 'Direct Preference Optimization (DPO)', author: 'Rafailov et al.', year: '2023', url: 'https://arxiv.org/abs/2305.18290' },
      { type: 'paper', title: 'DeepSeek R1', author: 'DeepSeek-AI', year: '2025', url: 'https://arxiv.org/abs/2501.12948' },
      { type: 'paper', title: 'Reinforcement Learning from Human Feedback', author: 'Nathan Lambert', year: '2025', url: 'https://rlhfbook.com/book.pdf' },
      { type: 'paper', title: 'Open Problems and Fundamental Limitations of RLHF', author: 'Casper et al.', year: '2023', url: 'https://arxiv.org/abs/2307.15217' },
    ],
  },
  {
    category: 'Articles',
    items: [
      { type: 'article', title: 'RLHF Learning Resources', author: 'Nathan Lambert', source: 'Interconnects', url: 'https://www.interconnects.ai/p/rlhf-resources' },
      { type: 'article', title: '2025 Open Models Year in Review', author: 'Nathan Lambert', source: 'Interconnects', url: 'https://www.interconnects.ai/p/2025-open-models-year-in-review' },
      { type: 'article', title: 'The State of LLMs 2025', author: 'Sebastian Raschka', source: 'Magazine', url: 'https://magazine.sebastianraschka.com/p/state-of-llms-2025' },
      { type: 'article', title: '2025 LLM Year in Review', author: 'Andrej Karpathy', source: 'Blog', url: 'https://karpathy.bearblog.dev/year-in-review-2025/' },
      { type: 'article', title: 'Illustrating RLHF', author: 'Hugging Face', source: 'Blog', url: 'https://huggingface.co/blog/rlhf' },
      { type: 'article', title: 'RLHF 101: A Technical Tutorial', author: 'CMU ML Blog', source: 'Blog', url: 'https://blog.ml.cmu.edu/2025/06/01/rlhf-101-a-technical-tutorial-on-reinforcement-learning-from-human-feedback/' },
      { type: 'article', title: 'LLM Course (DPO/GRPO tutorials)', author: 'Maxime Labonne', source: 'GitHub', url: 'https://github.com/mlabonne/llm-course' },
    ],
  },
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
    // Only close if title went from something to null (external clear)
    if (prevModuleTitle.current && !activeModuleTitle && activeModule !== null) {
      setActiveModule(null);
    }
    prevModuleTitle.current = activeModuleTitle;
  }, [activeModuleTitle, activeModule]);

  // --- Carousel 3D scroll ---
  const carouselRefs = useRef([]);
  const scrollRafRefs = useRef([]);

  const applyCarouselTransforms = useCallback((groupIndex) => {
    const carousel = carouselRefs.current[groupIndex];
    if (!carousel) return;
    const cards = carousel.querySelectorAll('.resource-card');
    const rect = carousel.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const isMobile = window.innerWidth <= 600;
    const maxAngle = isMobile ? 12 : 30;

    cards.forEach((card) => {
      const cr = card.getBoundingClientRect();
      const cardCenter = cr.left + cr.width / 2;
      const offset = Math.max(-1, Math.min(1, (cardCenter - center) / (rect.width / 2)));
      const rotateY = -offset * maxAngle;
      const scale = 1 - Math.abs(offset) * (isMobile ? 0.03 : 0.08);
      const opacity = 1 - Math.abs(offset) * (isMobile ? 0.1 : 0.25);
      const origin = offset < 0 ? 'right center' : 'left center';
      card.style.transform = `perspective(1400px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.transformOrigin = origin;
      card.style.opacity = opacity;
    });
  }, []);

  const handleCarouselScroll = useCallback((gi) => {
    if (scrollRafRefs.current[gi]) return;
    scrollRafRefs.current[gi] = requestAnimationFrame(() => {
      scrollRafRefs.current[gi] = null;
      applyCarouselTransforms(gi);
    });
  }, [applyCarouselTransforms]);

  useEffect(() => {
    resources.forEach((_, i) => applyCarouselTransforms(i));
    const onResize = () => resources.forEach((_, i) => applyCarouselTransforms(i));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [applyCarouselTransforms]);

  const isOverlayOpen = !!activeOverlay;
  const OverlayComponent = activeOverlay ? overlayComponents[activeOverlay] : null;
  const contentRef = useRef(null);

  // Forward wheel events from anywhere on the overlay to the content column
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
      {/* Scrollable home content */}
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
          {resources.map((group, gi) => (
            <div key={gi} className="resource-category">
              <h3 className="resource-category-label">{group.category}</h3>
              <div className="resource-carousel-wrapper">
                <div
                  className="resource-carousel"
                  ref={(el) => { carouselRefs.current[gi] = el; }}
                  onScroll={() => handleCarouselScroll(gi)}
                >
                  {group.items.map((item, ii) => (
                    <a
                      key={ii}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-card"
                    >
                      <div className="tile-image">
                        {item.thumb ? (
                          <img src={item.thumb} alt={item.title} />
                        ) : (
                          <div className="resource-card-placeholder" />
                        )}
                      </div>
                      <span className="tile-label">{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
