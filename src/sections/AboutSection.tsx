import { Target, Heart, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Rigueur pédagogique',
    desc: "Construction de séquences claires, alignées sur les référentiels officiels, avec une évaluation continue et formative.",
  },
  {
    icon: Heart,
    title: 'Bienveillance',
    desc: "Une relation pédagogique fondée sur l'écoute, l'encouragement et la valorisation de chaque parcours d'apprentissage.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: "Intégration du numérique éducatif, des approches actives et de la différenciation pour mieux apprendre.",
  },
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 md:py-28 bg-muted">
      <div className="container-pro">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 text-balance">
            Une vocation pour l&apos;enseignement de l&apos;informatique
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Après un parcours universitaire en Génie Informatique et Gouvernance Digitale,
            j&apos;ai choisi de mettre mes compétences au service de l&apos;éducation. Au CRMEF
            Rabat, je me forme aux pratiques pédagogiques contemporaines pour accompagner
            au mieux les élèves du Lycée Qualifiant Beni Frassen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <article
              key={v.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4">
                <v.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
