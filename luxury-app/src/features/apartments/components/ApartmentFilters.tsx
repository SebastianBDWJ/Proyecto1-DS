
import { type ChangeEvent } from "react";
import type { Filters } from "../types/Filters";

interface ApartmentFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onClear: () => void;
}

function ApartmentFilters({
  filters,
  onFilterChange,
  onClear,
}: ApartmentFiltersProps) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    if (name === "bedrooms" || name === "maxPrice") {
      onFilterChange({
        ...filters,
        [name]: value === "" ? "" : Number(value),
      });
      return;
    }

    if (
      name === "searchText" ||
      name === "location"
    ) {
      onFilterChange({
        ...filters,
        [name]: value,
      });
    }
  }

  return (
    <section className="apartment-filters">
      <div className="filter-group">
        <label htmlFor="searchText">Buscar apartamento</label>
        <input
          id="searchText"
          name="searchText"
          type="text"
          placeholder="Nombre o ubicación..."
          value={filters.searchText}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="location">Ubicación</label>
        <select
          id="location"
          name="location"
          value={filters.location}
          onChange={handleChange}
        >
          <option value="">Todas las ubicaciones</option>
          <option value="Escazú, San José">Escazú</option>
          <option value="Santa Ana, San José">Santa Ana</option>
          <option value="Tamarindo, Guanacaste">Tamarindo</option>
          <option value="Uvita, Puntarenas">Uvita</option>
          <option value="Puerto Viejo, Limón">Puerto Viejo</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="bedrooms">Habitaciones mínimas</label>
        <select
          id="bedrooms"
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleChange}
        >
          <option value="">Cualquiera</option>
          <option value="1">1 o más</option>
          <option value="2">2 o más</option>
          <option value="3">3 o más</option>
          <option value="4">4 o más</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="maxPrice">Precio máximo</label>
        <select
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
        >
          <option value="">Sin límite</option>
          <option value="1000000">₡1.000.000</option>
          <option value="2000000">₡2.000.000</option>
          <option value="3000000">₡3.000.000</option>
          <option value="4000000">₡4.000.000</option>
          <option value="5000000">₡5.000.000</option>
        </select>
      </div>

      <button type="button" onClick={onClear}>
        Limpiar filtros
      </button>
    </section>
  );
}

export default ApartmentFilters;
