/**
 * ============================================================
 * Hero Section — Natural Love
 * 
 * Composición asimétrica: texto izquierda, imagen derecha.
 * Imagen del hero: importada desde src/assets/productos_natural_love.jpeg
 * Si el archivo cambia, actualizar el import abajo.
 * ============================================================
 */

import { openWhatsApp } from "@/lib/whatsapp";

/* Imagen hero — cambiar aquí si la foto se actualiza */
import heroImg from "@/assets/lociones.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div className="max-w-xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Cuidado que se nota,{" "}
              <span className="text-primary">amor que se siente</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Productos de higiene para mascotas diseñados para limpiar, suavizar y proteger su piel y pelaje, con una línea pensada tanto para el hogar como para profesionales del grooming.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => openWhatsApp("general")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.726-6.375-1.974l-.444-.31-2.633.883.883-2.633-.31-.444A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                Comprar por WhatsApp
              </button>
              <a
                href="#productos"
                className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-primary text-primary font-heading font-semibold text-base hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Ver productos
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Hecho con amor para mascotas y con enfoque profesional para resultados confiables.
            </p>
          </div>

          {/* Imagen */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 max-w-md lg:max-w-lg">
              <img
                src={heroImg}
                alt="Línea completa de productos Natural Love: shampoo, bálsamo y perfume para mascotas"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Decorative leaf shape */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-[60%_40%_40%_60%/60%_30%_70%_40%] bg-accent/20 blur-2xl pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/40 blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
