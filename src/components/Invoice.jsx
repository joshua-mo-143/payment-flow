import React from 'react'

export const Invoice = () => {
  return (
    // container of whole box
    <div className="order-container">
        {/* item name and price title*/}
    <div className="order-banner">
      <p className="item-title">Item name</p>
      <p className="price">₦ Price</p>
    </div>
    {/* to be invoiced */}
    <div className="invoice">
        {/* list of items to be invoiced */}
    <ul className="order-list">
      <li className="order-item">
        <p className="item-name">Data Science and Usability</p>
        <p className="price">50,000.00</p>
      </li>
      <li className="order-item">
        <p className="item-name">Shipping</p>
        <p className="price">0.00</p>
      </li>
    </ul>
    <hr/>
    {/* total */}
    <div className="total-container">
      <p className="total-text">Total:</p>
      <p className="total-amount">50,000.00</p>
    </div>
    </div>
  </div>
  )
}
