/**
 * ============================================================
 * Differentials Section — Natural Love
 * "Más que higiene, una experiencia de bienestar para tu mascota"
 * ============================================================
 */

const CARDS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    ),
    title: "Suavidad y cuidado del pelaje",
    text: "Fórmulas que ayudan a mantener el pelaje limpio, suave y con apariencia saludable.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "Fragancias agradables",
    text: "Aromas pensados para que tu mascota se sienta fresca y huele agradable por más tiempo.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
    ),
    title: "Presentaciones para distintas necesidades",
    text: "Desde formatos pequeños para el hogar hasta presentaciones profesionales para grooming.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
    title: "Soluciones para hogar y grooming",
    text: "Productos que funcionan igual de bien para familias como para profesionales del cuidado animal.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 md:py-28" aria-labelledby="diff-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 id="diff-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Más que higiene, una experiencia de bienestar para tu mascota
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Natural Love desarrolla productos pensados para que cada baño sea una experiencia de limpieza, suavidad y cuidado, ayudando a mantener el pelaje en mejores condiciones y dando una sensación fresca y agradable. La marca está pensada para familias que aman a sus mascotas y para negocios que necesitan productos rendidores y confiables.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="relative bg-card rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-border/30 leaf-glow overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {card.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
