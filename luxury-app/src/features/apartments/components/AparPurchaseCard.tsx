import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartment";
import { formatPrice } from "../../shared/precios/formatPrice";
import FavoriteButton from "../../favorites/components/FavoriteButton";

interface AparPurchaseCardProps {
  apartment: Apartment;
}

const AparPurchaseCard = ({ apartment }: AparPurchaseCardProps) => {
  return (
    <aside className="purchase-card">
      <FavoriteButton apartmentId={apartment.id} />

      <p className="purchase-card__label">Alquiler mensual</p>

      <p className="purchase-card__price">{formatPrice(apartment.price)}</p>

      <p className="purchase-card__description">
        Agenda una visita y un asesor te contactará para conocer la propiedad.
      </p>

      <Link
        className="purchase-card__button"
        to={`/contacto?propiedad=${encodeURIComponent(apartment.name)}`}
      >
        Solicitar visita
      </Link>
    </aside>
  );
};

export default AparPurchaseCard;
