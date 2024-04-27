import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LeaderboardsPage from './pages/LeaderboardsPage';

const App = () => {
  return (
    <BrowserRouter>
      <LeaderboardsPage />
    </BrowserRouter>
  );
};

export default App;
