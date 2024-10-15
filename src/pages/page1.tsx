import { useState } from "react";

function Page1() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [error, setError] = useState(false);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.phone === "") {
        setError(true);
      } else {
        setError(false);
        // Proceed to the next step or handle the data
      }
    };
  
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

        <div className="form-content">

<div className="form-header">
    
</div>

<form >

</form>

</div>
</div>
    );
  }
  

export default Page1;
