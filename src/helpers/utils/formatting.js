export const formatCurrency = (amount) => {
  if(!amount) return
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format(parseInt(amount));
  return formatter
}

export const formatDate = (timestamp) => {
  if(!timestamp) return
  const date = new Date(timestamp)
  const formatter = new Intl.DateTimeFormat('en-GB').format(date);
  return formatter
}