export const PROFILE = {
  name: 'KOUZIH Abdelilah',
  title: "Professeur d'Informatique certifié",
  institution: 'Lycée Qualifiant Beni Frassen',
  city: 'Taza, Maroc',
  speciality: 'Informatique',
  email: 'kouzih.abdelilah@men.gov.ma',
  phone: '+212 6 00 00 00 00',
  photo: '/images/prof.png',
};

export const STATS = [
  { value: '3+', label: "Années d'expérience" },
  { value: '120+', label: 'Élèves accompagnés' },
  { value: '4', label: 'Niveaux enseignés' },
  { value: '15+', label: 'Ressources pédagogiques' },
];

export const FORMATION = [
  {
    annee: '2024 – 2025',
    titre: 'Qualification pour les métiers de l’enseignement',
    etab: 'CRMEF — Centre Régional des Métiers de l’Éducation et de la Formation, Rabat',
    detail: 'Filière : Informatique — Secondaire qualifiant.',
  },
  {
    annee: '2022 – 2024',
    titre: 'Master en Informatique',
    etab: 'Faculté des Sciences — Université',
    detail: 'Spécialité : Génie Logiciel et Systèmes d’Information.',
  },
  {
    annee: '2019 – 2022',
    titre: 'Licence en Informatique',
    etab: 'Faculté des Sciences',
    detail: 'Algorithmique, programmation, bases de données, réseaux.',
  },
];

export const EXPERIENCES = [
  {
    annee: '2025 — Présent',
    poste: "Professeur d'Informatique certifié",
    etab: 'Lycée Qualifiant Beni Frassen, Taza',
    missions: [
      "Enseignement de l'informatique au cycle secondaire qualifiant",
      'Préparation des cours, contrôles et fiches pédagogiques',
      'Encadrement de projets et activités numériques',
    ],
  },
  {
    annee: '2024 – 2025',
    poste: 'Professeur stagiaire',
    etab: 'CRMEF Rabat — stage pratique en établissement',
    missions: [
      'Observation et conduite de séances pédagogiques',
      'Élaboration de séquences didactiques conformes au curriculum',
      "Évaluation des apprentissages et remédiation",
    ],
  },
];

export const SKILLS = {
  pedagogiques: [
    'Planification et progression annuelle',
    'Conception de séquences didactiques',
    'Évaluation diagnostique, formative et sommative',
    "Différenciation pédagogique",
    'Gestion de classe et climat scolaire',
  ],
  techniques: [
    'Algorithmique et programmation (Python, C)',
    'Bases de données (SQL, MySQL)',
    'Réseaux et systèmes',
    'Bureautique avancée (Word, Excel, PowerPoint)',
    'Outils numériques pour l’enseignement (LMS, ENT)',
  ],
  transversales: [
    'Communication et écoute active',
    'Travail en équipe pédagogique',
    'Esprit d’analyse et rigueur',
    'Adaptabilité',
  ],
};

export const TEACHING = [
  {
    niveau: 'Tronc Commun Sciences',
    chapitres: ['Environnement numérique de travail', 'Algorithmique – introduction', 'Systèmes d’information'],
  },
  {
    niveau: '1ère Bac Sciences Expérimentales',
    chapitres: ['Programmation Python', 'Structures de contrôle', 'Tableaux et fonctions'],
  },
  {
    niveau: '2ème Bac SVT / PC',
    chapitres: ['Bases de données', 'Algorithmes avancés', 'Projet informatique'],
  },
];

export const VIE_SCOLAIRE = [
  {
    titre: 'Club informatique',
    description: "Animation d'un club hebdomadaire d'initiation à la programmation et à la robotique.",
  },
  {
    titre: 'Journées portes ouvertes',
    description: "Participation à l'organisation et à l'animation des journées portes ouvertes du lycée.",
  },
  {
    titre: 'Accompagnement aux examens',
    description: 'Encadrement des élèves dans la préparation aux examens régionaux et nationaux.',
  },
  {
    titre: 'Activités citoyennes',
    description: "Engagement dans les activités de l'établissement (environnement, civisme numérique).",
  },
];

