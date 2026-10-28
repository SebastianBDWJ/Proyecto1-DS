
import ContactForm from "../components/ContactForm";
import "../../../styles/contact/contact.css"; 


function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Contacto</h1>
        <p>
          ¿Tenés alguna consulta? Estamos aquí para ayudarte a encontrar
          tu próximo apartamento.
        </p>
      </section>

      <section className="contact-content">
        <ContactForm />
      </section>
    </main>
  );
}

export default Contact;
