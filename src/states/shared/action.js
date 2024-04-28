import toast from 'react-hot-toast';
import api from '../../utils/api';

import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

export const asyncPopulateUsersAndThreads = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      toast.error(error.message);
    }

    dispatch(hideLoading());
  };
};
