import PropTypes from 'prop-types'
import React from 'react'
import {
  buyerOrderStatus,
  saleBillsHeaderOptions,
  formatter,
  formatDate
} from '../../utils/saleBillsUtils'
import './saleBillsTableDesktop.css'
function SaleBillsTableDesktop ({ saleBills }) {
  const renderSaleBillsHeader = () => {
    return (
     <div className="saleBills__order-container saleBills__order-container--header">
       {saleBillsHeaderOptions.map((headerOption, i) => (
         <div key={headerOption} className="saleBills__header-option">{headerOption}</div>
       ))}
       <div className="saleBills__header-option saleBills__header-option--last-blank"></div>
     </div>
    )
  }

  const renderSaleBills = () => {
    return saleBills.map((saleBill) => {
      return (
        <div key={saleBill.id} className="saleBills__order-container">
          <div className="saleBills__orderData">{saleBill.id}</div>
          <div className="saleBills__orderData">{saleBill.buyer.name}</div>
          <div className="saleBills__orderData">{saleBill.provider.name}</div>
          <div className="saleBills__orderData">{formatDate(saleBill.emissionDate)}</div>
          <div className="saleBills__orderData saleBills__orderData--green-col">{formatter.format(saleBill.value)}</div>
          <div className="saleBills__orderData saleBills__orderData--green-col bold">{buyerOrderStatus[Number(saleBill.orderStatusBuyer)]}</div>
          <button className="saleBills__btn">Dados do cedente</button>
        </div>
      )
    })
  }

  return (
    <>
    {renderSaleBillsHeader()}
    {renderSaleBills()}
    </>

  )
}

SaleBillsTableDesktop.propTypes = {
  saleBills: PropTypes.array.isRequired
}

export default SaleBillsTableDesktop
