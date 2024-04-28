import toast from 'react-hot-toast';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';

const LEADERBOARDS_ACTION_TYPES = {
  SEE_LEADERBOARDS: 'leaderboards/SEE_LEADERBOARDS',
};

const seeLeaderboardsActionCreator = (leaderboards) => {
  return {
    type: LEADERBOARDS_ACTION_TYPES.SEE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
};

const asyncSeeLeaderboards = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const leaderboards = await api.seeLeaderboards();
      dispatch(seeLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      toast.error(error.message);
    }

    dispatch(hideLoading());
  };
};

export { seeLeaderboardsActionCreator, asyncSeeLeaderboards };
