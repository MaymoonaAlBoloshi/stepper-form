import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// OptionCard Component
const OptionCard = ({ plan, selectedPlan, handlePlanSelection, price }) => {
  return (
    <label
      className={`plan ${plan} ${selectedPlan === plan ? 'selected' : ''}`}
      onClick={() => handlePlanSelection(plan)}
    >
      <div className="plan-details">
        <h2>{plan.charAt(0).toUpperCase() + plan.slice(1)}</h2>
        <p>{price}</p>
      </div>
    </label>
  );
};

const Page2 = () => {
  // State for plan selection and error message
  const [selectedPlan, setSelectedPlan] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate back to Page 1
  const handleGoBack = () => {
    navigate('/page1'); // Use navigate to go back to Page 1
  };

  // Function to handle plan selection
  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setError(''); // Clear error when a plan is selected
  };

  // Function to handle the next step
  const handleNextStep = () => {
    if (!selectedPlan) {
      setError('Please select a plan!'); // Show error if no plan is selected
    } else {
      // Navigate to the next page if a plan is selected
      navigate('/nextpage'); // Use navigate to go to the next page
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
          <OptionCard
            plan="arcade"
            selectedPlan={selectedPlan}
            handlePlanSelection={handlePlanSelection}
            price="$9/mo"
          />
          <OptionCard
            plan="advanced"
            selectedPlan={selectedPlan}
            handlePlanSelection={handlePlanSelection}
            price="$12/mo"
          />
          <OptionCard
            plan="pro"
            selectedPlan={selectedPlan}
            handlePlanSelection={handlePlanSelection}
            price="$15/mo"
          />
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
