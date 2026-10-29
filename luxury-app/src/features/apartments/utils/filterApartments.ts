
import type { Apartment } from "../types/Apartment";
import type { Filters } from "../types/Filters";

export function filterApartments(
  apartments: Apartment[],
  filters: Filters
): Apartment[] {
  return apartments.filter((apartment) => {
    const search = filters.searchText.trim().toLowerCase();

    const matchesSearch =
      search === "" ||
      apartment.name.toLowerCase().includes(search) ||
      apartment.location.toLowerCase().includes(search);

    const matchesLocation =
      filters.location === "" ||
      apartment.location === filters.location;

    const matchesBedrooms =
      filters.bedrooms === "" ||
      apartment.bedrooms >= filters.bedrooms;

    const matchesPrice =
      filters.maxPrice === "" ||
      apartment.price <= filters.maxPrice;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesBedrooms &&
      matchesPrice
    );
  });
}
