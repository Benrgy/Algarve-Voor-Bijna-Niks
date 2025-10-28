export const heroImageBySlug: Record<string, string> = (() => {
  const modules = import.meta.glob<string>("@/assets/destinations/*-hero.jpg", {
    eager: true,
    import: "default",
  });
  const map: Record<string, string> = {};
  for (const [path, src] of Object.entries(modules)) {
    const filename = path.split("/").pop()!;
    const slug = filename.replace(/-hero\.jpg$/i, "");
    map[slug] = src as unknown as string;
  }
  return map;
})();

export function resolveDestinationHeroImage(input: { slug: string; hero_image?: string }) {
  // Prefer absolute URLs provided by backend
  if (input.hero_image && /^https?:\/\//i.test(input.hero_image)) return input.hero_image;

  // Try slug-based match from bundled assets
  const bySlug = heroImageBySlug[input.slug];
  if (bySlug) return bySlug;

  // If backend provided a relative path, try to infer slug from filename
  if (input.hero_image) {
    const file = input.hero_image.split("/").pop() || "";
    const inferred = file.replace(/-hero\.jpg$/i, "");
    if (heroImageBySlug[inferred]) return heroImageBySlug[inferred];
  }

  return undefined;
}
