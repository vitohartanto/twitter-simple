import toast from 'react-hot-toast';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

import { seeThreadsActionCreator } from '../threads/action';
import { seeUsersActionCreator } from '../users/action';

const asyncPopulateUsersAndThreads = () => async (dispatch) => {
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

// eslint-disable-next-line import/prefer-default-export
export { asyncPopulateUsersAndThreads };
