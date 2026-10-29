import "../../../styles/apartments/card-apar-list.css";
import type { Apartment } from "../types/Apartment";
import CardApartamento from "./CardApartamento";

interface CardAparListProps {
  apartments: Apartment[];
}

const CardAparList = ({ apartments }: CardAparListProps) => {
  return (
    <div className="apar-grid">
      {apartments.map((apartment) => (
        <CardApartamento key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default CardAparList;