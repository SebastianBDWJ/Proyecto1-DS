import "../../../styles/apartments/apar.css";
import { useState, } from "react";
import { useApartments } from "../hooks/useApartments";
import CardAparList from "../components/CardAparList";
import Pagination from "../../shared/components/Pagination";
import ApartmentFilters from "../components/ApartmentFilters";
import { useApartmentFilters } from "../hooks/useApartmentFilters";
import { filterApartments } from "../utils/filterApartments";

const APARTMENTS_PER_PAGE = 5;

const Apartments = () => {
  const { apartments, isLoading, error } = useApartments();

  const {
    filters,
    updateFilters,
    clearFilters,
  } = useApartmentFilters();

  const [currentPage, setCurrentPage] = useState(1);

  const filteredApartments = filterApartments(apartments, filters);

  // Cambia de página y sube la pantalla para ver las nuevas tarjetas.
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <p className="status-message container">
        Cargando apartamentos...
      </p>
    );
  }

  if (error) {
    return (
      <p
        role="alert"
        className="status-message status-message--error container"
      >
        {error}
      </p>
    );
  }

  const totalPages = Math.ceil(
    filteredApartments.length / APARTMENTS_PER_PAGE
  );

  const indexOfFirstApartment = (currentPage - 1) * APARTMENTS_PER_PAGE;
  const indexOfLastApartment = indexOfFirstApartment + APARTMENTS_PER_PAGE;

  const currentApartments = filteredApartments.slice(
    indexOfFirstApartment,
    indexOfLastApartment
  );

  return (
    <section className="container apar-page">
      <header className="apar-page__header">
        <p className="apar-page__eyebrow">Catálogo</p>
        <h1>Apartamentos</h1>
        <p className="apar-page__subtitle">
          Apartamentos exclusivos en la ciudad, la playa y la montaña de Costa Rica.
        </p>
      </header>

      <ApartmentFilters
  filters={filters}
  onFilterChange={(newFilters) => {
    updateFilters(newFilters);
    setCurrentPage(1);
  }}
  onClear={() => {
    clearFilters();
    setCurrentPage(1);
  }}
/>

      {filteredApartments.length > 0 ? (
        <>
          <p className="apar-page__results" aria-live="polite">
            Mostrando {indexOfFirstApartment + 1}–
            {Math.min(indexOfLastApartment, filteredApartments.length)} de{" "}
            {filteredApartments.length} apartamentos
          </p>

          <CardAparList apartments={currentApartments} />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevious={() =>
                goToPage(Math.max(1, currentPage - 1))
              }
              onNext={() =>
                goToPage(Math.min(totalPages, currentPage + 1))
              }
            />
          )}
        </>
      ) : (
        <p className="apar-page__empty" role="status">
          No encontramos apartamentos. Prueba con otra búsqueda.
        </p>
      )}
    </section>
  );
};

export default Apartments;
