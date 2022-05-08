import PropTypes from 'prop-types'
import React from 'react'
import {
  buyerOrderStatus,
  saleBillsHeaderOptions,
  formatter,
  formatDate
} from '../../utils/saleBillsUtils'
import './saleBillsTableMobile.css'
function SaleBillsTableMobile ({ saleBills }) {
  return saleBills.map((saleBill) => {
    return (
      <div key={saleBill.id}>
       <div className="saleBills__order-container  saleBills__order-container--border-none">
          <div className="saleBills__header-option">{saleBillsHeaderOptions[0]}</div>
          <div className="saleBills__orderData">{saleBill.id}</div>
       </div>
        <div className="saleBills__order-container">
          <div className="saleBills__header-option">{saleBillsHeaderOptions[1]}</div>
          <div className="saleBills__orderData">{saleBill.buyer.name}</div>
        </div>
        <div className="saleBills__order-container">
          <div className="saleBills__header-option">{saleBillsHeaderOptions[2]}</div>
          <div className="saleBills__orderData">{saleBill.provider.name}</div>
        </div>
        <div className="saleBills__order-container">
          <div className="saleBills__header-option">{saleBillsHeaderOptions[3]}</div>
          <div className="saleBills__orderData">{formatDate(saleBill.emissionDate)}</div>
        </div>
        <div className="saleBills__order-container">
          <div className="saleBills__header-option">{saleBillsHeaderOptions[4]}</div>
          <div className="saleBills__orderData saleBills__orderData--green-col">{formatter.format(saleBill.value)}</div>
        </div>
        <div className="saleBills__order-container">
          <div className="saleBills__header-option">{saleBillsHeaderOptions[5]}</div>
          <div className="saleBills__orderData saleBills__orderData--green-col bold">{buyerOrderStatus[Number(saleBill.orderStatusBuyer)]}</div>
        </div>
        <button className="saleBills__btn">Dados do cedente</button>
      </div>
    )
  })
}

SaleBillsTableMobile.propTypes = {
  saleBills: PropTypes.array.isRequired
}

export default SaleBillsTableMobile
