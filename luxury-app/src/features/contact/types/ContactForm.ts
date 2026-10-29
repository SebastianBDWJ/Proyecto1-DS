export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  property: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  property?: string;
}
