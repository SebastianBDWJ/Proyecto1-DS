
import { useMemo } from "react";
import { useApartments } from "../../apartments/hooks/useApartments";
import CardAparList from "../../apartments/components/CardAparList";
import { useFavorites } from "../hooks/useFavorites";

const Favorites = () => {
  const { apartments, isLoading, error } = useApartments();
  const { favoriteIds } = useFavorites();

  const favoriteApartments = useMemo(
    () =>
      apartments.filter((apartment) =>
        favoriteIds.includes(apartment.id)
      ),
    [apartments, favoriteIds]
  );

  if (isLoading) {
    return (
      <section className="container">
        <h1>Favoritos</h1>
        <p>Cargando apartamentos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container">
        <h1>Favoritos</h1>
        <p role="alert">{error}</p>
      </section>
    );
  }

  return (
    <section className="container">
      <h1>Favoritos</h1>

      {favoriteApartments.length > 0 ? (
        <CardAparList apartments={favoriteApartments} />
      ) : (
        <p role="status">
          Todavía no tienes apartamentos favoritos.
          Explora el catálogo y pulsa el corazón para guardar uno.
        </p>
      )}
    </section>
  );
};

export default Favorites;
