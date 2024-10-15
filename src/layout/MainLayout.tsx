import { ReactNode } from 'react'; // Use ReactNode for typing children
import Form from '../components/form';

type Props = {
    children: ReactNode; // This covers any valid JSX content
  }
  
  function MainLayout({ children }: Props) {
    return (
      <>
        <main>
          <Form/>
        </main>
      </>
    );
  }
  
  export default MainLayout;
  