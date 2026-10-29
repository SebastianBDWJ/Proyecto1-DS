import "../../../styles/apartments/apar.css";
import "../../../styles/apartments/apar-detail.css";
import { Link, useParams } from "react-router-dom";
import { useApartments } from "../hooks/useApartments";
import AparHero from "../components/AparHero";
import AparInfo from "../components/AparInfo";
import AparPurchaseCard from "../components/AparPurchaseCard";

const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { apartments, isLoading, error } = useApartments();

  const apartment = apartments.find((item) => item.id === Number(id));

  if (isLoading) {
    return (
      <p className="status-message container">
        Cargando apartamento...
      </p>
    );
  }

  if (error) {
    return (
      <p role="alert" className="status-message status-message--error container">
        {error}
      </p>
    );
  }

  if (!apartment) {
    return (
      <section className="empty-state container">
        <h1>Apartamento no encontrado</h1>
        <p>El apartamento que buscas no existe o ya no está disponible.</p>
        <Link className="text-link" to="/apartamentos">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <article className="container detail-page">
      <AparHero apartment={apartment} />
      <AparInfo apartment={apartment} />
      <AparPurchaseCard apartment={apartment} />
    </article>
  );
};

export default ApartmentDetail;