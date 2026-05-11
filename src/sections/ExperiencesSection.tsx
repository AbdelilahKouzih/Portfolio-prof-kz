import { Briefcase, School } from 'lucide-react';

const items = [
  {
    period: '2025 — Présent',
    role: "Professeur stagiaire d'Informatique",
    place: 'Lycée Qualifiant Beni Frassen — Taza',
    bullets: [
      'Animation des cours d\'informatique pour les classes du tronc commun et du cycle qualifiant.',
      'Conception de séquences pédagogiques alignées sur les programmes officiels.',
      'Mise en place d\'évaluations diagnostiques, formatives et sommatives.',
    ],
    icon: School,
  },
  {
    period: '2024',
    role: 'Stage professionnel',
    place: "Projet de fin d'études — Génie Informatique",
    bullets: [
      'Développement d\'une application web pour la gestion académique.',
      'Travail en équipe et méthodologie agile.',
    ],
    icon: Briefcase,
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 md:py-28 bg-muted">
      <div className="container-pro">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
            Expériences
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            Expériences professionnelles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article
              key={it.role}
              className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <it.icon size={22} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono font-medium text-accent mb-1">
                    {it.period}
                  </p>
                  <h3 className="font-display font-semibold text-foreground leading-tight">
                    {it.role}
                  </h3>
                  <p className="text-sm text-primary mt-1">{it.place}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
