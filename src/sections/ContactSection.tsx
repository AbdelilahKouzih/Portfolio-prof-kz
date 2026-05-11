import { Mail, MapPin, Phone } from 'lucide-react';

const items = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kouzih.abdelilah@example.ma',
    href: 'mailto:kouzih.abdelilah@example.ma',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+212 6 00 00 00 00',
    href: 'tel:+212600000000',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Beni Frassen, Taza · Maroc',
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container-pro">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            Restons en contact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Pour toute demande, collaboration ou échange professionnel, je reste joignable
            par les canaux ci-dessous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it) => {
            const Content = (
              <>
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4">
                  <it.icon size={22} aria-hidden="true" />
                </div>
                <p className="text-xs font-mono font-medium text-accent uppercase tracking-wider mb-1">
                  {it.label}
                </p>
                <p className="text-sm font-medium text-foreground break-words">
                  {it.value}
                </p>
              </>
            );
            return it.href ? (
              <a
                key={it.label}
                href={it.href}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                {Content}
              </a>
            ) : (
              <article
                key={it.label}
                className="bg-card border border-border rounded-2xl p-6"
              >
                {Content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
