const buyerOrderStatus = [
  'Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido',
  'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida',
  'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado'
]

const saleBillsHeaderOptions = ['Nota fiscal', 'Sacado', 'Cedente', 'Emissão', 'Valor', 'Status']

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

const formatDate = (yourDate) => {
  const date = new Date(yourDate)
  const [year, month, day] = date.toISOString().split('T')[0].split('-')
  return `${day}/${month}/${year}`
}

export { buyerOrderStatus, saleBillsHeaderOptions, formatter, formatDate }
