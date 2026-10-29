
import { useFavorites } from "../hooks/useFavorites";

interface FavoriteButtonProps {
  apartmentId: number;
}

function FavoriteButton({ apartmentId }: FavoriteButtonProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const favorite = isFavorite(apartmentId);

  function handleClick() {
    if (favorite) {
      removeFavorite(apartmentId);
    } else {
      addFavorite(apartmentId);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={favorite}
      aria-label={
        favorite
          ? "Quitar de favoritos"
          : "Agregar a favoritos"
      }
      title={
        favorite
          ? "Quitar de favoritos"
          : "Agregar a favoritos"
      }
      className={`favorite-button ${
        favorite ? "favorite-button--active" : ""
      }`}
    >
      {favorite ? "♥" : "♡"}
    </button>
  );
}

export default FavoriteButton;
