/**
 * ============================================================
 * Benefits Section — "Por qué eligen Natural Love"
 * ============================================================
 */

const BENEFITS = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    title: "Excelente rendimiento",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>,
    title: "Fragancias agradables",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: "Resultados profesionales",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>,
    title: "Presentaciones para diferentes necesidades",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    title: "Imagen de marca confiable",
  },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-card/50" aria-labelledby="benefits-heading">
    <div className="container">
      <h2 id="benefits-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
        Por qué eligen Natural Love
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {BENEFITS.map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border border-border/30 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {b.icon}
            </div>
            <h3 className="font-heading font-semibold text-sm text-foreground">{b.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
