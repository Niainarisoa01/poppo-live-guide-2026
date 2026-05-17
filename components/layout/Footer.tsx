import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-grid">
          
          {/* Section Invite Agent */}
          <div className="footer-card invite-agent-card">
            <h3>🤝 Invite Agent (Level 5+)</h3>
            <p>
              Copy the link to invite the agent. After the agency application has been approved successfully, you will enjoy the commission for the earnings of the invite agent.
            </p>
            <a 
              href="https://h5.vshowapi.com/guild/agency_invite/register?inviter_id=74202178&c=poppo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Devenir / Inviter un Agent
            </a>
            <p className="footer-subtext">Contact the staff for the latest Invite Agent Policy.</p>
          </div>

          {/* Section Navigation & Contact */}
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation Rapide</h4>
              <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/sections/introduction">Introduction</Link></li>
                <li><Link href="/sections/inscription-configuration">Inscription</Link></li>
                <li><Link href="/sections/gagner-argent-agent">Espace Agent</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact & Support</h4>
              <p>Une question ou besoin d'aide pour votre inscription ?</p>
              <ul>
                <li>📧 <strong>Email :</strong> contact@poppo-live-guide.com</li>
                <li>💬 <strong>WhatsApp :</strong> +261 34 00 000 00 <span style={{fontSize: '0.8rem', opacity: 0.7}}>(Remplacer par votre numéro)</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Poppo Live Guide 2026. Tous droits réservés.</p>
          <p className="footer-disclaimer">Ce site est un guide indépendant et n'est pas affilié officiellement à Poppo Live.</p>
        </div>
      </div>
    </footer>
  );
}
