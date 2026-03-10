/**
 * ============================================================
 * Footer — Natural Love
 * 
 * Logo: importado desde src/assets/logo_natural_love.png
 * Si el archivo del logo cambia, actualizar el import abajo.
 * ============================================================
 */

import { openWhatsApp } from "@/lib/whatsapp";

/* Logo — cambiar esta ruta si el archivo del logo se renombra */
import logoSrc from "@/assets/logo_natural_love.png";

const QUICK_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Línea profesional", href: "#profesional" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground pt-16 pb-8" role="contentinfo">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          {/* Logo del footer — cambiar aquí si se actualiza el logo */}
          <img
            src={logoSrc}
            alt="Natural Love – Logo"
            className="h-16 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Natural Love – Cuidado e higiene para mascotas con amor, calidad y confianza.
          </p>
          <p className="text-xs text-primary-foreground/50 mt-2 italic">
            Hecho para convertir visitas en conversaciones por WhatsApp.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Enlaces rápidos</h4>
          <nav aria-label="Enlaces del footer" className="space-y-2">
            {QUICK_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Contacto</h4>
          <p className="text-sm text-primary-foreground/70">Medellín, Antioquia, Colombia</p>
          <button
            onClick={() => openWhatsApp("general")}
            className="text-sm text-primary-foreground/70 hover:text-primary-foreground mt-2 block transition-colors"
          >
            WhatsApp: 319 540 4226
          </button>
          <a href="mailto:biomaorganics21@gmail.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground mt-1 block transition-colors">
            biomaorganics21@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Natural Love. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          {/* TODO: Agregar enlaces reales a aviso legal y política de privacidad */}
          <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
            Aviso legal
          </a>
          <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
            Política de privacidad
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
