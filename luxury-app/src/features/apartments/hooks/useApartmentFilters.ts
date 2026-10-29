
import { useState } from "react";
import type { Filters } from "../types/Filters";

const initialFilters: Filters = {
  searchText: "",
  location: "",
  bedrooms: "",
  maxPrice: "",
};

export function useApartmentFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  function updateFilters(newFilters: Filters) {
    setFilters(newFilters);
  }

  function clearFilters() {
    setFilters(initialFilters);
  }

  return {
    filters,
    updateFilters,
    clearFilters,
  };
}
