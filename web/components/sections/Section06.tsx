import React from 'react';
import TableBlock from '../ui/TableBlock';
import AlertBox from '../ui/AlertBox';

export default function Section06() {
  return (
    <>
      <h2>6.1 Où trouver les tâches ?</h2>
      <p>Toutes vos missions sont regroupées dans le <strong>Reward Center</strong> (parfois appelé Task Center).</p>
      <ul>
        <li><strong>Accès :</strong> Profil → Reward Center</li>
        <li>C'est ici que vous verrez vos objectifs quotidiens, hebdomadaires et les récompenses associées.</li>
      </ul>

      <AlertBox variant="danger">
        <strong>IMPORTANT : Le piège du "Claim"</strong><br/>
        Compléter une tâche ne crédite pas automatiquement votre compte ! Vous devez retourner dans le Reward Center et cliquer manuellement sur le bouton <strong>"Claim"</strong> (ou "Receive") à côté de chaque tâche terminée. Les récompenses non réclamées expirent et sont perdues.
      </AlertBox>

      <h2>6.2 Tâches Nouveaux Utilisateurs (Les 7 premiers jours)</h2>
      <p>Les nouveaux créateurs ont accès à des tâches très rémunératrices pour les encourager à démarrer.</p>
      <TableBlock
        headers={['Mission typique', 'Récompense (Points)', 'Conseil']}
        rows={[
          ['<strong>Premier Solo Stream</strong>', '~20 000', 'Streamez au moins 2h pour maximiser'],
          ['<strong>Première Party Room</strong>', '~5 000', 'Rejoignez une room publique'],
          ['<strong>KYC Complété</strong>', 'Déblocage retrait', 'À faire dès le jour 1'],
        ]}
      />

      <h2>6.3 Tâches Quotidiennes (Daily Tasks)</h2>
      <p><strong>Reset :</strong> Tous les jours à 00:00 UTC+8.</p>
      <TableBlock
        headers={['Catégorie', 'Exemple de tâche', 'Action requise']}
        rows={[
          ['<strong>Activité</strong>', 'Daily Login', 'Ouvrir l\'app et aller dans le Reward Center'],
          ['<strong>Visionnage</strong>', 'Watch Streams', 'Regarder des lives pendant 5, 10, 30 min'],
          ['<strong>Interaction</strong>', 'Chatter', 'Envoyer X messages dans des streams'],
          ['', 'Follow users', 'S\'abonner à de nouveaux profils'],
          ['<strong>Streaming</strong>', 'Solo Live', 'Diffuser pendant 1h ou 2h'],
          ['', 'Party Room', 'Rester sur un siège (Crown Seat) pendant X minutes'],
        ]}
      />

      <h3>La règle des "Crown Seats"</h3>
      <p>Pour que vos tâches en Party Room soient validées, vous devez souvent vous asseoir sur un <strong>"Crown Seat"</strong>.</p>
      <ul>
        <li>Généralement les sièges <strong>numéro 2, 3 ou 4</strong> (ou parfois les sièges payants VIP).</li>
        <li>Lisez bien la description de la tâche : "Sit on Crown Seat for 30 mins".</li>
      </ul>

      <h2>6.4 Tâches Hebdomadaires (Weekly Tasks)</h2>
      <p><strong>Reset :</strong> Tous les dimanches à 23:59 UTC+8.</p>
      <p>Les tâches hebdomadaires demandent plus de volume mais offrent de meilleures récompenses.</p>
      <TableBlock
        headers={['Mission typique', 'Exemple d\'objectif']}
        rows={[
          ['<strong>Gifting</strong>', 'Envoyer 50 cadeaux dans la semaine'],
          ['<strong>Collecte</strong>', 'Ouvrir 20 Treasure Boxes'],
          ['<strong>Engagement</strong>', 'Écrire 100 commentaires'],
          ['<strong>Réseautage</strong>', 'S\'abonner à 50 utilisateurs'],
        ]}
      />

      <h2>6.5 Stratégie Quotidienne Optimale (Routine)</h2>
      <p>Pour maximiser vos gains sans passer 10h sur l'app :</p>
      <ol>
        <li><strong>Connexion (Matin)</strong> : Login, "Claim" la récompense de connexion.</li>
        <li><strong>Collecte (Pendant la journée)</strong> : Ouvrez des streams en fond, collectez les Treasure Boxes (400 coins/jour) et complétez les tâches de visionnage.</li>
        <li><strong>Engagement (Midi)</strong> : Envoyez quelques messages, followez quelques personnes.</li>
        <li><strong>Streaming (Soir)</strong> : Faites votre stream solo de 1h-2h.</li>
        <li><strong>Party Room (Nuit/Fin de session)</strong> : Rejoignez une Party Room, asseyez-vous sur un Crown Seat pendant que vous faites autre chose.</li>
        <li><strong>CLAIM FINAL</strong> : N'oubliez jamais de tout "Claim" avant de dormir !</li>
      </ol>
    </>
  );
}
