import './App.css';
import MainLayout from './layout/MainLayout';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="page1" element={<Page1 />} /> {/* Default or index route */}
        <Route path="page2" element={<Page2 />} /> 
      </Route>
    </Routes>
  </Router>
);
}

export default App;
