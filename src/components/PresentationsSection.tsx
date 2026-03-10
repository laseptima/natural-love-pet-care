/**
 * ============================================================
 * Presentations Section — Natural Love
 * "Formatos para cada necesidad"
 * 
 * Presentaciones hogar y profesional.
 * Estas presentaciones se deben validar o editar fácilmente
 * desde las constantes HOME_SIZES y PRO_SIZES abajo.
 * ============================================================
 */

/* Editar aquí las presentaciones disponibles */
const HOME_SIZES = ["120 cc", "250 cc", "500 cc", "1000 cc"];
const PRO_SIZES = ["1000 cc", "Galón", "5 Litros", "20 Litros"];

const PresentationsSection = () => {
  return (
    <section className="py-20 md:py-28" aria-labelledby="presentations-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 id="presentations-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Formatos para cada necesidad
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hogar */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Hogar</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Formatos prácticos para el cuidado diario de tu mascota.
            </p>
            <div className="flex flex-wrap gap-2">
              {HOME_SIZES.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Profesional */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-primary mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Profesional / Pet Grooming</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Presentaciones pensadas para peluquerías caninas, veterinarias y servicios de grooming.
            </p>
            <div className="flex flex-wrap gap-2">
              {PRO_SIZES.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationsSection;
