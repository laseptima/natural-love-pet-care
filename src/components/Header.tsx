/**
 * ============================================================
 * Header — Natural Love
 * 
 * Sticky header con blur.
 * Logo: importado desde src/assets/logo_natural_love.png
 * Si el archivo del logo cambia, actualizar el import abajo.
 * ============================================================
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

/* Logo — cambiar esta ruta si el archivo del logo se renombra */
import logoSrc from "@/assets/logo_natural_love.png";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Línea profesional", href: "#profesional" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0" aria-label="Natural Love - Inicio">
          <img
            src={logoSrc}
            alt="Natural Love – Productos de higiene para mascotas"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <button
          onClick={() => openWhatsApp("general")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Pedir por WhatsApp"
        >
          {/* WhatsApp icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.726-6.375-1.974l-.444-.31-2.633.883.883-2.633-.31-.444A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          Pedir por WhatsApp
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-card border-t border-border/50 animate-in slide-in-from-top-2 duration-200"
          aria-label="Navegación móvil"
        >
          <div className="container py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openWhatsApp("general");
              }}
              className="mt-2 w-full py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm"
            >
              Pedir por WhatsApp
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
