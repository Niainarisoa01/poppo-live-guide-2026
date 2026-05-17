'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sections } from '@/lib/sections';

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentSlug = pathname.startsWith('/sections/')
    ? pathname.replace('/sections/', '')
    : '';

  return (
    <>
      {/* Mobile Header */}
      <header className="mobile-header">
        <button className="hamburger" onClick={() => setOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <span className="mobile-title"><img src="/logo-Poppo.webp" alt="Poppo Live" style={{ width: '24px', height: '24px', borderRadius: '6px' }} /> Poppo Live Guide</span>
      </header>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <Link href="/" className="sidebar-logo" onClick={() => setOpen(false)}>
          <img src="/logo-Poppo.webp" alt="Poppo Live" className="sidebar-logo-icon" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
          <div>
            <div className="sidebar-logo-text">Poppo Live</div>
            <div className="sidebar-logo-sub">Guide Complet 2026</div>
          </div>
        </Link>

        <nav className="sidebar-nav">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/sections/${s.slug}`}
              className={`sidebar-link ${currentSlug === s.slug ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="sidebar-link-icon">{s.icon}</span>
              <span className="sidebar-link-text">{s.shortTitle}</span>
              <span className="sidebar-link-num">{s.num}</span>
            </Link>
          ))}
        </nav>

        <div className="footer">
          Guide Poppo Live © 2026
        </div>
      </aside>
    </>
  );
}
