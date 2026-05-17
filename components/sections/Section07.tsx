import React from 'react';
import TableBlock from '../ui/TableBlock';
import AlertBox from '../ui/AlertBox';

export default function Section07() {
  return (
    <>
      <h2>7.1 Les 5 Sources de Revenus du Host</h2>
      <p>En tant que créateur de contenu (Host), vos revenus proviennent de plusieurs sources :</p>
      <TableBlock
        headers={['Source', 'Description', 'Proportion des gains']}
        rows={[
          ['<strong>1. Cadeaux virtuels (Gifts)</strong>', 'Les spectateurs achètent des coins et vous les envoient sous forme de cadeaux (roses, voitures, etc.)', '80% - 90%'],
          ['<strong>2. PK Battles</strong>', 'Les cadeaux reçus pendant ces compétitions en direct', '5% - 10%'],
          ['<strong>3. Tâches Reward Center</strong>', 'Les points gagnés en complétant les missions quotidiennes (ex: streamer 2h)', '2% - 5%'],
          ['<strong>4. Bonus d\'Événements</strong>', 'Participation aux campagnes saisonnières de la plateforme', 'Variable'],
          ['<strong>5. Party Rooms</strong>', 'Recevoir des cadeaux en étant co-host dans une salle', 'Variable'],
        ]}
      />

      <h2>7.2 Comprendre le Partage des Revenus (Revenue Share)</h2>
      <p>Poppo Live est réputé pour avoir l'un des meilleurs taux de rétention pour les créateurs.</p>
      <ul>
        <li><strong>Rétention Host :</strong> Environ <strong>70%</strong></li>
        <li><strong>Part Plateforme :</strong> Environ <strong>30%</strong></li>
      </ul>

      <p><strong>Exemple de calcul :</strong></p>
      <ol>
        <li>Un viewer achète 10 000 Coins (environ 1$) et vous les envoie via un cadeau.</li>
        <li>Poppo retient ~3 000 Coins.</li>
        <li>Votre compte est crédité de <strong>7 000 Points</strong>.</li>
        <li>Lors du retrait (10 000 Points = 1$), ces 7 000 points valent <strong>0,70$ USD</strong>.</li>
      </ol>

      <AlertBox variant="tip">
        <em>Note : Si vous appartenez à une agence, l'agence touche sa commission en plus (4-20%), mais celle-ci est souvent payée par la plateforme ou calculée sur votre volume total, sans réduire directement vos 70%.</em>
      </AlertBox>

      <h2>7.3 Les 4 Piliers d'un Stream Rentable</h2>
      <p>Pour maximiser vos revenus, vous devez maîtriser ces quatre aspects :</p>

      <h3>1. La Régularité (Consistency)</h3>
      <p>L'algorithme de Poppo favorise les streamers réguliers.</p>
      <ul>
        <li><strong>Le secret :</strong> Streamez aux <strong>mêmes heures</strong> chaque jour.</li>
        <li><strong>Pourquoi :</strong> Vos followers sauront quand vous trouver. L'algorithme vous considérera comme un créateur fiable et vous poussera dans les recommandations.</li>
      </ul>

      <h3>2. L'Heure de Pointe (Prime Time)</h3>
      <ul>
        <li><strong>Heures idéales :</strong> Entre <strong>20h00 et 23h00</strong> (heure de votre région cible) et les <strong>week-ends</strong>.</li>
        <li>C'est là que le plus grand nombre de "gifters" (spectateurs prêts à dépenser) sont en ligne.</li>
      </ul>

      <h3>3. L'Engagement (Ne laissez pas de blancs !)</h3>
      <ul>
        <li><strong>Règle d'or :</strong> Saluez CHAQUE personne qui entre dans le stream par son nom.</li>
        <li><strong>Réaction aux cadeaux :</strong> Ayez une réaction spéciale même pour le plus petit cadeau (une rose).</li>
        <li><strong>Contenu :</strong> Si vous ne chantez pas ou ne dansez pas, animez des quiz, des débats, ou parlez de sujets d'actualité. Ne restez pas silencieux devant la caméra.</li>
      </ul>

      <h3>4. L'Esthétique</h3>
      <ul>
        <li><strong>Lumière :</strong> C'est le plus important. Une simple Ring Light fait la différence.</li>
        <li><strong>Fond :</strong> Gardez-le propre et rangé. Ajoutez quelques lumières LED pour l'ambiance.</li>
        <li><strong>Son :</strong> Évitez les bruits de fond (ventilateurs, rue). Utilisez un micro ou des écouteurs simples si nécessaire.</li>
      </ul>

      <h2>7.4 Pourquoi rejoindre une Agence en tant que Host ?</h2>
      <p>Bien que non obligatoire, rejoindre une agence est fortement recommandé pour les débutants :</p>
      <TableBlock
        headers={['Avantage', 'Description']}
        rows={[
          ['<strong>Formation</strong>', 'L\'agent vous donne des astuces pour améliorer vos streams'],
          ['<strong>Support Technique</strong>', 'Aide en cas de problème de retrait, de compte bloqué'],
          ['<strong>Visibilité croisée</strong>', 'L\'agence peut organiser des Party Rooms avec ses autres hosts'],
          ['<strong>Soutien en PK</strong>', 'Les agents aident parfois leurs hosts à gagner des batailles importantes'],
        ]}
      />

      <AlertBox variant="warning">
        <strong>Rappel vital :</strong> L'inscription dans une agence est <strong>100% GRATUITE</strong>. Ne payez jamais de frais d'inscription à un recruteur.
      </AlertBox>
    </>
  );
}
