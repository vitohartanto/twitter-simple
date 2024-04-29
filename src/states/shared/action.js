import toast from 'react-hot-toast';
import api from '../../utils/api';

import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { seeThreadsActionCreator } from '../threads/action';
import { seeUsersActionCreator } from '../users/action';

const asyncPopulateUsersAndThreads = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.seeAllUsers();
      const threads = await api.seeAllThreads();

      dispatch(seeUsersActionCreator(users));
      dispatch(seeThreadsActionCreator(threads));
    } catch (error) {
      toast.error(error.message);
    }

    dispatch(hideLoading());
  };
};

export { asyncPopulateUsersAndThreads };
