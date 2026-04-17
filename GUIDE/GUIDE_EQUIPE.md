# 📑 Guide de Développement — Équipe Game2Earn

> **À lire obligatoirement avant de coder.** Ce document explique comment travailler sur le projet sans casser le site en ligne.

---

## 1. Les Branches — L'organisation

| Branche | Rôle | Accès |
|---|---|---|
| `main` | 🔴 **PRODUCTION** — le site en ligne | ⛔ Interdit de toucher |
| `dev` | 🟡 **TEST GLOBAL** — on réunit tout le code ici | ✅ Via Pull Request uniquement |
| `feature/nom-de-ta-tache` | 🟢 **Ta branche de travail perso** | ✅ Libre |

---

## 2. Au quotidien — Workflow complet

### Étape 1 — Préparer sa journée

Avant de coder, récupère **toujours** la dernière version du code de l'équipe :

```bash
git checkout dev
git pull origin dev
```

> ⚠️ Ne saute jamais cette étape. Si tu codes sur une version ancienne, tu risques des conflits au moment du merge.

---

### Étape 2 — Créer sa branche de travail

```bash
git checkout -b feature/nom-de-ta-tache
```

**Exemples de bons noms de branches :**
```bash
git checkout -b feature/page-arene
git checkout -b feature/systeme-eclats
git checkout -b fix/bug-calcul-score
git checkout -b feature/sdk-submit-score
```

---

### Étape 3 — Coder et tester en local

Utilise ta méthode habituelle pour voir tes changements en direct :

```bash
# Si le projet utilise Vite (recommandé)
npm run dev

# Si le projet utilise Create React App
npm start
```

> 🌐 L'URL locale sera généralement : **http://localhost:5173** (Vite)

Tu peux coder et tester normalement avec le rechargement automatique.

---

### Étape 4 — Validation Cloudflare (avant d'envoyer)

Une fois ton code terminé, **vérifie qu'il fonctionnera bien sur les serveurs Cloudflare** avant de partager — surtout pour les appels API.

**1. Build le projet :**
```bash
npm run build
```

**2. Lance l'émulateur Cloudflare :**
```bash
npx wrangler pages dev ./dist
```

**3. Teste sur :** http://localhost:8788

> ✅ Si tout fonctionne ici, ton code est prêt à être envoyé.  
> ❌ Si quelque chose plante, corrige avant de passer à l'étape suivante.

---

## 3. Envoyer son travail sur GitHub

Une fois tout validé localement :

```bash
# 1. Ajouter tous tes fichiers modifiés
git add .

# 2. Créer un commit avec un message clair
git commit -m "Ajout de la page Arène avec filtres par catégorie"

# 3. Envoyer ta branche sur GitHub
git push origin feature/nom-de-ta-tache
```

**Exemples de bons messages de commit :**
```
Ajout du composant carte de jeu
Correction du calcul d'Éclats en fin de partie
Intégration de l'endpoint POST /api/scores
Ajout du classement temps réel avec WebSocket
```

---

## 4. Fusionner son travail (Merge)

1. Va sur **GitHub.com** → ton dépôt Game2Earn
2. Clique sur **"Compare & pull request"** (apparaît automatiquement)
3. Vérifie que la PR va bien de `feature/ta-branche` → `dev` (et **non vers main**)
4. Donne un titre clair à ta PR et décris ce que tu as fait
5. Demande à un cofondateur de **valider ta PR** avant de merger
6. Une fois mergée dans `dev` → **supprime ta branche feature** sur GitHub pour garder le projet propre

---

## ⚠️ Règles d'Or

```
🚫 NE JAMAIS faire git push directement sur main
🚫 NE JAMAIS faire git push directement sur dev sans Pull Request
✅ TOUJOURS tirer le dernier code de dev avant de commencer
✅ TOUJOURS tester avec wrangler pages dev avant d'envoyer
✅ TOUJOURS demander une review avant de merger
```

> **En cas de doute, demande au responsable avant de fusionner. Pas de héros solitaires ! 🤝**

---

## 5. Pourquoi ces étapes ?

| Raison | Explication |
|---|---|
| 🚀 **Rapidité** | Tu codes avec `npm run dev` comme d'habitude, sans friction |
| 🔒 **Sécurité** | `wrangler` vérifie que l'API ne plante pas avant de partager |
| 🤝 **Collaboration** | Les PR garantissent qu'un second regard valide chaque changement |
| 🌐 **Stabilité** | `main` reste toujours propre et déployable en production |

---

## 6. Résumé visuel du flux

```
dev (à jour)
    │
    └──► git checkout -b feature/ma-tache
              │
              ▼
         [Code + npm run dev]
              │
              ▼
         [npm run build]
         [npx wrangler pages dev ./dist]  ← validation Cloudflare
              │
              ▼
         git add . && git commit && git push
              │
              ▼
         Pull Request feature → dev
              │
              ▼
         Review par un cofondateur ✅
              │
              ▼
         Merge dans dev
              │
              ▼
         Suppression de la branche feature 🗑️
```

---

*Game2Earn — Document interne équipe — v1.0*
