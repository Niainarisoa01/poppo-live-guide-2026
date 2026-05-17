import React from 'react';
import TableBlock from '../ui/TableBlock';

export default function Section14() {
  return (
    <>
      <h2>14.1 Le Principe de Tolérance Zéro</h2>
      <p>Poppo Live utilise des algorithmes d'IA très stricts couplés à une équipe de modération humaine 24/7. <strong>Toute violation grave entraîne un banissement immédiat et permanent, sans possibilité d'appel.</strong></p>

      <h2>14.2 Les Interdictions Majeures (Ban Permanent Assuré)</h2>
      <TableBlock
        headers={['Violation', 'Explication', 'Conséquence']}
        rows={[
          ['<strong>1. Chargeback Bancaire</strong>', 'Annuler l\'achat de Coins via votre banque.', '<strong>Ban permanent de TOUS vos comptes liés.</strong> Poppo considère cela comme du vol. Aucun appel possible.'],
          ['<strong>2. Nudité / Contenu Sexuel</strong>', 'Tenues jugées indécentes, actes sexuels suggérés ou explicites.', 'Coupure immédiate du live + Ban permanent.'],
          ['<strong>3. Présence de Mineurs</strong>', 'Streaming avec des enfants (<18 ans) à l\'écran, même "pour s\'amuser".', 'Ban permanent (politique stricte de protection de l\'enfance).'],
          ['<strong>4. Multi-Comptes / Faux Comptes</strong>', 'Créer plusieurs comptes pour s\'envoyer des cadeaux ou gonfler ses vues.', 'L\'IP et l\'appareil sont bannis (Device Ban).'],
          ['<strong>5. Utilisation d\'Apps Modifiées</strong>', 'Utiliser un "mod APK" ou des logiciels tiers de triche.', 'Ban permanent + suspension des fonds.'],
          ['<strong>6. Fausse Identité (KYC)</strong>', 'Utiliser la carte d\'identité ou la photo de quelqu\'un d\'autre pour le Face Auth.', 'Rejet définitif de la vérification + Ban.'],
          ['<strong>7. Arnaques aux Recharges (Fake Recharge)</strong>', 'Participer, promouvoir ou initier des arnaques promettant de fausses recharges de Coins (détection IA renforcée en 2026).', 'Ban permanent immédiat.'],
        ]}
      />

      <h2>14.3 Les Interdictions Commerciales (Pour les Agents & Hosts)</h2>
      <TableBlock
        headers={['Violation', 'Explication', 'Conséquence']}
        rows={[
          ['<strong>1. Braconnage (Poaching)</strong>', 'Un agent essaie de convaincre les hosts d\'une autre agence de rejoindre la sienne.', 'Avertissement sévère puis Ban de l\'agence.'],
          ['<strong>2. Promotion Externe</strong>', 'Promouvoir des plateformes concurrentes (Bigo, TikTok) pendant un live.', 'Mute (Chat bloqué) ou Ban temporaire.'],
          ['<strong>3. Vente Hors-Plateforme</strong>', 'Vendre des Coins illégalement ou demander des paiements directs (PayPal) aux viewers pour des "services".', 'Ban permanent pour fraude.'],
        ]}
      />

      <h2>14.4 Les Mauvais Comportements (Mute ou Ban Temporaire)</h2>
      <p>Ces infractions entraînent d'abord des avertissements, des "mutes" (impossibilité de parler), ou des suspensions de 24h à 7 jours :</p>
      <ul>
        <li><strong>Écran Noir / Inactivité :</strong> Lancer un live et s'en aller (ou laisser un écran noir) juste pour accumuler des heures de tâche.</li>
        <li><strong>Harcèlement / Doxxing :</strong> Insulter d'autres streamers ou révéler leurs informations privées.</li>
        <li><strong>Drogues / Alcool :</strong> Consommation de drogues ou consommation excessive d'alcool en direct.</li>
        <li><strong>Conduite Dangereuse :</strong> Streamer au volant.</li>
      </ul>

      <h2>14.5 La Règle d'Inactivité (À connaître !)</h2>
      <p>Si vous n'utilisez pas votre compte pendant <strong>plus de 3 mois consécutifs</strong>, Poppo Live se réserve le droit de geler ou de supprimer votre compte, ce qui entraîne la <strong>perte de tous les Coins et Points non retirés</strong>. Connectez-vous au moins une fois par mois si vous faites une pause.</p>
    </>
  );
}
