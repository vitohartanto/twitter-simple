import toast from 'react-hot-toast';
import api from '../../utils/api';

const USERS_ACTION_TYPES = {
  SEE_USERS: 'users/SEE_USERS',
};

const seeUsersActionCreator = (users) => ({
  type: USERS_ACTION_TYPES.SEE_USERS,
  payload: {
    users,
  },
});

const asyncRegisterUser = ({ name, email, password }) => async () => {
  try {
    await api.register({ name, email, password });
    toast.success('Register Successful');
  } catch (error) {
    toast.error(error.message);
  }
};

export { seeUsersActionCreator, asyncRegisterUser };
