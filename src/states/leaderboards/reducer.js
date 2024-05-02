const LEADERBOARDS_ACTION_TYPES = {
  SEE_LEADERBOARDS: 'leaderboards/SEE_LEADERBOARDS',
};

const leaderboardsReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case LEADERBOARDS_ACTION_TYPES.SEE_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderboardsReducer;
