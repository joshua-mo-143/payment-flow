import { Done } from '@material-ui/icons';
import React, { useState } from 'react'
import { BackgroundSkew } from '../components/BackgroundSkew'

export const PaymentGateway = () => {
  
  const [stage, setStage] = useState(1);

  return (
    <>
    <BackgroundSkew/>
    <form className="payment-gateway-form">
    {stage != 4 && (
    <>
    <h3 className="payment-header">Complete Your Purchase</h3>
    <div className="progress-container">
        <div className="progress-text-container">
        <div className="left">
            {stage != 1 && (
            <p>Personal Info</p>
            )}
            {stage == 1 && (
            <>
                <p className="activetext">Personal Info</p>
                <div className="active"></div>
                </>
            )}
            </div>
        <div className="center">
              {stage == 1 && (
                <p>Billing Info</p>
              )}
        {stage == 2 && (<>
                  <p class="activetext">Billing Info</p>
                <div className="active"></div>
                </>
            )}
                    {stage == 3 && (
                      <>
                      <p class="activetext">Billing Info</p>
                <div className="active"></div>
                </>
            )}
        </div>
        <div className="right">
            <p>Payment Confirmation</p>
        </div>
        </div>
        <hr style={{margin: '25px 0px', marginTop: '-6px'}}/>
    </div>
    </>
    )}
    
    {/* basic personal information */}
    {stage == 1 && (
      <>
      
    <fieldset className="personal-info">
      {/* name */}
    <label className="field-header">Name <input type="text" className="text-input"/></label>
    {/* email */}
    <label className="field-header">E-mail <span style={{color: 'red'}}>*</span>
    <h5>The purchase receipt will be sent to this email</h5>
    <input type="email" className="text-input"/>
    </label>
    {/* addr 1 */}
    <label className="field-header">Address 1<input type="text" className="text-input" required/></label>
    {/* addr 2 */}
    <label className="field-header">Address 2 <input type="text" className="text-input"/></label>
    </fieldset>
    <fieldset className="location">
    <label className="field-header">Local Government <input type="text" className="text-input"/></label>
    <label className="field-header">State <select name="country" id="state">
        <option value="test1">test1</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
         <option value="test4">test4</option>
         </select>
         </label>
    </fieldset>
    <div className="navigation">
    <button onClick={() => setStage(2)}>Next</button>
    <p>Cancel Payment</p>
    </div>
    </>
    )}
    {/* second part of payment gateway form */}
    {stage == 2 && (
      <>
      {/* input name on card and card type */}
      <fieldset className="card-details-1">
              <label className="field-header">Name on card <span style={{color: 'red'}}>*</span>
              <input type="text" className="text-input" required/></label>
              <label className="field-header">Card Type <span style={{color: 'red'}}>*</span>
              <select name="Card type" id="cardtype">
        <option value="test1">Visa</option>
        <option value="test2">American Express</option>
        <option value="test3">Mastercard</option>
         </select>
         </label>
         </fieldset>
         <fieldset className="card-details-2">
                   {/* input card number */}
         <label className="field-header">Card Number<span style={{color: 'red'}}>*</span>
          <div className="cardnumber-input">
         <input type="text" maxlength="4" class="Split" tabindex="1"/> 
 <input type="text" maxlength="4" class="Split" tabindex="2"/> 
 <input type="text" maxlength="4" class="Split" tabindex="3"/> 
 <input type="text" maxlength="4" class="Split" tabindex="4"/>
 </div>
         </label>
         {/* input expiry date */}
          <label className="field-header">Expiry Date<span style={{color: 'red'}}>*</span>
          <div className="expirydate-input">
          <input type="text" maxlength="2" class="Split" tabindex="1"/> / 
 <input type="text" maxlength="2" class="Split" tabindex="2"/>  
 </div>
        </label>
        {/* input CVV */}
        <label className="field-header">CVV<span style={{color: 'red'}}>*</span>
 <input type="text" className="cvv-input" maxlength="3"/>  
        </label>
      </fieldset>
      <div className="navigation">
    <button onClick={() => setStage(3)}>Next</button>
    <p>Cancel Payment</p>
    </div>
      </>
    )}
    {stage == 3 && (
      <>
      <div className="order-container">
        <div className="order-banner">
          <p className="item-title">Item name</p>
          <p className="price">₦ Price</p>
        </div>
        <div className="invoice">
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
        <div className="total-container">
          <p className="total-text">Total:</p>
          <p className="total-amount">50,000.00</p>
        </div>
        </div>
      </div>
      <div className="navigation" style={{marginLeft: '200px'}}>
      <button onClick={() => setStage(4)}>Pay</button>
    <p>Cancel Payment</p>
    </div>
      </>
    )}
        {/* payment confirmed container */}
        {stage == 4 && (
      <div className="confirmation-wrapper">
        <div className="confirmation-container">
        <div className="tick-container">
        <Done style={{fontSize: '50px', color: 'green'}}/>
        </div>
        <h3 class="payment-header">Purchase Completed</h3>
        
        <p>Please check your e-mail for more details concerning this transaction.</p>
        <div className="home-link-container">
        <a href="#" onClick={() => setStage(1)}>Back to Home</a>
        </div>
        </div>
      </div>
    )}
    </form>

    </>
  )
}
