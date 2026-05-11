import { Code2, Users, BookOpen, MonitorSmartphone } from 'lucide-react';

const groups = [
  {
    icon: BookOpen,
    title: 'Pédagogie',
    skills: ['Ingénierie pédagogique', 'Différenciation', 'Évaluation formative', 'Gestion de classe'],
  },
  {
    icon: Code2,
    title: 'Programmation',
    skills: ['Python', 'JavaScript', 'C / C++', 'Bases de données SQL'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Numérique éducatif',
    skills: ['Outils TICE', 'Plateformes LMS', 'Création de ressources', 'Tableau numérique'],
  },
  {
    icon: Users,
    title: 'Compétences douces',
    skills: ['Communication', 'Travail en équipe', 'Adaptabilité', 'Sens de l\'écoute'],
  },
];

export default function SkillsSection() {
  return (
    <section id="competences" className="py-20 md:py-28 bg-background">
      <div className="container-pro">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            Pédagogiques & techniques
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <article
              key={g.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4">
                <g.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-3">
                {g.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {s}
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
