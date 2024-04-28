import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RegisterPage from './pages/RegisterPage';
import AddTalkPage from './pages/AddTalkPage';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <DetailPage />
    </BrowserRouter>
  );
};

export default App;
