import { useState } from 'react';

const Page2 = () => {
  // State for plan selection and error message
  const [selectedPlan, setSelectedPlan] = useState('');
  const [error, setError] = useState('');

  // Simple navigation to go back to Page 1
  const handleGoBack = () => {
    window.location.href = '/page1'; // Redirect to Page 1
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setError(''); // Clear error when a plan is selected
  };

  const handleNextStep = () => {
    if (!selectedPlan) {
      setError('Please select a plan!'); // Show error if no plan is selected
    } else {
      // Navigate to the next page if a plan is selected
      window.location.href = '/nextpage'; // Change to your actual next page URL
    }
  };

  return (
    <div className="main-content">
      {/* Title and Description */}
      <div className="content-header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="plans-section">
        <div className="plans">
          <label
            className={`plan arcade ${selectedPlan === 'arcade' ? 'selected' : ''}`}
            onClick={() => handlePlanSelection('arcade')}
          >
            <div className="plan-details">
              <h2>Arcade</h2>
              <p>$9/mo</p>
            </div>
          </label>

          <label
            className={`plan advanced ${selectedPlan === 'advanced' ? 'selected' : ''}`}
            onClick={() => handlePlanSelection('advanced')}
          >
            <div className="plan-details">
              <h2>Advanced</h2>
              <p>$12/mo</p>
            </div>
          </label>

          <label
            className={`plan pro ${selectedPlan === 'pro' ? 'selected' : ''}`}
            onClick={() => handlePlanSelection('pro')}
          >
            <div className="plan-details">
              <h2>Pro</h2>
              <p>$15/mo</p>
            </div>
          </label>
        </div>

        {error && <div className="error">{error}</div>} {/* Display error if any */}
      </div>

      {/* Buttons Section */}
      <div className="buttons-section">
        <button className="go-back" onClick={handleGoBack}>Go Back</button>
        <button className="next-step" onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default Page2;
