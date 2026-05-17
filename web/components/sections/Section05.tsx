import React from 'react';
import TableBlock from '../ui/TableBlock';

export default function Section05() {
  return (
    <>
      <h2>5.1 Deux Systèmes de Progression Distincts</h2>
      <p>Poppo Live utilise <strong>deux barres de progression indépendantes</strong> :</p>
      <TableBlock
        headers={['Système', 'Pour qui', 'Alimenté par', 'Objectif']}
        rows={[
          ['<strong>Wealth Level</strong>', 'Viewers (spectateurs)', 'Coins dépensés', 'Badges, priorité, effets d\'entrée'],
          ['<strong>Livestream Level</strong>', 'Hosts (streamers)', 'Cadeaux reçus, heures de stream', 'Débloquer fonctionnalités, retraits'],
        ]}
      />

      <h2>5.2 Wealth Level (Niveau de Richesse) — Viewers</h2>
      <h3>Comment progresser</h3>
      <ul>
        <li><strong>1 Coin dépensé = 1 Wealth XP</strong></li>
        <li>Achat de cadeaux, VIP, effets spéciaux = tout compte</li>
      </ul>

      <h3>Paliers et avantages estimés</h3>
      <TableBlock
        headers={['Niveau', 'XP cumulés (Coins)', 'Avantages débloqués']}
        rows={[
          ['1-10', '0 – 5 000', 'Badge basique'],
          ['11-20', '5 000 – 50 000', 'Frame de profil, priorité chat'],
          ['21-40', '50 000 – 500 000', 'Effet d\'entrée animé'],
          ['41-60', '500 000 – 2 000 000', 'Badges premium, stickers exclusifs'],
          ['61-80', '2 000 000 – 10 000 000', 'Mode incognito, thèmes personnalisés'],
          ['81-100', '10 000 000+', 'Backstage access, meetups, priorité totale'],
        ]}
      />

      <h2>5.3 Livestream Level (Niveau Host) — Streamers</h2>
      <h3>Comment progresser</h3>
      <ul>
        <li>Recevoir des cadeaux (points générés = XP)</li>
        <li>Heures de streaming actif</li>
        <li>Participation aux PK battles</li>
        <li>Complétion des tâches du Reward Center</li>
      </ul>

      <h3>Paliers clés</h3>
      <TableBlock
        headers={['Niveau', 'Déblocage']}
        rows={[
          ['<strong>Niveau 1</strong>', 'Compte créé, accès basique'],
          ['<strong>Niveau 3</strong>', 'Accès à certaines fonctionnalités sociales'],
          ['<strong>Niveau 5</strong>', '<strong>CRITIQUE</strong> : Possibilité de passer en Live + retrait d\'argent'],
          ['<strong>Niveau 10+</strong>', 'Fonctionnalités PK avancées'],
          ['<strong>Niveau 20+</strong>', 'Analytics avancés, meilleure visibilité'],
          ['<strong>Niveau 50+</strong>', 'Perks premium, recommandation algorithme'],
        ]}
      />

      <h3>Comment atteindre rapidement le Niveau 5</h3>
      <TableBlock
        headers={['Méthode', 'Temps estimé']}
        rows={[
          ['Regarder des streams + chatter activement', '2-4 heures'],
          ['Envoyer de petits cadeaux (avec coins gratuits)', '1-2 heures'],
          ['Compléter les tâches nouveaux utilisateurs', '1-3 heures'],
          ['Combiner les trois méthodes', '<strong>30 min – 1 heure</strong>'],
        ]}
      />

      <h2>5.4 Conseils pour Progresser Vite</h2>
      <ol>
        <li><strong>Collectez les coins gratuits</strong> quotidiens (400/jour) et dépensez-les en petits cadeaux</li>
        <li><strong>Complétez toutes les tâches</strong> du Reward Center chaque jour</li>
        <li><strong>Streamez régulièrement</strong> — chaque minute de live génère de l'XP</li>
        <li><strong>Participez aux PK</strong> — même perdre donne de l'XP</li>
        <li><strong>Soyez actif en chat</strong> — les interactions comptent</li>
      </ol>
    </>
  );
}
