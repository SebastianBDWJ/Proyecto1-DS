// Convierte 3475000 en "₡3 475 000"
export function formatPrice(price: number): string {
  return price.toLocaleString("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  });
}