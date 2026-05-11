import { MapPin, GraduationCap, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 bg-primary -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-accent -z-0"
        aria-hidden="true"
      />

      <div className="container-pro relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-primary font-mono">
              Professeur d&apos;Informatique · CRMEF Rabat
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground text-balance leading-[1.05]">
            Kouzih <span className="text-primary">Abdelilah</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Professeur d&apos;Informatique certifié, formé au CRMEF Rabat. Titulaire d&apos;une
            Licence en Génie Informatique et Gouvernance Digitale, je conjugue rigueur
            pédagogique et passion pour l&apos;enseignement au Lycée Qualifiant Beni
            Frassen.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-primary" aria-hidden="true" />
              Beni Frassen, Taza · Maroc
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap size={16} className="text-primary" aria-hidden="true" />
              CRMEF Rabat — Promotion 2026
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="#controles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Voir mes contrôles
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl border-2 border-border bg-muted overflow-hidden shadow-xl">
              <img
                src="/images/prof.png"
                alt="Portrait de Kouzih Abdelilah, Professeur d'Informatique"
                className="w-72 md:w-80 lg:w-[22rem] h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl shadow-md px-4 py-3">
              <p className="text-xs font-mono text-muted-foreground">Spécialité</p>
              <p className="text-sm font-display font-semibold text-primary">
                Informatique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
