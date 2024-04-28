const AUTH_USER_ACTION_TYPES = {
  SET_AUTH_USER: 'authUser/SET_AUTH_USER',
  UNSET_AUTH_USER: 'authUser/UNSET_AUTH_USER',
};

const authUserReducer = (authUser = null, action = {}) => {
  switch (action.type) {
    case AUTH_USER_ACTION_TYPES.SET_AUTH_USER:
      return action.payload.authUser;
    case AUTH_USER_ACTION_TYPES.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
};

export default authUserReducer;
