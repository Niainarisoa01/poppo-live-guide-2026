import React from 'react';
import TableBlock from '../ui/TableBlock';

export default function Section08() {
  return (
    <>
      <h2>8.1 Le Rôle de l'Agent</h2>
      <p>Sur Poppo Live, un Agent est un <strong>manager de talents</strong>. Son rôle n'est pas de streamer lui-même, mais de construire et gérer une équipe de créateurs de contenu (les Hosts).</p>

      <h3>Les responsabilités de l'Agent :</h3>
      <ol>
        <li><strong>Recrutement :</strong> Trouver de nouveaux talents et les inviter à rejoindre l'agence.</li>
        <li><strong>Formation :</strong> Apprendre aux nouveaux hosts comment streamer, utiliser l'app, et engager l'audience.</li>
        <li><strong>Support :</strong> Aider les hosts à résoudre leurs problèmes techniques ou administratifs (bans, retraits).</li>
        <li><strong>Motivation :</strong> Pousser les hosts à atteindre leurs objectifs d'heures et de revenus.</li>
      </ol>

      <h2>8.2 Le Modèle Économique de l'Agent</h2>
      <p>L'agent gagne de l'argent grâce à un système de <strong>commission</strong>. Il touche un pourcentage sur le volume total de points générés par son agence.</p>
      <ul>
        <li><strong>Le principe :</strong> Plus vos hosts reçoivent de cadeaux, plus votre commission est élevée.</li>
        <li><strong>La source :</strong> La commission est généralement payée par la plateforme (Poppo) en fonction du volume généré, ce n'est pas de l'argent "volé" aux streamers.</li>
        <li><strong>Les taux :</strong> Les commissions varient de <strong>4% à 20%</strong> selon les performances mensuelles (voir la section suivante pour les détails précis).</li>
      </ul>

      <h2>8.3 Comment Devenir Agent (Créer son Agence)</h2>
      <p>La création d'une agence est un processus simple mais réglementé.</p>

      <h3>Prérequis</h3>
      <ul>
        <li>Avoir 18 ans ou plus.</li>
        <li>Avoir un compte Poppo Live actif et vérifié.</li>
        <li>Avoir la capacité de recruter des hosts (souvent, un minimum de 5 hosts actifs est requis pour maintenir l'agence).</li>
      </ul>

      <h3>Étape 1 : Obtenir votre Poppo ID</h3>
      <ol>
        <li>Ouvrez l'application Poppo Live.</li>
        <li>Allez dans votre <strong>Profil</strong>.</li>
        <li>Copiez votre <strong>Poppo ID</strong> (le numéro à 9-10 chiffres sous votre pseudo).</li>
      </ol>

      <h3>Étape 2 : L'Inscription Officielle</h3>
      <ol>
        <li>Accédez à la page officielle d'enregistrement d'agence (le lien est généralement fourni par un Master Agent ou disponible dans les annonces de l'app).</li>
        <li>Saisissez votre <strong>Poppo ID</strong>.</li>
        <li>Cliquez sur le bouton <strong>"Get"</strong> (Obtenir le code).</li>
        <li>Retournez dans l'application Poppo Live, allez dans <strong>Messages</strong> → Messages système.</li>
        <li>Copiez le code de vérification reçu.</li>
        <li>Retournez sur la page web d'inscription, collez le code et cliquez sur <strong>"Submit"</strong> (Soumettre).</li>
      </ol>

      <p>⏱️ <strong>Délai :</strong> Votre compte agence est généralement approuvé en <strong>10 à 15 minutes</strong>.</p>

      <h2>8.4 Le Tableau de Bord (Agency Management)</h2>
      <p>Une fois approuvé, vous aurez accès à un panel de gestion spécifique dans votre profil.</p>

      <h3>Fonctionnalités du Dashboard :</h3>
      <ul>
        <li><strong>Lien d'invitation :</strong> Votre lien unique pour recruter des hosts. S'ils s'inscrivent via ce lien, ils rejoignent automatiquement votre agence.</li>
        <li><strong>Suivi des revenus :</strong> Visualisez les points générés par chaque host en temps réel.</li>
        <li><strong>Statistiques :</strong> Suivez les heures de stream de vos hosts et leurs performances.</li>
        <li><strong>Section Retrait :</strong> Retirez vos commissions via USDT, Payoneer ou E-Pay.</li>
      </ul>

      <h2>8.5 Les Pièges à Éviter pour un Agent</h2>
      <TableBlock
        headers={['Erreur commune', 'Conséquence']}
        rows={[
          ['<strong>Payer pour devenir agent</strong>', 'C\'est une arnaque. La plateforme ne fait jamais payer la création d\'agence.'],
          ['<strong>Braconnage (Poaching)</strong>', 'Essayer de recruter des hosts appartenant déjà à une autre agence est strictement interdit. Sanction : exclusion.'],
          ['<strong>Créer des faux comptes</strong>', 'Utiliser des bots ou des multi-comptes pour gonfler les chiffres mène à un ban permanent.'],
          ['<strong>Négliger ses hosts</strong>', 'Une agence inactive (sans hosts streamant régulièrement) peut être rétrogradée ou fermée par la plateforme.'],
        ]}
      />
    </>
  );
}
