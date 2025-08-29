import emailjs from "@emailjs/browser"

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const emailClient = {
  sendForm: (form: HTMLFormElement) =>
    emailjs.sendForm(serviceId, templateId, form, publicKey),
};
