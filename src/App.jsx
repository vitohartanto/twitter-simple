import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RegisterPage from './pages/RegisterPage';
import AddThreadPage from './pages/AddThreadPage';
import DetailPage from './pages/DetailPage';
import Loading from './components/Loading';
import NotFound404Page from './pages/NotFound404Page';

const App = () => {
  let authUser = 1;

  if (authUser === null) {
    return (
      <>
        {/* <Loading /> */}
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      {/* <Loading /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/threads">
          <Route path="newThread" element={<AddThreadPage />} />
          <Route path=":threadId" element={<DetailPage />} />
        </Route>
        <Route path="/leaderboards" element={<LeaderboardsPage />} />
        <Route path="/*" element={<NotFound404Page />} />
        <Route />
      </Routes>
    </>
  );
};

export default App;
