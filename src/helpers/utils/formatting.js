export const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format(parseInt(amount));
  return formatter
}