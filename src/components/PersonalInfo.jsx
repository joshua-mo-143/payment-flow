import React from 'react'

export const PersonalInfo = () => {
  return (<>
    <fieldset className="personal-info">
      {/* name */}
    <label className="field-header">Name <input type="text" className="text-input" name="customerName"/></label>
    {/* email */}
    <label className="field-header">E-mail <span style={{color: 'red'}}>*</span>
    <h5>The purchase receipt will be sent to this email</h5>
    <input type="email" className="text-input" name="email"/>
    </label>
    {/* addr 1 */}
    <label className="field-header">Address 1<input type="text" className="text-input" name="addr1"/></label>
    {/* addr 2 */}
    <label className="field-header">Address 2 <input type="text" className="text-input" name="addr2"/></label>
    </fieldset>

        {/* local government */}
        <fieldset className="location">
    <label className="field-header">Local Government <input type="text" className="text-input" name="government"/></label>
    {/* state */}
    <label className="field-header">State <select name="country" id="state">
        <option value="test1">Lagos</option>
        <option value="test2">Tennessee</option>
        <option value="test3">Mississippi</option>
         <option value="test4">Texas</option>
         </select>
         </label>
    </fieldset>
    </>
  )
}
