import Link from 'next/link';
import { sections } from '@/lib/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">📱 Guide Officiel 2026</div>
          <h1>Poppo Live</h1>
          <p className="hero-subtitle">
            Le guide le plus complet pour maîtriser Poppo Live — Devenez Host, Agent, ou optimisez votre expérience de Viewer. 18 sections, zéro zone d&apos;ombre.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">70%</div>
              <div className="hero-stat-label">Rétention Host</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">10$</div>
              <div className="hero-stat-label">Retrait minimum</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">4-20%</div>
              <div className="hero-stat-label">Commission Agent</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">18</div>
              <div className="hero-stat-label">Sections complètes</div>
            </div>
          </div>

          <div className="hero-buttons">
            <Link href="/sections/introduction" className="hero-cta">
              Commencer le Guide →
            </Link>
            <a 
              href="https://h5.vshowapi.com/guild/agency_invite/register?inviter_id=74202178&c=poppo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-cta hero-cta-secondary"
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
                <span>🎁 Cliquez ici pour vous inscrire</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 'normal', opacity: 0.9, marginTop: '2px' }}>Bonus d'inscription gratuit !</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="hero-sections">
        <h2 className="hero-sections-title">📖 Sommaire du Guide</h2>
        <p className="hero-sections-sub">18 sections couvrant tous les aspects de Poppo Live</p>

        <div className="sections-grid">
          {sections.map((s) => (
            <Link key={s.slug} href={`/sections/${s.slug}`} className="section-card">
              <div className="section-card-icon">{s.icon}</div>
              <div>
                <div className="section-card-num">Section {s.num}</div>
                <div className="section-card-title">{s.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Guide Poppo Live 2026 — Documentation complète et à jour</p>
      </footer>
    </>
  );
}
