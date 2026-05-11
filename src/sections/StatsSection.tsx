import { STATS } from '../lib/constants';

export default function StatsSection() {
  return (
    <section id="stats" aria-label="Chiffres clés" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl font-bold sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-primary-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
