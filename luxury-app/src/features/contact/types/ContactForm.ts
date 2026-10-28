export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  property: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  property?: string;
}
