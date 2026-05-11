import { GraduationCap } from 'lucide-react';

const items = [
  {
    year: '2025 — 2026',
    title: 'CRMEF Rabat',
    sub: "Centre Régional des Métiers de l'Éducation et de la Formation",
    desc: "Formation qualifiante pour le métier de professeur d'informatique de l'enseignement secondaire qualifiant.",
  },
  {
    year: '2022 — 2025',
    title: 'Licence — Génie Informatique et Gouvernance Digitale',
    sub: 'Université',
    desc: "Formation universitaire alliant fondamentaux de l'informatique, développement logiciel et gouvernance des systèmes d'information.",
  },
  {
    year: '2022',
    title: 'Baccalauréat — Sciences',
    sub: 'Enseignement secondaire qualifiant',
    desc: 'Obtention du baccalauréat scientifique avec mention.',
  },
];

export default function FormationSection() {
  return (
    <section id="formation" className="py-20 md:py-28 bg-background">
      <div className="container-pro">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
            Parcours
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            Formation académique
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Un parcours universitaire solide complété par une formation pédagogique
            spécialisée.
          </p>
        </div>

        <ol className="relative border-l-2 border-border ml-3 flex flex-col gap-8">
          {items.map((it) => (
            <li key={it.title} className="pl-8 relative">
              <span className="absolute -left-[13px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground border-4 border-background">
                <GraduationCap size={12} aria-hidden="true" />
              </span>
              <p className="text-xs font-mono font-medium text-accent mb-1">{it.year}</p>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="text-sm font-medium text-primary mb-2">{it.sub}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {it.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
