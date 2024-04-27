import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RegisterPage from './pages/RegisterPage';
import AddTalkPage from './pages/AddTalkPage';

const App = () => {
  return (
    <BrowserRouter>
      <AddTalkPage />
    </BrowserRouter>
  );
};

export default App;
