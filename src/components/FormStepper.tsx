import { useLocation } from 'react-router-dom';

function FormStepper() {
  const location = useLocation(); 

  // Step component as props
  const Step = ({ isActive, title, subText, stepNumber }) => (
    <div className={`step ${isActive ? 'active' : ''}`}>
      <div className="step-number">{stepNumber}</div>
      <div className="step-label">
        <span className="step-title">{title}</span>
        <span className="step-name">{subText}</span>
      </div>
    </div>
  );

  return (
    <div className="steps-sidebar">
      {/* Step 1 */}
      <Step
        isActive={location.pathname === '/page1'} 
        title="STEP 1"
        subText="YOUR INFO"
        stepNumber="1"
      />
      {/* Step 2 */}
      <Step
        isActive={location.pathname === '/page2'}
        title="STEP 2"
        subText="SELECT PLAN"
        stepNumber="2"
      />
      {/* Step 3 */}
      <Step
        isActive={location.pathname === '/page3'} 
        title="STEP 3"
        subText="ADD-ONS"
        stepNumber="3"
      />
      {/* Step 4 */}
      <Step
        isActive={location.pathname === '/page4'}
        title="STEP 4"
        subText="SUMMARY"
        stepNumber="4"
      />
    </div>
  );
}

export default FormStepper;
