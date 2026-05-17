import React from 'react';
import TableBlock from '../ui/TableBlock';

export default function Section17() {
  return (
    <>
      <h2>17.1 Checklist de Survie du Nouveau Créateur</h2>
      <h3>✅ À FAIRE ABSOLUMENT</h3>
      <ol>
        <li><strong>Streamez aux heures de pointe</strong> (20h-23h locale).</li>
        <li><strong>Faites des sessions longues</strong> (Minimum 2h par session est idéal pour l'algorithme).</li>
        <li><strong>Réclamez vos récompenses !</strong> Cliquez sur "Claim" dans le Reward Center tous les jours avant minuit (UTC+8).</li>
        <li><strong>Rejoignez une Agence.</strong> C'est gratuit et vous aurez un support technique et des conseils.</li>
        <li><strong>Collectez les Coins Gratuits.</strong> Ouvrez les Treasure Boxes chaque jour pour monter votre niveau VIP sans payer.</li>
        <li><strong>Soyez interactif.</strong> Parlez, posez des questions, saluez les gens par leur nom.</li>
        <li><strong>Préparez vos retraits.</strong> Complétez le KYC niveau 5 dès que possible pour ne pas être bloqué le jour où vous voulez retirer vos gains.</li>
      </ol>

      <h2>17.2 Les Pièges Mortels (Ce qui tue votre compte)</h2>
      <h3>❌ À NE JAMAIS FAIRE</h3>
      <TableBlock
        headers={['L\'Erreur', 'La Conséquence']}
        rows={[
          ['<strong>Faire un chargeback à la banque</strong>', 'Ban permanent, compte supprimé, fonds bloqués.'],
          ['<strong>Payer pour devenir Agent</strong>', 'Arnaque. La création d\'agence est 100% gratuite.'],
          ['<strong>Créer des Multi-comptes</strong>', 'Device Ban (votre téléphone entier sera bloqué par l\'app).'],
          ['<strong>Laisser la caméra tourner à vide</strong>', 'Si l\'IA détecte un écran noir ou une pièce vide pendant longtemps, elle suspend le stream.'],
          ['<strong>Donner votre mot de passe</strong>', 'Personne (pas même votre agent ou le "support") n\'a besoin de votre mot de passe.'],
          ['<strong>Faire du "Poaching"</strong>', 'Si vous êtes agent, essayer de voler les hosts d\'une autre agence mène au ban de votre agence.'],
        ]}
      />

      <h2>17.3 Le Dictionnaire Rapide de Poppo Live</h2>
      <p>Pour finir, voici le vocabulaire à connaître pour ne pas être perdu :</p>
      <ul>
        <li><strong>Host :</strong> Vous (le streamer/créateur).</li>
        <li><strong>Viewer :</strong> Le spectateur.</li>
        <li><strong>Gifter :</strong> Un viewer qui dépense de l'argent pour envoyer des cadeaux.</li>
        <li><strong>MVP :</strong> (Most Valuable Player) Le gifter qui vous a envoyé le plus de points pendant un stream ou un PK.</li>
        <li><strong>PK :</strong> (Player Knockout) Bataille en direct entre deux streamers.</li>
        <li><strong>Snipe :</strong> L'action d'envoyer un énorme cadeau dans les 5 dernières secondes d'un PK pour voler la victoire.</li>
        <li><strong>Crown Seat :</strong> Les sièges VIP (souvent 2, 3 et 4) dans une Party Room, nécessaires pour valider certaines tâches.</li>
        <li><strong>UID / Poppo ID :</strong> Votre numéro d'identification unique.</li>
      </ul>

      <hr className="section-divider" />
      <p>🎉 <strong>Félicitations !</strong> Vous avez terminé le guide complet Poppo Live 2026. Vous avez maintenant toutes les cartes en main pour optimiser votre profil, éviter les pièges et maximiser vos revenus en tant que Host ou Agent. Bon streaming !</p>
    </>
  );
}
