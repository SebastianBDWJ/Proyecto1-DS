// Campos mínimos que pide el proyecto: nombre, ubicación, precio, imagen,
// descripción, habitaciones, baños, área y amenidades.
export interface Apartment {
  id: number;
  name: string;
  location: string;
  price: number; // precio mensual en USD
  image: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // metros cuadrados
  amenities: string[];
  featured: boolean; // se muestra en "Propiedades destacadas" del inicio
}
