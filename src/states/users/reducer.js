const USERS_ACTION_TYPES = {
  SEE_USERS: 'users/SEE_USERS',
};

const usersReducer = (users = [], action = {}) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.SEE_USERS:
      return action.payload.users;
    default:
      return users;
  }
};

export default usersReducer;
