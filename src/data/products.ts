/**
 * ============================================================
 * Catálogo de Productos — Natural Love
 * 
 * Para agregar, editar o eliminar productos:
 * - Modificar el array PRODUCTS abajo.
 * - Cada producto tiene: id, categoría, nombre, descripción,
 *   beneficios, presentaciones, imagen, ctaType (clave de WhatsApp),
 *   ctaLabel.
 * 
 * Las imágenes se importan desde src/assets/
 * Si cambias un archivo de imagen, actualiza el import correspondiente.
 * ============================================================
 */

/* --- IMPORTS DE IMÁGENES DE PRODUCTO ---
 * Cambiar estas rutas si se actualizan las fotos de producto */
import shampooImg from "@/assets/shampoo_natural.jpeg";
import balsamoImg from "@/assets/balsamo_natural.jpeg";
import perfumeImg from "@/assets/perfume_natural.jpeg";

export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  benefits: string[];
  presentations: string[];
  image: string;
  ctaType: string;
  ctaLabel: string;
}

/**
 * Array principal de productos.
 * Para agregar un nuevo producto, copiar un objeto y editar sus campos.
 * Las presentaciones se deben validar o editar fácilmente desde aquí.
 */
export const PRODUCTS: Product[] = [
  {
    id: "shampoo",
    category: "Shampoo",
    name: "Shampoo para mascotas",
    description:
      "Limpieza profunda que ayuda a cuidar la piel y el pelaje, dejando una sensación de frescura, suavidad y bienestar.",
    benefits: [
      "Limpieza efectiva",
      "Aroma agradable",
      "Ideal para uso frecuente",
      "Disponible en varias presentaciones",
    ],
    presentations: ["250 cc", "500 cc", "1000 cc", "Galón x3.75kg", "10 kg", "20 kg"],
    image: shampooImg,
    ctaType: "shampoo",
    ctaLabel: "Quiero este producto",
  },
  {
    id: "balsamo",
    category: "Bálsamo",
    name: "Bálsamo acondicionador",
    description:
      "Ayuda a desenredar, suavizar y mejorar la textura del pelaje, haciendo del baño una experiencia más completa.",
    benefits: [
      "Suavidad visible",
      "Apoya el desenredado",
      "Ideal para pelajes exigentes",
      "Útil para hogar y grooming",
    ],
    presentations: ["120 cc", "500 cc", "1000 cc", "Galón"],
    image: balsamoImg,
    ctaType: "balsamo",
    ctaLabel: "Cotizar bálsamo",
  },
  {
    id: "perfume",
    category: "Perfume",
    name: "Perfume línea Gold",
    description:
      "Fragancia agradable y duradera para que tu mascota se sienta fresca después del baño o del grooming.",
    benefits: [
      "Aroma duradero",
      "Acabado final agradable",
      "Complemento ideal de la rutina de higiene",
      "Imagen premium de marca",
    ],
    presentations: ["120 cc", "250 cc", "500 cc"],
    image: perfumeImg,
    ctaType: "perfume",
    ctaLabel: "Pedir perfume",
  },
];
