import { useFetch } from "../../shared/hooks/useFetch";
import type { Apartment } from "../types/Apartment";

const APARTMENTS_URL = "/data/apartments.json";

export function useApartments() {
  const { data, isLoading, error } = useFetch<Apartment[]>(APARTMENTS_URL);

  return {
    apartments: data ?? [],
    isLoading,
    error,
  };
}