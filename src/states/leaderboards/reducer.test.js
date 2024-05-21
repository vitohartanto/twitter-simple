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
 *  - should return the leaderboards when given by leaderboards/SEE_LEADERBOARDS action
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

  it('should return the leaderboards when given by leaderboards/SEE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: LEADERBOARDS_ACTION_TYPES.SEE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'user-dimassaputra',
              name: 'Dimas Saputra',
              email: 'dimas@dicoding.com',
              avatar:
                'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
            },
            score: 25,
          },
          {
            user: {
              id: 'user-dicoding',
              name: 'Dicoding',
              email: 'admin@dicoding.com',
              avatar:
                'https://ui-avatars.com/api/?name=Dicoding&background=random',
            },
            score: 0,
          },
          {
            user: {
              id: 'user-ganmara',
              name: 'ganmara',
              email: 'ganmara888@gmail.com',
              avatar:
                'https://ui-avatars.com/api/?name=ganmara&background=random',
            },
            score: 0,
          },
        ],
      },
    };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
