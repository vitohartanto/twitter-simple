import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>
  );
};

export default App;
