import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
