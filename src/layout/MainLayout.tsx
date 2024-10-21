import { Outlet } from 'react-router-dom';
import FormStepper from '../components/FormStepper';

function MainLayout() {
  return (
    <>
      <main className="form-container">
        <FormStepper />
        <Outlet /> 
      </main>
    </>
  );
}

export default MainLayout;
