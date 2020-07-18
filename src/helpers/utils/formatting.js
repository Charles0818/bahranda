export const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format(parseInt(amount));
  return formatter
}

new Intl.DateTimeFormat

export const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const formatter = new Intl.DateTimeFormat('en-GB').format(date);
  return formatter
}