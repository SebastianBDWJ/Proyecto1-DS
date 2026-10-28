const Experience = () => {
  return (
    <section className="pillars">
      <div className="wrap">
        <p className="eyebrow eyebrow--light">Los 4 pilares de THE IVORY</p>
        <h2 className="pillars__title">
          Lo extraordinario está en los detalles
        </h2>
        <p className="pillars__sub">
          Una selección de residencias donde la ubicación, la arquitectura y la calidad se unen para ofrecer una experiencia de vida excepcional
        </p>
        <ul className="pillars__list">
          <li className="pillar">
            <span className="pillar__num">01</span>
            <div>
              <span className="pillar__tag">LOCATION & LIFESTYLE</span>
              <strong>Ubicaciones excepcionales</strong>
              <p>Seleccionamos ubicaciones que combinan privacidad, comodidad y conexión con el entorno. Lugares donde la arquitectura y la calidad de vida se encuentran</p>
            </div>
          </li>
          <li className="pillar">
            <span className="pillar__num">02</span>
            <div>
              <span className="pillar__tag">MATERIALS & CRAFTSMANSHIP</span>
              <strong>Acabados extraordinarios</strong>
              <p>Materiales cuidadosamente seleccionados, detalles arquitectónicos distintivos y acabados que se aprecian tanto a primera vista como con el paso del tiempo</p>
            </div>
          </li>
          <li className="pillar">
            <span className="pillar__num">03</span>
            <div>
              <span className="pillar__tag">VALUE & EXCLUSIVITY</span>
              <strong>Lujo con valor real</strong>
              <p>Residencias que equilibran diseño, calidad y precio. Creemos que el verdadero lujo está en lo que recibes, en los detalles y en el valor que permanece</p>
            </div>
          </li>
          <li className="pillar">
            <span className="pillar__num">04</span>
            <div>
              <span className="pillar__tag">THE IVORY EXPERIENCE</span>
              <strong>Una forma distinta de vivir</strong>
              <p>Espacios pensados para disfrutar de la privacidad, la tranquilidad y el confort. Cada elección responde a una idea: vivir bien, sin excesos innecesarios</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

