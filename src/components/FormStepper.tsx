import { useLocation } from 'react-router-dom';

function FormStepper() {
  const location = useLocation(); // Get the current location

  // Determine the active step based on the current path
  const activeStep = location.pathname; // You can customize this to fit your routes

  return (
    <div>
      <div className="steps-sidebar">
        <div className={`step ${activeStep === '/page1' ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">
            <span className="step-title">STEP 1</span>
            <span className="step-name">YOUR INFO</span>
          </div>
        </div>

        <div className={`step ${activeStep === '/page2' ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">
            <span className="step-title">STEP 2</span>
            <span className="step-name">SELECT PLAN</span>
          </div>
        </div>

        <div className={`step ${activeStep === '/page3' ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">
            <span className="step-title">STEP 3</span>
            <span className="step-name">ADD-ONS</span>
          </div>
        </div>

        <div className={`step ${activeStep === '/summary' ? 'active' : ''}`}>
          <div className="step-number">4</div>
          <div className="step-label">
            <span className="step-title">STEP 4</span>
            <span className="step-name">SUMMARY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormStepper;
