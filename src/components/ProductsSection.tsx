/**
 * ============================================================
 * Products Section — Natural Love
 * 
 * Catálogo premium con tarjetas grandes.
 * Los productos se cargan del archivo src/data/products.ts.
 * Para agregar más productos, editar ese archivo.
 * 
 * Cada tarjeta incluye el "Signature Moment": efecto leaf-glow
 * con resplandor orgánico al hacer hover.
 * ============================================================
 */

import { PRODUCTS } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 md:py-28 bg-card/50" aria-labelledby="products-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 id="products-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Nuestros productos
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Línea completa de higiene para el cuidado integral de tu mascota.
          </p>
        </div>

        {/* Staggered masonry-like layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <article
              key={product.id}
              className={`relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/30 leaf-glow group ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              {/* Imagen de producto */}
              <div className="relative overflow-hidden aspect-[4/5] bg-secondary/30">
                <img
                  src={product.image}
                  alt={`${product.name} – Natural Love`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Etiqueta de categoría */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  {product.category}
                </span>
              </div>

              {/* Contenido */}
              <div className="relative z-10 p-6 md:p-7">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Beneficios */}
                <ul className="space-y-1.5 mb-5">
                  {product.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Presentaciones */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.presentations.map((p, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      {p}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => openWhatsApp(product.ctaType)}
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {product.ctaLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
