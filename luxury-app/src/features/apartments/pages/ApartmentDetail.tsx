import { useParams } from "react-router-dom";

const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="container">
      <h1>Detalle del apartamento {id}</h1>
      {/* TODO (feature/catalogo): información completa + botón de contacto */}
    </section>
  );
};

export default ApartmentDetail;
