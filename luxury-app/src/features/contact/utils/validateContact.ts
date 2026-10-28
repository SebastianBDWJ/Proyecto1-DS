
import type {
  ContactFormData,
  ContactFormErrors,
} from "../types/ContactForm";

export function validateContact(
  data: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  }

  if (data.email.trim() === "") {
    errors.email = "El correo electrónico es obligatorio";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    errors.email = "Ingrese un correo electrónico válido";
  }

  if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
}
