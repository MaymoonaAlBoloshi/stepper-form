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

  // Array of steps with title, subText, url, and stepNumber
  const steps = [
    { title: 'STEP 1', subText: 'YOUR INFO', url: '/page1', stepNumber: '1' },
    { title: 'STEP 2', subText: 'SELECT PLAN', url: '/page2', stepNumber: '2' },
    { title: 'STEP 3', subText: 'ADD-ONS', url: '/page3', stepNumber: '3' },
    { title: 'STEP 4', subText: 'SUMMARY', url: '/page4', stepNumber: '4' },
  ];

  return (
    <div className="steps-sidebar">
      {steps.map((step, index) => (
        <Step
          key={index}
          isActive={location.pathname === step.url} // Comparison done here
          title={step.title}
          subText={step.subText}
          stepNumber={step.stepNumber}
        />
      ))}
    </div>
  );
}

export default FormStepper;
