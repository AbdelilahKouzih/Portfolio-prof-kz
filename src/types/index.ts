export type Doc = {
  label: string;
  href: string;
};

export type Controle = {
  id: string;
  titre: string;
  badge: string;
  description: string;
  niveau: string;
  docs: Doc[];
};
