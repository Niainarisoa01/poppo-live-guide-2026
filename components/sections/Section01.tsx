import React from 'react';
import TableBlock from '../ui/TableBlock';
import CodeBlock from '../ui/CodeBlock';

export default function Section01() {
  return (
    <>
      <h2>1.1 Présentation Générale</h2>
      <p>
        <strong>Poppo Live</strong> est une plateforme de <strong>live-streaming social</strong> développée par Pop Live Pte. Ltd., basée à Singapour. Elle permet à des millions d'utilisateurs dans le monde de :
      </p>
      <ul className="checklist">
        <li><strong>Diffuser en direct</strong> du contenu varié (chant, danse, discussion, jeux, talents)</li>
        <li><strong>Interagir en temps réel</strong> avec une audience mondiale</li>
        <li><strong>Gagner de l'argent réel</strong> grâce aux cadeaux virtuels envoyés par les spectateurs</li>
        <li><strong>Créer et gérer</strong> des communautés de streamers via un système d'agence</li>
      </ul>

      <h2>1.2 Historique & Positionnement</h2>
      <TableBlock
        headers={['Critère', 'Détail']}
        rows={[
          ['<strong>Éditeur</strong>', 'Pop Live Pte. Ltd. (Singapour)'],
          ['<strong>Disponibilité</strong>', 'Android (Google Play) + iOS (App Store)'],
          ['<strong>Audience</strong>', 'Mondiale, forte présence en Asie du Sud-Est, Moyen-Orient, Afrique, Amérique Latine'],
          ['<strong>Catégorie</strong>', 'Social / Divertissement / Live-Streaming'],
          ['<strong>Âge minimum</strong>', '18 ans (pour streamer et retirer de l\'argent)'],
          ['<strong>Langue</strong>', 'Multilingue (anglais, arabe, indonésien, français, espagnol, etc.)'],
          ['<strong>Téléchargements</strong>', 'Plusieurs millions (Google Play)'],
        ]}
      />

      <h2>1.3 Ce qui distingue Poppo Live</h2>
      <h3>Par rapport aux concurrents (Bigo Live, TikTok Live, Tango, etc.)</h3>
      <TableBlock
        headers={['Avantage', 'Description']}
        rows={[
          ['<strong>Taux de rétention élevé</strong>', 'Les hosts gardent environ <strong>70%</strong> de la valeur des cadeaux reçus'],
          ['<strong>Système d\'agence intégré</strong>', 'Possibilité de créer une agence gratuitement et de gérer des streamers'],
          ['<strong>Batailles PK</strong>', 'Système de compétition en temps réel très engageant'],
          ['<strong>Party Rooms</strong>', 'Salons multi-guests pour des sessions de groupe'],
          ['<strong>Monetisation accessible</strong>', 'Seuil de retrait bas (10 $ USD minimum)'],
          ['<strong>Tâches rémunérées</strong>', 'Reward Center avec des tâches quotidiennes/hebdomadaires payées en points'],
        ]}
      />

      <h2>1.4 Modèle Économique de Poppo Live</h2>
      <p>Le modèle repose sur un <strong>écosystème circulaire</strong> :</p>
      <div className="eco-diagram">
        <div className="eco-row">
          <div className="eco-card viewer">
            <h3>👤 Viewer</h3>
            <p>Achète des Coins</p>
          </div>
          <div className="eco-arrow">
            <strong>➔</strong>
            <span>Envoie des cadeaux</span>
          </div>
          <div className="eco-card platform">
            <h3>🏢 Plateforme</h3>
            <p>Retient ~30%</p>
          </div>
        </div>
        
        <div className="eco-row">
          <div className="eco-card agent">
            <h3>💼 Agent</h3>
            <p>Commission 4-20%</p>
          </div>
          <div className="eco-arrow">
            <strong>⟵</strong>
            <span>Commission</span>
          </div>
          <div className="eco-card host">
            <h3>🎙️ Host</h3>
            <p>Reçoit ~70% (Points)</p>
          </div>
        </div>
      </div>

      <h3>Les 4 acteurs principaux</h3>
      <TableBlock
        headers={['Acteur', 'Rôle', 'Comment il gagne']}
        rows={[
          ['<strong>Viewer</strong>', 'Regarde les streams, envoie des cadeaux', 'Ne gagne pas directement (consommateur)'],
          ['<strong>Host</strong>', 'Streame du contenu, reçoit des cadeaux', 'Points convertibles en argent réel'],
          ['<strong>Agent</strong>', 'Recrute et gère des hosts', 'Commission sur les revenus des hosts'],
          ['<strong>Plateforme</strong>', 'Fournit l\'infrastructure', 'Retient ~30% sur chaque transaction'],
        ]}
      />

      <h2>1.5 Principaux Types de Contenu</h2>
      <TableBlock
        headers={['Type', 'Description', 'Popularité']}
        rows={[
          ['🎤 <strong>Chant/Karaoké</strong>', 'Performances vocales en direct', '⭐⭐⭐⭐⭐'],
          ['💃 <strong>Danse</strong>', 'Chorégraphies et performances', '⭐⭐⭐⭐'],
          ['💬 <strong>Chat/Discussion</strong>', 'Conversations décontractées avec l\'audience', '⭐⭐⭐⭐⭐'],
          ['🎮 <strong>Gaming</strong>', 'Sessions de jeu en direct', '⭐⭐⭐'],
          ['🎨 <strong>Talents/Art</strong>', 'Dessin, magie, cuisine, etc.', '⭐⭐⭐'],
          ['⚔️ <strong>PK Battles</strong>', 'Compétitions entre streamers', '⭐⭐⭐⭐⭐'],
          ['🎉 <strong>Party Rooms</strong>', 'Sessions multi-guests', '⭐⭐⭐⭐'],
          ['📸 <strong>Moments</strong>', 'Publications photos/vidéos courtes (hors-live)', '⭐⭐⭐'],
        ]}
      />

      <h2>1.6 Pour qui est Poppo Live ?</h2>
      <h3>✅ Idéal pour :</h3>
      <ul className="checklist">
        <li>Les <strong>créateurs de contenu</strong> cherchant à monétiser leur talent</li>
        <li>Les <strong>entrepreneurs</strong> voulant bâtir une agence de streamers</li>
        <li>Les personnes <strong>sociables</strong> aimant interagir avec une audience diverse</li>
        <li>Ceux qui cherchent un <strong>revenu complémentaire</strong> depuis chez eux</li>
        <li>Les <strong>managers/recruteurs</strong> intéressés par le talent management</li>
      </ul>

      <h3>⚠️ Moins adapté pour :</h3>
      <ul>
        <li>Les mineurs (18+ obligatoire)</li>
        <li>Les personnes cherchant un revenu garanti fixe (revenus variables)</li>
        <li>Ceux qui ne sont pas à l'aise devant une caméra</li>
        <li>Les utilisateurs dans des pays où le retrait est limité</li>
      </ul>

      <h2>1.7 Chiffres Clés à Retenir</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-title">Conversion</div>
          <div className="stat-value">10k pts = 1$</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-title">Retrait minimum</div>
          <div className="stat-value">10$ <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>(100k pts)</span></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎁</div>
          <div className="stat-title">Rétention Host</div>
          <div className="stat-value">~70%</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-title">Commission Agent</div>
          <div className="stat-value">4% à 20%</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏰</div>
          <div className="stat-title">Heures de pointe</div>
          <div className="stat-value">20h - 23h</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🆓</div>
          <div className="stat-title">Inscription Agent</div>
          <div className="stat-value" style={{color: 'var(--accent-green)'}}>Gratuite</div>
        </div>
      </div>
    </>
  );
}
