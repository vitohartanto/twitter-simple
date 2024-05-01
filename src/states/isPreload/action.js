import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';

import { setAuthUserActionCreator } from '../authUser/action';

const IS_PRELOAD_ACTION_TYPES = {
  SET_IS_PRELOAD: 'isPreload/SET_IS_PRELOAD',
};

const setIsPreloadActionCreator = (isPreload) => {
  return {
    type: IS_PRELOAD_ACTION_TYPES.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
};

const asyncPreloadProcess = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const authUser = await api.seeOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }

    dispatch(hideLoading());
  };
};

export { setIsPreloadActionCreator, asyncPreloadProcess };
