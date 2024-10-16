import { ReactNode } from 'react'; // Use ReactNode for typing children
import FormStepper from '../components/FormStepper';

type Props = {
    children: ReactNode; // This covers any valid JSX content
  }
  
  function MainLayout({ children }: Props) {
    return (
      <>
        <main>
          {children}
          <FormStepper/>
        </main>
      </>
    );
  }
  
  export default MainLayout;
  