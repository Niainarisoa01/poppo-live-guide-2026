import React from 'react';
import Link from 'next/link';
import { SectionData } from '@/lib/sections';

interface SectionNavProps {
  prev?: SectionData;
  next?: SectionData;
}

export default function SectionNav({ prev, next }: SectionNavProps) {
  return (
    <nav className="section-nav">
      {prev ? (
        <Link href={`/sections/${prev.slug}`} className="section-nav-btn prev">
          <span className="section-nav-label">← Précédent</span>
          <span className="section-nav-title">{prev.icon} {prev.title}</span>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={`/sections/${next.slug}`} className="section-nav-btn next">
          <span className="section-nav-label">Suivant →</span>
          <span className="section-nav-title">{next.icon} {next.title}</span>
        </Link>
      ) : (
        <Link href="/" className="section-nav-btn next">
          <span className="section-nav-label">Retour</span>
          <span className="section-nav-title">🏠 Accueil</span>
        </Link>
      )}
    </nav>
  );
}