export const PROJECT = {
  titre: 'Projet de fin de formation — CRMEF Rabat',
  sousTitre: "Intégration des outils numériques dans l'enseignement de l'informatique au secondaire qualifiant",
  resume:
    "Étude-action portant sur l'usage raisonné des outils numériques (plateformes, exerciseurs, IDE en ligne) pour favoriser l'engagement des élèves et la différenciation pédagogique. Le travail propose une séquence type, des grilles d'évaluation et un retour d'expérience terrain.",
  axes: [
    'Cadre théorique : didactique de l’informatique et numérique éducatif',
    'Méthodologie : observation, expérimentation, questionnaire',
    'Séquences expérimentées en classe avec analyse des résultats',
    "Préconisations pour l'intégration durable du numérique",
  ],
};

export const CONTROLES = [
  {
    id: 'diag',
    titre: 'Évaluation diagnostique',
    badge: 'Diagnostique',
    description: "Évaluation des prérequis en début d'année scolaire.",
    niveau: 'Tous niveaux',
    docs: [
      { label: "Rapport d'évaluation", href: '#' },
      { label: 'Correction du contrôle', href: '#' },
      { label: "Fiche d'évaluation", href: '#' },
    ],
  },
  {
    id: 'c1',
    titre: 'Contrôle continu nº 1',
    badge: 'Semestre 1',
    description: 'Premier contrôle continu du semestre 1.',
    niveau: '1ère Bac / 2ème Bac',
    docs: [
      { label: 'Énoncé du contrôle', href: '#' },
      { label: 'Correction du contrôle', href: '#' },
    ],
  },
  {
    id: 'c2',
    titre: 'Contrôle continu nº 2',
    badge: 'Semestre 1',
    description: 'Deuxième contrôle continu du semestre 1.',
    niveau: '1ère Bac / 2ème Bac',
    docs: [
      { label: 'Énoncé du contrôle', href: '#' },
      { label: 'Correction du contrôle', href: '#' },
    ],
  },
  {
    id: 'c3',
    titre: 'Contrôle continu nº 3',
    badge: 'Semestre 2',
    description: 'Premier contrôle continu du semestre 2.',
    niveau: '1ère Bac / 2ème Bac',
    docs: [
      { label: 'Énoncé du contrôle', href: '#' },
      { label: 'Correction du contrôle', href: '#' },
    ],
  },
  {
    id: 'c4',
    titre: 'Contrôle continu nº 4',
    badge: 'Semestre 2',
    description: 'Deuxième contrôle continu du semestre 2.',
    niveau: '1ère Bac / 2ème Bac',
    docs: [
      { label: 'Énoncé du contrôle', href: '#' },
      { label: 'Correction du contrôle', href: '#' },
    ],
  },
];

export const DOCUMENTS = [
  { titre: 'Progression annuelle', type: 'PDF', niveau: 'Tronc Commun' },
  { titre: 'Fiche de séance — Algorithmique', type: 'PDF', niveau: '1ère Bac' },
  { titre: 'TP Python — Structures de contrôle', type: 'PDF', niveau: '1ère Bac' },
  { titre: 'Grille d’évaluation orale', type: 'PDF', niveau: 'Tous niveaux' },
  { titre: 'Cahier de textes (modèle)', type: 'PDF', niveau: 'Tous niveaux' },
  { titre: 'Charte du club informatique', type: 'PDF', niveau: 'Périscolaire' },
];

export const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#formation', label: 'Formation' },
  { href: '#experiences', label: 'Expériences' },
  { href: '#competences', label: 'Compétences' },
  { href: '#enseignement', label: 'Enseignement' },
  { href: '#vie-scolaire', label: 'Vie scolaire' },
  { href: '#projet', label: 'Projet' },
  { href: '#controles', label: 'Contrôles' },
  { href: '#documents', label: 'Documents' },
  { href: '#contact', label: 'Contact' },
];
