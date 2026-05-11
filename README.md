# Portfolio Professionnel — Kouzih Abdelilah

Portfolio en ligne de **Kouzih Abdelilah**, Professeur d'Informatique certifié au Lycée Qualifiant Beni Frassen (Taza, Maroc).

## 🎯 Aperçu

Site vitrine professionnel présentant le parcours académique, les expériences, les compétences pédagogiques et techniques, ainsi que le projet de fin de formation (CRMEF Rabat).

## 🛠️ Stack technique

- **React 19** + **TypeScript**
- **Vite** — build tool ultra-rapide
- **Tailwind CSS v4** — système de design utility-first
- **Motion** (Framer Motion) — animations fluides
- **Lucide React** — bibliothèque d'icônes

## 📂 Architecture

```
src/
├── components/        # Composants réutilisables (Navigation, Footer, UI)
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ui.tsx
├── sections/          # Sections de la page (une par bloc)
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── AboutSection.tsx
│   ├── FormationSection.tsx
│   ├── ExperiencesSection.tsx
│   ├── SkillsSection.tsx
│   ├── TeachingSection.tsx
│   ├── VieScolaireSection.tsx
│   ├── ProjectSection.tsx
│   ├── DocumentsSection.tsx
│   └── ContactSection.tsx
├── lib/               # Données et hooks
│   ├── constants.ts
│   └── useRevealAnimation.ts
├── types/             # Types TypeScript
│   └── index.ts
├── App.tsx            # Composant racine
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux + thème Tailwind
```

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build de production
npm run build

# Vérification TypeScript
npm run lint
```

L'application sera accessible sur `http://localhost:3000`.

## 🎨 Charte graphique

- **Police principale** : Inter (corps de texte)
- **Police de titre** : Plus Jakarta Sans
- **Police monospace** : JetBrains Mono

**Palette** :
- Primaire : Bleu nuit (`#1e3a8a`) — registre institutionnel
- Accent : Ambre (`#d97706`) — pour les éléments décoratifs
- Texte : Slate 900 (`#0f172a`)
- Fonds : Blanc + Slate 50

## ♿ Accessibilité

- Navigation clavier intégrale (focus rings visibles)
- HTML sémantique (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- `aria-label`, `aria-hidden` sur les icônes décoratives
- Métadonnées SEO complètes (Open Graph, description, lang `fr`)
- Contrastes conformes WCAG AA

## 📝 Personnalisation

Toutes les données du portfolio sont centralisées dans `src/lib/constants.ts`.
Pour mettre à jour le contenu (expériences, formation, compétences, etc.), il suffit de modifier ce fichier.

## 📄 Licence

© 2026 Kouzih Abdelilah. Tous droits réservés.
