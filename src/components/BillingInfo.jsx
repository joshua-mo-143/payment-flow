import React from 'react'

export const BillingInfo = () => {
  return (
    <div className="card-details-container">
    {/* input name on card and card type */}
    <fieldset className="card-details-1">
            <label className="field-header">Name on card <span style={{color: 'red'}}>*</span>
            <input type="text" className="text-input" name="cardName" required/></label>
            <label className="field-header">Card Type <span style={{color: 'red'}}>*</span>
            <select name="cardType" id="cardtype">
      <option value="Visa">Visa</option>
      <option value="AmericanExpress">American Express</option>
      <option value="Mastercard">Mastercard</option>
       </select>
       </label>
       </fieldset>
       <fieldset className="card-details-2">
                 {/* input card number */}
       <label className="field-header">Card Number<span style={{color: 'red'}}>*</span>
        <div className="cardnumber-input">
       <input type="text" maxlength="4" class="Split" tabindex="1" name="card-num1"/> 
<input type="text" maxlength="4" class="Split" tabindex="2" name="card-num2"/> 
<input type="text" maxlength="4" class="Split" tabindex="3" name="card-num3"/> 
<input type="text" maxlength="4" class="Split" tabindex="4" name="card-num4"/>
</div>
       </label>
       {/* input expiry date */}
        <label className="field-header">Expiry Date<span style={{color: 'red'}}>*</span>
        <div className="expirydate-input">
        <input type="text" maxlength="2" class="Split" tabindex="1" name="card-expmonth"/> / 
<input type="text" maxlength="2" class="Split" tabindex="2" name="card-expyear"/>  
</div>
      </label>
      {/* input CVV */}
      <label className="field-header">CVV<span style={{color: 'red'}}>*</span>
<input type="text" className="cvv-input" maxlength="3" name="card-cvv"/>  
      </label>
    </fieldset>
    </div>
  )
}
