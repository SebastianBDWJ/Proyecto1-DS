
import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { FavoritesContext } from "./FavoritesContextValue"; 

interface FavoritesProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "luxury-app-favorites";

export function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    try {
      const savedFavorites = localStorage.getItem(STORAGE_KEY);

      if (savedFavorites) {
        const parsed: unknown = JSON.parse(savedFavorites);

        if (
          Array.isArray(parsed) &&
          parsed.every((id) => typeof id === "number")
        ) {
          return parsed as number[];
        }
      }
    } catch {
      // Si los datos guardados no son válidos, iniciamos sin favoritos.
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favoriteIds)
    );
  }, [favoriteIds]);

  function addFavorite(id: number) {
    setFavoriteIds((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  function removeFavorite(id: number) {
    setFavoriteIds((current) =>
      current.filter((favoriteId) => favoriteId !== id)
    );
  }

  function isFavorite(id: number) {
    return favoriteIds.includes(id);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
