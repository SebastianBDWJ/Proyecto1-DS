import "../../../styles/apartments/card-apar.css";
import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartment";
import { formatPrice } from "../../shared/precios/formatPrice";
import FavoriteButton from "../../favorites/components/FavoriteButton";
    

interface CardApartamentoProps {
    apartment: Apartment;
}

const CardApartamento = ({ apartment }: CardApartamentoProps) => {
    const { id, name, location, price, image, bedrooms, bathrooms, area, amenities } = apartment;

    return (
        <article className="apar-card">
            <div className="apar-card__media">
                <img
                    className="apar-card__image"
                    src={image}
                    alt={`Fotografía de ${name}`}
                    loading="lazy"
                />
                {<FavoriteButton apartmentId={id} />}
            </div>

            <div className="apar-card__body">
                <p className="apar-card__location">{location}</p>
                <h3 className="apar-card__name">{name}</h3>

                <ul className="apar-card__specs">
                    <li>{bedrooms} hab.</li>
                    <li>{bathrooms} baños</li>
                    <li>{area} m²</li>
                </ul>

                <ul className="apar-card__amenities">
                    {amenities.slice(0, 3).map((amenity) => (
                        <li key={amenity}>{amenity}</li>
                    ))}
                </ul>

                <div className="apar-card__footer">
                    <p className="apar-card__price">
                        {formatPrice(price)} <span>/ mes</span>
                    </p>
                    <Link className="apar-card__link" to={`/apartamentos/${id}`}>
                        Ver detalle <span className="apar-card__arrow" aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default CardApartamento;