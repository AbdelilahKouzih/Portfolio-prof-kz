import { BookOpen, Check } from 'lucide-react';
import { PROJECT } from '../lib/constants';

export default function ProjectSection() {
  return (
    <section id="projet" aria-label="Projet de fin de formation" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">CRMEF Rabat</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-foreground sm:text-4xl">{PROJECT.titre}</h2>
          <p className="mt-3 text-pretty text-lg text-muted-foreground">{PROJECT.sousTitre}</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">Résumé du projet</h3>
              </div>
              <p className="text-pretty leading-relaxed text-muted-foreground">{PROJECT.resume}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading mb-4 text-lg font-semibold text-card-foreground">Axes traités</h3>
              <ul className="space-y-3">
                {PROJECT.axes.map((axe) => (
                  <li key={axe} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                    <span>{axe}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
