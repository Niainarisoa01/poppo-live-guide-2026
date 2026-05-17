import React from 'react';
import TableBlock from '../ui/TableBlock';
import AlertBox from '../ui/AlertBox';

export default function Section03() {
  return (
    <>
      <h2>3.1 Les 5 Onglets Principaux</h2>
      <TableBlock
        headers={['Icône', 'Nom', 'Fonction']}
        rows={[
          ['🏠', '<strong>Home</strong>', 'Streams tendance, filtrage par région (drapeaux), catégories (Hot, New, Nearby)'],
          ['🎥', '<strong>Live</strong>', 'Démarrer un stream : Solo, Party Room, Audio Live, PK Battle'],
          ['🔍', '<strong>Discover</strong>', 'Partager/explorer clips, photos, Moments (type Instagram)'],
          ['💬', '<strong>Messages</strong>', 'Chat privé, messages système, codes vérification, alertes agence'],
          ['👤', '<strong>Profil</strong>', 'Wallet, Reward Center, <strong>Creator Center (Nouveauté 2026)</strong>, VIP, Paramètres'],
        ]}
      />

      <AlertBox variant="tip">
        <strong>NOUVEAUTÉ MAI 2026 : Le Creator Center</strong><br/>
        Intégré dans l'onglet Profil, c'est le nouveau tableau de bord des créateurs. Il permet de :
        <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
          <li>Publier de courtes vidéos (type TikTok/Reels) pour attirer du trafic.</li>
          <li>Suivre son <strong>"Creator Level"</strong> et débloquer de nouvelles statistiques analytiques.</li>
          <li>Gérer les membres de son "Fan Club".</li>
        </ul>
      </AlertBox>

      <h2>3.2 Modes de Live Disponibles</h2>
      <TableBlock
        headers={['Mode', 'Description', 'Idéal pour']}
        rows={[
          ['<strong>Solo Live</strong>', 'Vous seul en direct', 'Chant, discussion, talents'],
          ['<strong>Party Room</strong>', 'Salle multi-guests (jusqu\'à 9)', 'Karaoké groupe, sessions sociales'],
          ['<strong>Audio Live</strong>', 'Stream audio uniquement', 'Discussions, podcasts'],
          ['<strong>PK Battle</strong>', 'Compétition contre un autre host', 'Maximiser les revenus'],
        ]}
      />

      <h3>Avant de lancer un Live :</h3>
      <ol>
        <li>Vérifier connexion internet</li>
        <li>Choisir un titre accrocheur</li>
        <li>Ajouter des tags/hashtags pertinents</li>
        <li>Vérifier éclairage et son</li>
        <li>Cliquer "Go Live" 🔴</li>
      </ol>

      <h2>3.3 Éléments Clés dans l'Interface</h2>
      <TableBlock
        headers={['Élément', 'Fonction']}
        rows={[
          ['<strong>Treasure Box</strong>', 'Coffre apparaissant en stream → coins gratuits (timer 5 min)'],
          ['<strong>Effets d\'entrée</strong>', 'Animations VIP visibles par tous en entrant dans un stream'],
          ['<strong>Bouton ❤️</strong>', 'Envoyer des cœurs gratuits → booste le ranking du stream'],
          ['<strong>Bouton Report</strong>', '⋮ → "Report" pour signaler du contenu inapproprié'],
        ]}
      />

      <h2>3.4 Gestes Utiles</h2>
      <TableBlock
        headers={['Geste', 'Résultat']}
        rows={[
          ['Swipe gauche sur Home', 'Changer de catégorie'],
          ['Swipe haut en live', 'Stream suivant'],
          ['Swipe bas en live', 'Stream précédent'],
          ['Double-tap vidéo', 'Envoyer un cœur'],
          ['Tap sur pseudo viewer', 'Voir son profil'],
        ]}
      />
    </>
  );
}
