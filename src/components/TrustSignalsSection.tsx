/**
 * ============================================================
 * Trust Signals Section — Natural Love
 * Señales de confianza reales (sin testimonios inventados).
 * ============================================================
 */

const SIGNALS = [
  "Marca orientada al cuidado de mascotas",
  "Línea visible de shampoo, bálsamo y perfume",
  "Presentaciones hogar y profesional",
  "Atención directa por WhatsApp",
];

const TrustSignalsSection = () => (
  <section className="py-16 md:py-20" aria-labelledby="trust-heading">
    <div className="container">
      <h2 id="trust-heading" className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-10">
        Señales de confianza
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {SIGNALS.map((s, i) => (
          <div key={i} className="flex items-center gap-3 bg-card rounded-2xl p-5 border border-border/30 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="text-sm font-medium text-foreground">{s}</span>
          </div>
        ))}
      </div>
      {/* Bloque "Por confirmar" para certificaciones futuras */}
      {/*
        TODO — Certificaciones:
        Si la marca obtiene certificaciones o registros oficiales,
        agregar aquí un bloque visual con los logos/sellos correspondientes.
        Ejemplo:
        <div className="mt-8 text-center">
          <img src="/certificacion.png" alt="Certificación XYZ" />
        </div>
      */}
    </div>
  </section>
);

export default TrustSignalsSection;
