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
  const [selectedPlan, setSelectedPlan] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/page1');
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setError('')
  };

  const handleNextStep = () => {
    if (!selectedPlan) {
      setError('Please select a plan!');
    } else {
      navigate('/nextpage');
    }
  };

  return (
    <div className="main-content">
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

        {error && <div className="error">{error}</div>} 
      </div>

      <div className="buttons-section">
        <button className="go-back" onClick={handleGoBack}>Go Back</button>
        <button className="next-step" onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default Page2;
