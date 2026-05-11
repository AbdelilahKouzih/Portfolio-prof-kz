import { FileText, Download } from 'lucide-react';
import { DOCUMENTS } from '../lib/constants';

export default function DocumentsSection() {
  return (
    <section id="documents" aria-label="Documents pédagogiques" className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Ressources</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-foreground sm:text-4xl">Documents pédagogiques</h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Sélection de ressources : progressions, fiches, grilles d'évaluation et travaux pratiques.
          </p>
        </header>

        <ul className="grid gap-3 md:grid-cols-2">
          {DOCUMENTS.map((doc) => (
            <li key={doc.titre}>
              <a
                href="#"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-accent hover:shadow-sm"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium text-card-foreground">{doc.titre}</span>
                  <span className="block text-xs text-muted-foreground">
                    {doc.type} · {doc.niveau}
                  </span>
                </span>
                <Download className="h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
