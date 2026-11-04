import publications from "../data/publications.json";

export type Publication = (typeof publications)[number];

export const typeLabels: Record<string, string> = {
  journal: "Journal article",
  conference: "Conference paper",
  poster: "Poster",
  workshop: "Workshop paper",
  "doctoral-colloquium": "Doctoral colloquium",
  magazine: "Magazine article",
};

export const isFullPaper = (p: Publication) => p.type === "journal" || p.type === "conference";

export const allPublications = publications as Publication[];

export const byId = (id: string) => {
  const found = allPublications.find((p) => p.id === id);
  if (!found) throw new Error(`No publication with id ${id}`);
  return found;
};

export const doiUrl = (p: Publication) => (p.doi ? `https://doi.org/${p.doi}` : null);

/** Short author list for cards: family names only. */
export const surnames = (p: Publication) =>
  p.authors.map((a) => a.replace(/\s*\(.*?\)\s*/g, " ").trim().split(/\s+/).pop()).join(", ");
