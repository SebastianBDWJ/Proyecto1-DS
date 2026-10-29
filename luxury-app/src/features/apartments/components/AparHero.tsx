import type { Apartment } from "../types/Apartment";

interface AparHeroProps {
  apartment: Apartment;
}

const AparHero = ({ apartment }: AparHeroProps) => {
  return (
    <div className="apar-hero">
      <img src={apartment.image} alt={`Fotografía de ${apartment.name}`} />
    </div>
  );
};

export default AparHero;