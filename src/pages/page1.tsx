
function Page1() {
  
    return (
        <div className="form-container">
        <div className="steps-sidebar">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-label">
              <span className="step-title">STEP 1</span>
              <span className="step-name">YOUR INFO</span>
            </div>
          </div>
  
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-label">
              <span className="step-title">STEP 2</span>
              <span className="step-name">SELECT PLAN</span>
            </div>
          </div>
  
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-label">
              <span className="step-title">STEP 3</span>
              <span className="step-name">ADD-ONS</span>
            </div>
          </div>
  
          <div className="step">
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
  

export default Page1;
