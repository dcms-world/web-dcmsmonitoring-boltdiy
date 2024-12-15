interface ContactFormData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

export const sendContactForm = async (data: ContactFormData): Promise<Response> => {
  const response = await fetch('/api/contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Ein Fehler ist aufgetreten');
  }

  return response;
};

export const fetchContactInfo = async (): Promise<{ name: string; email: string }> => {
  const response = await fetch('/api/contact-info.php');
  
  if (!response.ok) {
    throw new Error('Kontaktinformationen konnten nicht geladen werden');
  }
  
  return response.json();
};
