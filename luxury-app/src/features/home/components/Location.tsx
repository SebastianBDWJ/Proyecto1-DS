const Location = () => {
  const zonas = [
    "Escazú, San José",
    "Santa Ana, San José",
    "Tamarindo, Guanacaste",
    "Uvita, Puntarenas",
    "Puerto Viejo, Limón"
  ];

  return (
    <section className="location">
      <div className="wrap location__inner">
        <div>
          <p className="eyebrow">Dónde estamos</p>
          <h2 className="location__title">Valle Central,<br />Costa Rica</h2>
          <p className="location__body">Operamos en los distritos más valorados del Gran Área Metropolitana: Escazú, Santa Ana y en las playas más exclusivas del país: Guanacaste, Puntarenas y Limón</p>
        </div>
        <ul className="location__list">
          {zonas.map((z) => (
            <li key={z} className="location__item">
              <span className="location__dot" aria-hidden="true" />
              {z}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Location;

