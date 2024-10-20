

const Page2 = () => {
    // Simple navigation to go back to Page 1
    const handleGoBack = () => {
      window.location.href = '/page1'; // Redirect to Page 1
    };
  return (
      
      <div className="main-content">
        
        {/* Title and Description */}
        <div className="content-header">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>

        {/* Plans Section */}
        <div className="plans-section">
          <div className="plans">
            <label className="plan">
              <input type="radio" name="plan" value="arcade" />
              <img src="arcade-icon.png" alt="Arcade" />
              <div className="plan-details">
                <h2>Arcade</h2>
                <p>$9/mo</p>
              </div>
            </label>

            <label className="plan">
              <input type="radio" name="plan" value="advanced" />
              <img src="advanced-icon.png" alt="Advanced" />
              <div className="plan-details">
                <h2>Advanced</h2>
                <p>$12/mo</p>
              </div>
            </label>

            <label className="plan">
              <input type="radio" name="plan" value="pro" />
              <img src="pro-icon.png" alt="Pro" />
              <div className="plan-details">
                <h2>Pro</h2>
                <p>$15/mo</p>
              </div>
            </label>
          </div>
        </div> 

         {/* Buttons Section */}
         <div className="buttons-section">
          <button className="go-back" onClick={handleGoBack}>Go Back</button>
          <button className="next-step">Next Step</button>
        </div>

        
      </div>
  )
}

export default Page2;
