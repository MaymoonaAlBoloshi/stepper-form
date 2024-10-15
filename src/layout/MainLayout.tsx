import { ReactNode } from 'react'; // Use ReactNode for typing children

type Props = {
    children: ReactNode; // This covers any valid JSX content
  }
  
  function MainLayout({ children }: Props) {
    return (
      <>
        <main>
          <div>
            <h1>Hello World!</h1>
          </div>
        </main>
      </>
    );
  }
  
  export default MainLayout;
  