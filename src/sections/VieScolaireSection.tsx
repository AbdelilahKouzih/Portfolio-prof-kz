import { Users, Calendar, GraduationCap, Sparkles } from 'lucide-react';
import { VIE_SCOLAIRE } from '../lib/constants';

const ICONS = [Users, Calendar, GraduationCap, Sparkles];

export default function VieScolaireSection() {
  return (
    <section id="vie-scolaire" aria-label="Vie scolaire" className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Engagement</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-foreground sm:text-4xl">Vie scolaire</h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Au-delà de la classe : implication dans la vie de l'établissement et l'accompagnement des élèves.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VIE_SCOLAIRE.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article
                key={item.titre}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading mt-4 text-lg font-semibold text-card-foreground">{item.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
