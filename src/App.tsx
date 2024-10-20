import './App.css';
import MainLayout from './layout/MainLayout';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Page1 />} /> {/* Root route */}
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </MainLayout>
  </Router>
  );
}

export default App;
