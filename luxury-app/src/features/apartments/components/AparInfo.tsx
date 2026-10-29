import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartment";
import AparFeatures from "./AparFeatures";

interface AparInfoProps {
  apartment: Apartment;
}

const AparInfo = ({ apartment }: AparInfoProps) => {
  return (
    <section className="apar-info">

      <p className="apar-info__location">{apartment.location}</p>

      <h1>{apartment.name}</h1>

      <div className="apar-info__specs">
        <span>
          <strong>{apartment.bedrooms}</strong> habitaciones
        </span>
        <span>
          <strong>{apartment.bathrooms}</strong> baños
        </span>
        <span>
          <strong>{apartment.area}</strong> m²
        </span>
      </div>

      <h2>Descripción</h2>

      <p className="apar-info__description">{apartment.description}</p>

      <AparFeatures amenities={apartment.amenities} />

      <Link className="apar-info__back" to="/apartamentos">
        ← Volver a apartamentos
      </Link>
    </section>
  );
};

export default AparInfo;