export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container-pro py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kouzih Abdelilah — Tous droits réservés.
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Professeur d&apos;Informatique · Lycée Qualifiant Beni Frassen, Taza
        </p>
      </div>
    </footer>
  );
}
