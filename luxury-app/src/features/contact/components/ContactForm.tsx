
import { useState } from "react";
import type {
  ContactFormData,
  ContactFormErrors,
} from "../types/ContactForm";
import { validateContact } from "../utils/validateContact";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  message: "",
  property: new URLSearchParams(window.location.search).get("propiedad") ?? "",
};

function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContact(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData((previousData) => ({
        ...previousData,
        name: "",
        email: "",
        message: "",
      }));
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section className="contact-form-section">
      <h2>Contactanos</h2>
      <p>Completá el formulario y nos pondremos en contacto con vos.</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="property">Apartamento de interés</label>
          <input
            id="property"
            name="property"
            type="text"
            value={formData.property}
            onChange={handleChange}
            placeholder="Nombre del apartamento (opcional)"
          />
          {errors.property && (
            <p className="form-error">{errors.property}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && (
            <p className="form-error">{errors.message}</p>
          )}
        </div>

        <button type="submit">Enviar consulta</button>

        {submitted && (
          <p className="form-success" role="status">
            ¡Formulario enviado correctamente! Este envío es una simulación.
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
