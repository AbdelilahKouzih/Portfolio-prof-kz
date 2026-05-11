import {
  ClipboardList,
  FileText,
  FileCheck2,
  FileSpreadsheet,
  Download,
  CalendarDays,
} from 'lucide-react';

type Doc = {
  label: string;
  icon: typeof FileText;
  href: string;
};

type Controle = {
  id: string;
  title: string;
  level: string;
  date: string;
  desc: string;
  isDiagnostic?: boolean;
  documents: Doc[];
};

const controles: Controle[] = [
  {
    id: 'evaluation-diagnostique',
    title: 'Évaluation diagnostique',
    level: 'Tronc commun · Cycle qualifiant',
    date: 'Septembre 2025',
    desc: "Évaluation initiale permettant d'identifier les acquis et les besoins des élèves en début d'année scolaire.",
    isDiagnostic: true,
    documents: [
      { label: "Rapport d'évaluation", icon: FileSpreadsheet, href: '#' },
      { label: "Éléments de réponse", icon: FileCheck2, href: '#' },
      { label: "Fiche d'évaluation", icon: ClipboardList, href: '#' },
    ],
  },
  {
    id: 'controle-1',
    title: 'Contrôle nº 1',
    level: 'Tronc commun',
    date: 'Premier semestre',
    desc: "Premier contrôle continu portant sur les notions introductives de l'informatique.",
    documents: [
      { label: "Énoncé du contrôle", icon: FileText, href: '#' },
      { label: "Éléments de réponse", icon: FileCheck2, href: '#' },
    ],
  },
  {
    id: 'controle-2',
    title: 'Contrôle nº 2',
    level: 'Tronc commun',
    date: 'Premier semestre',
    desc: "Évaluation portant sur les composants matériels et logiciels d'un système informatique.",
    documents: [
      { label: "Énoncé du contrôle", icon: FileText, href: '#' },
      { label: "Éléments de réponse", icon: FileCheck2, href: '#' },
    ],
  },
  {
    id: 'controle-3',
    title: 'Contrôle nº 3',
    level: 'Cycle qualifiant',
    date: 'Second semestre',
    desc: "Contrôle portant sur l'algorithmique et les structures de contrôle.",
    documents: [
      { label: "Énoncé du contrôle", icon: FileText, href: '#' },
      { label: "Éléments de réponse", icon: FileCheck2, href: '#' },
    ],
  },
  {
    id: 'controle-4',
    title: 'Contrôle nº 4',
    level: 'Cycle qualifiant',
    date: 'Second semestre',
    desc: "Évaluation finale portant sur la programmation et la résolution de problèmes.",
    documents: [
      { label: "Énoncé du contrôle", icon: FileText, href: '#' },
      { label: "Éléments de réponse", icon: FileCheck2, href: '#' },
    ],
  },
];

function DocLink({ doc }: { doc: Doc }) {
  return (
    <a
      href={doc.href}
      className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-colors"
    >
      <span className="flex items-center gap-2.5 min-w-0">
        <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary shrink-0">
          <doc.icon size={16} aria-hidden="true" />
        </span>
        <span className="text-sm font-medium text-foreground truncate">{doc.label}</span>
      </span>
      <Download
        size={15}
        className="text-muted-foreground group-hover:text-primary shrink-0"
        aria-hidden="true"
      />
    </a>
  );
}

function ControleCard({ c }: { c: Controle }) {
  const accent = c.isDiagnostic;
  return (
    <article
      className={`rounded-2xl p-6 md:p-7 border transition-all hover:shadow-md ${
        accent
          ? 'bg-card border-accent/30 ring-1 ring-accent/20'
          : 'bg-card border-border'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={`flex items-center justify-center w-11 h-11 rounded-lg shrink-0 ${
              accent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
            }`}
          >
            <ClipboardList size={22} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
              {c.title}
            </h3>
            <p className="text-xs font-mono text-muted-foreground mt-1">{c.level}</p>
          </div>
        </div>
        {accent && (
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-1 rounded-md shrink-0">
            Diagnostique
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>

      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
        <CalendarDays size={14} className="text-primary" aria-hidden="true" />
        <span className="font-mono">{c.date}</span>
      </div>

      <div className="flex flex-col gap-2">
        {c.documents.map((d) => (
          <DocLink key={d.label} doc={d} />
        ))}
      </div>
    </article>
  );
}

export default function ControlesSection() {
  const diagnostic = controles.find((c) => c.isDiagnostic)!;
  const others = controles.filter((c) => !c.isDiagnostic);

  return (
    <section id="controles" className="py-20 md:py-28 bg-background">
      <div className="container-pro">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
            Évaluations
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            Contrôles & évaluations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Documents d&apos;évaluation conçus pour mesurer les acquis des élèves :
            évaluation diagnostique en début d&apos;année et contrôles continus tout au
            long du cursus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <ControleCard c={diagnostic} />
          <ControleCard c={others[0]} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.slice(1).map((c) => (
            <ControleCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
