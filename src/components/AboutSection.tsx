/**
 * ============================================================
 * About Section — Natural Love
 * Historia, Misión, Visión y Valores.
 * Diseño con timeline suave y fondos alternados.
 * ============================================================
 */

/* Imágenes reales de productos — cambiar aquí si se actualizan */
import productosRealesImg from "@/assets/productos_natural_love_reales.jpeg";
import productosReales2Img from "@/assets/productos_natural_love_reales_2.jpeg";

const VALUES = [
  "Amor por las mascotas",
  "Calidad en cada producto",
  "Compromiso con nuestros clientes",
  "Responsabilidad y confianza",
  "Innovación en el cuidado animal",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28" aria-labelledby="about-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 id="about-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Nosotros
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Conoce la historia y el propósito detrás de Natural Love.
          </p>
        </div>

        {/* Timeline blocks */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Historia */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Nuestra historia</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Natural Love nace del amor por las mascotas y del deseo de ofrecer productos confiables para su cuidado diario. Creemos que cada mascota merece un trato especial, por eso desarrollamos soluciones pensadas para mantener su pelaje limpio, suave y saludable.
            </p>
          </div>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">Misión</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Brindar productos de higiene para mascotas de alta calidad, desarrollados con responsabilidad, amor y compromiso, que contribuyan al bienestar, limpieza y cuidado del pelaje y la piel.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">Visión</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ser una marca reconocida en Colombia por la calidad de sus productos para mascotas y por su compromiso con el bienestar animal.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-secondary/50 rounded-3xl p-8">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-5 text-center">
              Nuestros valores
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {VALUES.map((v) => (
                <span key={v} className="px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium border border-border/30 shadow-sm">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
