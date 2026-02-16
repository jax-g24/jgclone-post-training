'use client';

import { usePathname } from 'next/navigation';
import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useModule } from './ModuleContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/syllabus', label: 'Syllabus' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { activeModuleTitle } = useModule();
  const pillRef = useRef(null);
  const linkRefs = useRef({});
  const moduleRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const rafRef = useRef(null);

  const isModuleActive = !!activeModuleTitle;
  const activeHref = links.find((l) => l.href === pathname)?.href || null;

  const measure = useCallback(() => {
    if (!pillRef.current) return;
    const pillRect = pillRef.current.getBoundingClientRect();

    let target = null;
    if (isModuleActive && moduleRef.current) {
      target = moduleRef.current;
    } else if (activeHref && linkRefs.current[activeHref]) {
      target = linkRefs.current[activeHref];
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
  }, [isModuleActive, activeHref]);

  // Continuously measure during module open/close animation
  useEffect(() => {
    let running = true;
    const tick = () => {
      if (!running) return;
      measure();
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    // Stop after animation settles (1.2s)
    const timer = setTimeout(() => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }, 1200);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, [isModuleActive, activeHref, measure]);

  // Also measure on resize
  useEffect(() => {
    const ro = new ResizeObserver(() => measure());
    if (pillRef.current) ro.observe(pillRef.current);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <nav className="bottom-nav">
      <div className={`bottom-nav-pill ${isModuleActive ? 'has-module' : ''}`} ref={pillRef}>
        <div
          className="bottom-nav-indicator"
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: indicator.width,
            opacity: indicator.opacity,
          }}
        />
        <div className={`bottom-nav-module ${isModuleActive ? 'open' : ''}`}>
          <span className="bottom-nav-module-label" ref={moduleRef}>{activeModuleTitle}</span>
        </div>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            ref={(el) => { linkRefs.current[href] = el; }}
            className={`bottom-nav-link ${pathname === href && !(href === '/' && isModuleActive) ? 'active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
