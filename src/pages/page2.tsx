import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// OptionCard Component
const OptionCard = ({ plan, selectedPlan, handlePlanSelection, price }) => {
  return (
    <label
      className={`plan ${plan} ${selectedPlan === plan ? "selected" : ""}`}
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
  const [selectedPlan, setSelectedPlan] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/page1");
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setError("");
  };

  const handleNextStep = () => {
    if (!selectedPlan) {
      setError("Please select a plan!");
    } else {
      navigate("/nextpage");
    }
  };

  // Array of plans
  const plans = [
    { plan: "arcade", price: "$9/mo" },
    { plan: "advanced", price: "$12/mo" },
    { plan: "pro", price: "$15/mo" },
  ];

  return (
    <div className="main-content">
      <div className="content-header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="plans-section">
        <div className="plans">
          {plans.map(({ plan, price }) => (
            <OptionCard
              key={plan} // Use plan as a unique key
              plan={plan}
              selectedPlan={selectedPlan}
              handlePlanSelection={handlePlanSelection}
              price={price}
            />
          ))}
        </div>

        {error && <div className="error">{error}</div>}
      </div>

      <div className="buttons-section">
        <button className="go-back" onClick={handleGoBack}>
          Go Back
        </button>
        <button className="next-step" onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Page2;
