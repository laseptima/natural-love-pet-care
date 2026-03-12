/**
 * ============================================================
 * Testimonials Section — Natural Love
 * 
 * Sección de testimonios de clientes reales.
 * Para agregar, editar o eliminar testimonios:
 * - Modificar el array TESTIMONIALS abajo.
 * - Cada testimonio tiene: nombre, rol, texto, rating, ciudad.
 * 
 * Imagen de apoyo: importada desde src/assets/
 * Si la foto cambia, actualizar el import correspondiente.
 * ============================================================
 */

/** Array de testimonios — editar aquí para agregar o cambiar opiniones */
const TESTIMONIALS = [
  {
    id: "t1",
    name: "Carolina Vélez",
    role: "Dueña de mascota",
    city: "Medellín",
    rating: 5,
    text: "Desde que uso el shampoo de Natural Love, el pelaje de mi Golden se ve increíble. Queda suave, brillante y con un aroma que dura días. ¡No cambio esta marca por nada!",
  },
  {
    id: "t2",
    name: "Andrés Gómez",
    role: "Peluquero canino – Happy Paws Grooming",
    city: "Envigado",
    rating: 5,
    text: "Llevo 8 meses usando la línea profesional en mi peluquería y los clientes siempre preguntan qué productos uso. El bálsamo desenreda de verdad y el rendimiento es excelente.",
  },
  {
    id: "t3",
    name: "María Fernanda Ríos",
    role: "Veterinaria",
    city: "Sabaneta",
    rating: 5,
    text: "Recomiendo Natural Love a mis pacientes porque la fórmula es suave con la piel. Además, las presentaciones profesionales me permiten usarlo en la clínica sin preocuparme por el rendimiento.",
  },
  {
    id: "t4",
    name: "Juan Pablo Restrepo",
    role: "Groomer independiente",
    city: "Bello",
    rating: 5,
    text: "El perfume Gold es espectacular. Mis clientes quedan encantados con el acabado final. Natural Love le da un toque premium a mi servicio de grooming.",
  },
];

/** Componente de estrellas de rating */
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < count ? "hsl(var(--primary))" : "none"}
        stroke={i < count ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
        strokeWidth="1.5"
        className="shrink-0"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-foreground"
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Familias, groomers y veterinarios confían en Natural Love.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="bg-card rounded-3xl p-7 shadow-sm border border-border/30 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Rating */}
              <Stars count={t.rating} />

              {/* Texto del testimonio */}
              <blockquote className="text-foreground/90 leading-relaxed text-sm md:text-base italic">
                "{t.text}"
              </blockquote>

              {/* Autor */}
              <div className="mt-auto pt-4 border-t border-border/20">
                <p className="font-heading font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.city}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Galería de fotos reales — cambiar estas imágenes si se actualizan */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={productosRealesImg}
              alt="Productos Natural Love en la naturaleza – Shampoo, Bálsamo y Perfume Gold"
              className="w-full h-64 md:h-72 object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={productosReales2Img}
              alt="Línea completa Natural Love – Productos para mascotas en entorno natural"
              className="w-full h-64 md:h-72 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
