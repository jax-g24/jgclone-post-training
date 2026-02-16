'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useModule } from './ModuleContext';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'syllabus', label: 'Syllabus' },
  { key: 'calendar', label: 'Calendar', courseSub: true },
  { key: 'projects', label: 'Projects', courseSub: true },
  { key: 'about', label: 'About', courseSub: true },
];

export default function BottomNav() {
  const { activeModuleTitle, setActiveModuleTitle, activeOverlay, setActiveOverlay } = useModule();
  const pillRef = useRef(null);
  const linkRefs = useRef({});
  const moduleRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const rafRef = useRef(null);
  const [transitioning, setTransitioning] = useState(false);

  const isModuleActive = !!activeModuleTitle;
  const activeKey = activeOverlay || (isModuleActive ? null : 'home');

  const measure = useCallback(() => {
    if (!pillRef.current) return;
    const pillRect = pillRef.current.getBoundingClientRect();

    let target = null;
    if (isModuleActive && moduleRef.current) {
      target = moduleRef.current;
    } else if (activeKey && linkRefs.current[activeKey]) {
      target = linkRefs.current[activeKey];
    }

    if (target) {
      const rect = target.getBoundingClientRect();
      setIndicator({
        left: rect.left - pillRect.left,
        width: rect.width,
        opacity: 1,
      });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [isModuleActive, activeKey]);

  // Continuously measure during module open/close animation
  useEffect(() => {
    setTransitioning(true);
    let running = true;
    const tick = () => {
      if (!running) return;
      measure();
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    // Stop after animation settles
    const timer = setTimeout(() => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setTransitioning(false);
    }, 1200);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, [isModuleActive, activeKey, measure]);

  // Also measure on resize
  useEffect(() => {
    const ro = new ResizeObserver(() => measure());
    if (pillRef.current) ro.observe(pillRef.current);
    return () => ro.disconnect();
  }, [measure]);

  const handleLinkClick = (key) => {
    if (key === 'home') {
      setActiveModuleTitle(null);
      setActiveOverlay(null);
    } else {
      setActiveModuleTitle(null);
      setActiveOverlay(key);
    }
  };

  return (
    <nav className="bottom-nav">
      <div className={`bottom-nav-pill ${isModuleActive ? 'has-module' : ''} ${activeOverlay ? 'expanded' : ''}`} ref={pillRef}>
        <div
          className={`bottom-nav-indicator ${transitioning ? 'animating' : ''}`}
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: indicator.width,
            opacity: indicator.opacity,
          }}
        />
        <div className={`bottom-nav-module ${isModuleActive ? 'open' : ''}`}>
          <span className="bottom-nav-module-label" ref={moduleRef}>{activeModuleTitle}</span>
        </div>
        {links.map(({ key, label, courseSub }) => (
          <button
            key={key}
            ref={(el) => { linkRefs.current[key] = el; }}
            className={`bottom-nav-link ${key === activeKey && !isModuleActive ? 'active' : ''} ${courseSub ? 'course-sub' : ''}`}
            onClick={() => handleLinkClick(key)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
