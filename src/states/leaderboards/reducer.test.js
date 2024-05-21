import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';

const LEADERBOARDS_ACTION_TYPES = {
  SEE_LEADERBOARDS: 'leaderboards/SEE_LEADERBOARDS',
};

/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the isPreload with value boolen when given by isPreload/SET_IS_PRELOAD action
 */

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });
});
