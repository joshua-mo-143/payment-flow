import { Done } from '@material-ui/icons';
import React, { useState } from 'react'
import { BackgroundSkew } from '../components/BackgroundSkew'
import { BillingInfo } from '../components/BillingInfo';
import { Invoice } from '../components/Invoice';
import { PersonalInfo } from '../components/PersonalInfo';

export const PaymentGateway = () => {
  
  const [stage, setStage] = useState(1);

  return (
    <>
    {/* background image */}
    <BackgroundSkew/>
    {/* form */}
    <form className="payment-gateway-form">
    {/* if form not completed (stage < 4), return progress container and header*/}
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
      <PersonalInfo/>
      <div className="navigation">
      <button onClick={() => setStage(2)}>Next</button>
      <p>Cancel Payment</p>
      </div>
      </>
    )}
    {/* billing information */}
    {stage == 2 && (
<>
      <BillingInfo/>
      <div className="navigation">
    <button onClick={() => setStage(3)}>Next</button>
    <p>Cancel Payment</p>
    </div>
      </>
    )}
    {/* invoice */}
    {stage == 3 && (
      <>
      <Invoice/>
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
