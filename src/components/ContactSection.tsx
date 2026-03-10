/**
 * ============================================================
 * Contact Section — Natural Love
 * 
 * Formulario de contacto general + info de contacto.
 * Al enviar, abre WhatsApp con mensaje prellenado.
 * 
 * BACKEND HOOK: buscar "BACKEND HOOK" abajo para conectar
 * a email, CRM o API en el futuro.
 * ============================================================
 */

import { useState } from "react";
import { openWhatsApp, buildContactMessage } from "@/lib/whatsapp";

const INTEREST_OPTIONS = [
  "Comprar producto",
  "Cotizar para grooming",
  "Distribución",
  "Otro",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    ciudad: "",
    interes: "",
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
     * Enviar datos a:
     * - Supabase: await supabase.from('contacto').insert(form);
     * - Email: fetch('/api/send-email', { method: 'POST', body: JSON.stringify(form) });
     * - CRM: integrar con HubSpot, Zoho, etc.
     * 
     * ANALYTICS:
     * gtag('event', 'form_submit', { form_type: 'contact' });
     * fbq('track', 'Contact');
     */

    const message = buildContactMessage(form);
    openWhatsApp("general", message);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <h2 id="contact-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Contáctanos
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Estamos listos para atenderte. Escríbenos por WhatsApp o usa el formulario.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <p className="font-medium text-foreground">Ubicación</p>
                  <p className="text-sm text-muted-foreground">Medellín, Antioquia, Colombia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <a href="https://wa.me/573195404226" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">319 540 4226</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <p className="font-medium text-foreground">Correo comercial</p>
                  <a href="mailto:biomaorganics21@gmail.com" className="text-sm text-primary hover:underline">biomaorganics21@gmail.com</a>
                </div>
              </div>
              {/*
                Correo de etiqueta / fabricante (dato opcional, no visible por defecto):
                futuro.oil@gmail.com — Fabricante: FUTURO OIL S.A.S
                Descomentar este bloque cuando se confirme su uso público.
              */}
            </div>

            <button
              onClick={() => openWhatsApp("asesor")}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Hablar con un asesor
            </button>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Envíanos un mensaje
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="font-heading font-semibold text-lg text-foreground">¡Mensaje enviado!</p>
                <p className="text-sm text-muted-foreground mt-2">Te redirigimos a WhatsApp.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary underline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="c-nombre" className="block text-sm font-medium text-foreground mb-1">Nombre *</label>
                  <input id="c-nombre" name="nombre" required value={form.nombre} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="c-telefono" className="block text-sm font-medium text-foreground mb-1">Teléfono *</label>
                  <input id="c-telefono" name="telefono" type="tel" required value={form.telefono} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="c-ciudad" className="block text-sm font-medium text-foreground mb-1">Ciudad *</label>
                  <input id="c-ciudad" name="ciudad" required value={form.ciudad} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="c-interes" className="block text-sm font-medium text-foreground mb-1">Interés *</label>
                  <select id="c-interes" name="interes" required value={form.interes} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Seleccionar...</option>
                    {INTEREST_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-mensaje" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
                  <textarea id="c-mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <button type="submit" className="w-full py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
