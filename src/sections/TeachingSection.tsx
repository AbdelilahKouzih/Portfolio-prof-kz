import { BookMarked, FileText, Presentation } from 'lucide-react';

const cards = [
  {
    icon: BookMarked,
    title: 'Planifications',
    desc: 'Planifications annuelles et progressions adaptées aux référentiels officiels.',
  },
  {
    icon: Presentation,
    title: 'Séances de cours',
    desc: 'Fiches pédagogiques détaillées, supports visuels et activités d\'apprentissage.',
  },
  {
    icon: FileText,
    title: 'Ressources élèves',
    desc: 'Documents de synthèse, exercices d\'application et travaux pratiques.',
  },
];

export default function TeachingSection() {
  return (
    <section id="enseignement" className="py-20 md:py-28 bg-muted">
      <div className="container-pro">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
            Enseignement
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            Pratique de classe
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Approche structurée combinant cours magistral, travaux pratiques et évaluations
            régulières pour assurer la progression des apprentissages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <article
              key={c.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 text-accent mb-4">
                <c.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
