import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Apartment = {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  featured: boolean;
};

const Featured = () => {
  const [items, setItems] = useState<Apartment[]>([]);

  useEffect(() => {
    fetch("/data/apartments.json")
      .then((r) => r.json())
      .then((data: Apartment[]) => {
        setItems(data.filter((a) => a.featured).slice(0, 3));
      });
  }, []);

  const formatPrice = (n: number) =>
    "$" + n.toLocaleString("en-US");

  return (
    <section className="featured">
      <div className="wrap">
        <h2 className="featured__title">Residencias destacadas</h2>
        <ul className="featured__grid">
          {items.map((apt) => (
            <li key={apt.id} className="feat-card">
              <Link to={`/apartamentos/${apt.id}`} className="feat-card__link">
                <div className="feat-card__img-wrap">
                  <img
                    src={apt.image}
                    alt={apt.name}
                    className="feat-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="feat-card__info">
                  <p className="feat-card__location">{apt.location}</p>
                  <h3 className="feat-card__name">{apt.name}</h3>
                  <p className="feat-card__price">{formatPrice(apt.price)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Featured;

