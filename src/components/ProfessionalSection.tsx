/**
 * ============================================================
 * Professional Line Section — Natural Love
 * Sección enfocada en B2B: groomers, veterinarias, tiendas pet.
 * 
 * Formulario profesional con envío a WhatsApp.
 * BACKEND: La función handleSubmit está preparada para integrar
 * un backend (API, Supabase, etc.) en el futuro.
 * Buscar el comentario "BACKEND HOOK" abajo.
 * ============================================================
 */

import { useState } from "react";
import { openWhatsApp, buildProfessionalMessage } from "@/lib/whatsapp";

/* Imagen de línea profesional — cambiar aquí si se actualiza */
import proImg from "@/assets/productos_natural_love_2.jpeg";

const HIGHLIGHTS = [
  { title: "Compra para grooming", desc: "Productos con rendimiento profesional." },
  { title: "Compra por volumen", desc: "Presentaciones grandes para operación continua." },
  { title: "Atención personalizada", desc: "Te asesoramos según tu negocio." },
  { title: "Cotización directa", desc: "Respuesta rápida por WhatsApp." },
];

const BUSINESS_TYPES = [
  "Peluquería canina",
  "Veterinaria",
  "Groomer independiente",
  "Tienda pet",
];

const ProfessionalSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    negocio: "",
    ciudad: "",
    tipo: "",
    productos: "",
    volumen: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * BACKEND HOOK — Integración futura
     * Aquí se puede enviar los datos del formulario a:
     * - Supabase (insert en tabla de leads)
     * - API REST (fetch POST)
     * - CRM / Email service
     * Ejemplo:
     * await supabase.from('leads_profesional').insert(form);
     * 
     * ANALYTICS:
     * gtag('event', 'form_submit', { form_type: 'professional' });
     * fbq('track', 'Lead', { content_name: 'professional_form' });
     */

    const message = buildProfessionalMessage(form);
    openWhatsApp("catalogo_profesional", message);
    setSubmitted(true);
  };

  return (
    <section id="profesional" className="py-20 md:py-28 bg-card/50" aria-labelledby="pro-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <h2 id="pro-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Natural Love para negocios del cuidado animal
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Si tienes peluquería canina, veterinaria o prestas servicios de grooming, Natural Love te ofrece productos con buena presentación, rendimiento y una imagen de marca confiable para tu operación.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className="bg-background rounded-2xl p-5 border border-border/30">
                  <h3 className="font-heading font-semibold text-foreground mb-1">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Imagen profesional */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={proImg}
                alt="Presentaciones profesionales de shampoo Natural Love para grooming"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Solicitar catálogo profesional
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="font-heading font-semibold text-lg text-foreground">¡Solicitud enviada!</p>
                <p className="text-sm text-muted-foreground mt-2">Te redirigimos a WhatsApp para continuar la conversación.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-primary underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="pro-nombre" className="block text-sm font-medium text-foreground mb-1">Nombre *</label>
                  <input id="pro-nombre" name="nombre" required value={form.nombre} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="pro-negocio" className="block text-sm font-medium text-foreground mb-1">Negocio *</label>
                  <input id="pro-negocio" name="negocio" required value={form.negocio} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="pro-ciudad" className="block text-sm font-medium text-foreground mb-1">Ciudad *</label>
                  <input id="pro-ciudad" name="ciudad" required value={form.ciudad} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="pro-tipo" className="block text-sm font-medium text-foreground mb-1">Tipo de negocio *</label>
                  <select id="pro-tipo" name="tipo" required value={form.tipo} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Seleccionar...</option>
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="pro-productos" className="block text-sm font-medium text-foreground mb-1">Productos de interés</label>
                  <input id="pro-productos" name="productos" value={form.productos} onChange={handleChange} placeholder="Ej: Shampoo, Bálsamo" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="pro-volumen" className="block text-sm font-medium text-foreground mb-1">Volumen aproximado</label>
                  <input id="pro-volumen" name="volumen" value={form.volumen} onChange={handleChange} placeholder="Ej: 10 galones/mes" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="pro-mensaje" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
                  <textarea id="pro-mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Solicitar catálogo profesional
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
