'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { href: '/syllabus', label: 'Syllabus' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [menuOpen, closeMenu]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <nav className="top-nav">
      <Link href="/" className="nav-logo">Post Training</Link>
      <button
        className={`nav-toggle${menuOpen ? ' active' : ''}`}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span className="hamburger"></span>
      </button>
      <div className={`nav-links${menuOpen ? ' active' : ''}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${pathname === href ? ' active' : ''}`}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
