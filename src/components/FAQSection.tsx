/**
 * ============================================================
 * FAQ Section — Natural Love
 * Acordeón con preguntas frecuentes.
 * Para agregar más preguntas, editar el array FAQ_ITEMS.
 * ============================================================
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    q: "¿Qué productos maneja Natural Love?",
    a: "Manejamos una línea completa de higiene para mascotas que incluye shampoo, bálsamo acondicionador y perfume línea Gold. Todos diseñados para limpiar, suavizar y cuidar el pelaje de tu mascota.",
  },
  {
    q: "¿Tienen presentaciones para grooming?",
    a: "Sí, contamos con presentaciones profesionales pensadas para peluquerías caninas, veterinarias y groomers independientes, incluyendo formatos de galón y envases grandes.",
  },
  {
    q: "¿Puedo pedir por WhatsApp?",
    a: "¡Por supuesto! Todos nuestros productos se pueden pedir directamente por WhatsApp. Solo haz clic en cualquier botón de WhatsApp en la web y te atenderemos de inmediato.",
  },
  {
    q: "¿Venden para negocio o solo para hogar?",
    a: "Vendemos tanto para hogares como para negocios del cuidado animal. Tenemos una línea profesional con presentaciones especiales y atención personalizada para negocios.",
  },
  {
    q: "¿Cómo puedo cotizar por volumen?",
    a: "Puedes solicitar una cotización por volumen a través de nuestra sección de línea profesional o contactándonos directamente por WhatsApp. Te daremos atención personalizada según las necesidades de tu negocio.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-card/50" aria-labelledby="faq-heading">
    <div className="container">
      <div className="max-w-2xl mx-auto">
        <h2 id="faq-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
          Preguntas frecuentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl border border-border/30 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
