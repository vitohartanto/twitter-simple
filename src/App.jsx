import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RegisterPage from './pages/RegisterPage';
import CreateThreadPage from './pages/CreateThreadPage';
import DetailPage from './pages/DetailPage';
import Loading from './components/Loading';
import NotFound404Page from './pages/NotFound404Page';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { asyncPreloadProcess } from './states/isPreload/action';

const App = () => {
  const authUser = useSelector((state) => state.authUser || null);
  const isPreload = useSelector((state) => state.isPreload || false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Loading />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/threads">
          <Route path="newThread" element={<CreateThreadPage />} />
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
