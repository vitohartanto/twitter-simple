import toast from 'react-hot-toast';
import api from '../../utils/api';

const AUTH_USER_ACTION_TYPES = {
  SET_AUTH_USER: 'authUser/SET_AUTH_USER',
  UNSET_AUTH_USER: 'authUser/UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => {
  return {
    type: AUTH_USER_ACTION_TYPES.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
};

const unsetAuthUserActionCreator = () => {
  return {
    type: AUTH_USER_ACTION_TYPES.UNSET_AUTH_USER,
  };
};

const asyncSetAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);

      const authUser = await api.seeOwnProfile;
      dispatch(setAuthUserActionCreator(authUser));
      toast.success('Login Successful');
    } catch (error) {
      toast.error(error.message);
    }
  };
};

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
  };
};

export {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
