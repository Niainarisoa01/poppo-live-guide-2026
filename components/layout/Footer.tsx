import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-grid">
          
          {/* Section Invite Agent */}
          <div className="footer-card invite-agent-card">
            <h3>🤝 Programme Agent (Niveau 5+)</h3>
            <p>
              Débloquez une nouvelle source de revenus ! Invitez de nouveaux agents et touchez une <strong>commission permanente</strong> sur tous leurs gains une fois leur agence approuvée.
            </p>
            <a 
              href="https://h5.vshowapi.com/guild/agency_invite/register?inviter_id=74202178&c=poppo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Devenir Agent / Parrainer
            </a>
            <p className="footer-subtext">Contactez-nous pour connaître les détails de la politique de commissions.</p>
          </div>

          {/* Section Navigation */}
          <div className="footer-nav">
            <h4>Navigation Rapide</h4>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/sections/introduction">Introduction</Link></li>
              <li><Link href="/sections/inscription-configuration">Inscription</Link></li>
              <li><Link href="/sections/gagner-argent-agent">Espace Agent</Link></li>
            </ul>
          </div>
          
          {/* Section Contact */}
          <div className="footer-contact">
            <h4>Contact & Support</h4>
            <p>Une question ou besoin d'aide pour votre inscription ?</p>
            <ul>
              <li>📧 <strong>Email :</strong> guide.poppo.live@gmail.com</li>
              <li>💬 <strong>WhatsApp :</strong> +261 34 48 252 85</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Poppo Live Guide. Tous droits réservés.</p>
          <p className="footer-disclaimer">Ce site est un guide indépendant et n'est pas affilié officiellement à Poppo Live.</p>
        </div>
      </div>
    </footer>
  );
}
