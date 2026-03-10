/**
 * ============================================================
 * WhatsApp Utility — Natural Love
 * 
 * Número principal de WhatsApp: 3195404226
 * Para cambiar el número, editar WHATSAPP_NUMBER abajo.
 * 
 * Cada CTA del sitio genera un mensaje distinto.
 * Para agregar nuevos mensajes, agregar entradas al objeto MESSAGES.
 * ============================================================
 */

const WHATSAPP_NUMBER = "573195404226";

/** Mensajes predefinidos por tipo de acción */
const MESSAGES: Record<string, string> = {
  shampoo: "Hola, me interesa el Shampoo para mascotas de Natural Love. ¿Podrían darme más información?",
  balsamo: "Hola, quiero cotizar el Bálsamo acondicionador Gold de Natural Love.",
  perfume: "Hola, me interesa el Perfume línea Gold de Natural Love. ¿Tienen disponibilidad?",
  catalogo_profesional: "Hola, me interesa la línea profesional de Natural Love. ¿Podrían enviarme el catálogo?",
  asesor: "Hola, quiero hablar con un asesor de Natural Love.",
  general: "Hola, me comunico desde la web de Natural Love. Quisiera más información.",
};

/**
 * Abre WhatsApp con un mensaje predefinido.
 * @param type - Clave del mensaje (ver MESSAGES)
 * @param customMessage - Mensaje personalizado (opcional, reemplaza el predefinido)
 * 
 * ANALYTICS: Aquí se puede agregar tracking de eventos:
 * gtag('event', 'whatsapp_click', { action_type: type });
 * fbq('track', 'Contact', { method: 'whatsapp', type });
 */
export function openWhatsApp(type: string = "general", customMessage?: string) {
  const message = customMessage || MESSAGES[type] || MESSAGES.general;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  
  // Evento de analytics placeholder
  // if (typeof gtag !== 'undefined') gtag('event', 'whatsapp_click', { action_type: type });
  
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Genera un mensaje de WhatsApp para el formulario profesional.
 */
export function buildProfessionalMessage(data: {
  nombre: string;
  negocio: string;
  ciudad: string;
  tipo: string;
  productos: string;
  volumen: string;
}) {
  return `Hola, soy ${data.nombre} de ${data.negocio}. Me interesa la línea profesional de Natural Love. Mi negocio es ${data.tipo}, estoy en ${data.ciudad} y quiero cotizar ${data.productos} para un volumen aproximado de ${data.volumen}.`;
}

/**
 * Genera un mensaje de WhatsApp para el formulario de contacto general.
 */
export function buildContactMessage(data: {
  nombre: string;
  telefono: string;
  ciudad: string;
  interes: string;
  mensaje: string;
}) {
  return `Hola, soy ${data.nombre} de ${data.ciudad}. Me comunico desde la web de Natural Love. Interés: ${data.interes}. ${data.mensaje}. Mi teléfono: ${data.telefono}`;
}
