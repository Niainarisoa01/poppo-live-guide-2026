import React from 'react';
import TableBlock from '../ui/TableBlock';
import AlertBox from '../ui/AlertBox';

export default function Section12() {
  return (
    <>
      <h2>12.1 Introduction aux Guidelines</h2>
      <p>Pour garantir un environnement sûr, respectueux et divertissant, Poppo Live applique des directives communautaires (Community Guidelines) très strictes. Le non-respect de ces règles lors de vos diffusions en direct (Live Streaming) peut entraîner des sanctions immédiates allant de l'avertissement au bannissement permanent sans possibilité d'appel.</p>

      <h2>12.2 Règles Fondamentales du Live Streaming</h2>
      <h3>Ce qui est strictement interdit à l'écran</h3>
      <TableBlock
        headers={['Règle', 'Description', 'Sanction']}
        rows={[
          ['<strong>Aucun Mineur</strong>', 'La présence d\'enfants (moins de 18 ans) est formellement interdite à l\'écran, même s\'ils sont accompagnés d\'un adulte. Poppo Live applique une politique de tolérance zéro sur la protection de l\'enfance.', 'Ban Permanent Immédiat'],
          ['<strong>Nudité et Contenu Explicite</strong>', 'La pornographie, les actes sexuels (même simulés), les tenues transparentes ou révélant les parties intimes sont interdits.', 'Ban Permanent Immédiat'],
          ['<strong>Violence et Automutilation</strong>', 'Mettre en scène des actes violents, des armes, ou toute forme de blessure ou automutilation.', 'Ban Permanent'],
          ['<strong>Drogues et Alcool</strong>', 'Consommer des drogues illégales ou faire la promotion d\'une consommation excessive d\'alcool en direct.', 'Avertissement ou Ban'],
        ]}
      />

      <h2>12.3 Comportement et Interaction</h2>
      <h3>Le Code de Conduite du Host</h3>
      <ol>
        <li><strong>Harcèlement et Intimidation (Bullying)</strong> : Il est interdit d'insulter, de rabaisser ou de harceler d'autres streamers ou spectateurs. Le Doxxing (révéler des informations personnelles d'autrui) est un motif de bannissement.</li>
        <li><strong>Discours de Haine (Hate Speech)</strong> : Tout propos discriminatoire basé sur la race, la religion, l'orientation sexuelle, le genre ou le handicap entraînera la fermeture du compte.</li>
        <li><strong>Inactivité (Écran Noir)</strong> : Lancer un stream et quitter la pièce, ou couvrir la caméra pour obtenir des heures de live sans interagir (farming). L'IA détecte l'absence de visage.</li>
      </ol>

      <h2>12.4 Intégrité de la Plateforme (Anti-Fraude)</h2>
      <p>Poppo Live protège son modèle économique avec sévérité.</p>
      <TableBlock
        headers={['Pratique Interdite', 'Explication']}
        rows={[
          ['<strong>Multi-Comptes / Bots</strong>', 'Créer de multiples comptes pour booster artificiellement vos vues ou vous envoyer des cadeaux. L\'application bannit l\'adresse IP et l\'IMEI du téléphone (Device Ban).'],
          ['<strong>Promotion Tiers</strong>', 'Faire la publicité d\'applications concurrentes (Bigo, TikTok Live, etc.) pendant votre stream.'],
          ['<strong>Transactions Externes</strong>', 'Demander aux spectateurs de vous payer via PayPal ou d\'autres moyens externes pour des "services" ou du contenu privé.'],
        ]}
      />

      <h2>12.5 Sécurité et Protection des Données Personnelles</h2>
      <p>Il est de la responsabilité du streamer de protéger sa vie privée.</p>

      <AlertBox variant="warning">
        <strong>ATTENTION (Sécurité)</strong><br />
        Ne partagez JAMAIS vos informations bancaires, votre numéro de téléphone personnel, votre adresse exacte, ou vos mots de passe en direct ou dans les messages privés de l'application.
      </AlertBox>

      <AlertBox variant="danger">
        <strong>ALERTE FRAUDE (Phishing)</strong><br />
        Méfiez-vous des faux "Administrateurs Poppo" ou "Support Client" qui vous contactent pour vous proposer de l'argent ou vérifier votre compte. Les annonces officielles se font uniquement via le canal "System Messages".
      </AlertBox>

      <h2>12.6 Signaler et Bloquer (Report & Block)</h2>
      <p>Poppo Live met à disposition des outils pour vous protéger :</p>
      <ul>
        <li><strong>Bloquer (Block)</strong> : Si un spectateur vous dérange dans le chat, cliquez sur son profil et sélectionnez "Block". Il ne pourra plus voir vos lives ni vous envoyer de messages.</li>
        <li><strong>Signaler (Report)</strong> : Si vous êtes témoin d'une infraction grave (nudité, mineur, arnaque), utilisez la fonction "Report". L'équipe de modération analysera la vidéo enregistrée.</li>
      </ul>

      <hr className="section-divider" />
      <p><em>L'algorithme de modération de Poppo Live évolue constamment. Ces règles sont basées sur les normes en vigueur en 2026. Assurez-vous de lire les Conditions de Service (Terms of Service) directement dans l'application pour les mises à jour légales.</em></p>
    </>
  );
}
