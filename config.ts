export const WHATSAPP_NUMBER = "5511999999999"; // Altere apenas aqui o número

export const SALES_CHECKOUT_LINK = "https://checkout.hotmart.com/exemplo"; // Placeholder para o link de vendas futuro

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};