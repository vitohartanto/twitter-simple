import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';

const AUTH_USER_ACTION_TYPES = {
  SET_AUTH_USER: 'authUser/SET_AUTH_USER',
  UNSET_AUTH_USER: 'authUser/UNSET_AUTH_USER',
};

/**
 * test scenario for talksReducer
 *
 * - authUserReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by authUser/SET_AUTH_USER action
 *  - should return the authUser with value null when given by authUser/UNSET_AUTH_USER action
 *
 */

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by authUser/SET_AUTH_USER action', () => {
    // Arrange
    const initialState = null;
    const action = {
      type: AUTH_USER_ACTION_TYPES.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 'user-ganmara',
          name: 'ganmara',
          email: 'ganmara888@gmail.com',
          avatar: 'https://ui-avatars.com/api/?name=ganmara&background=random',
        },
      },
    };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return the authUser with value null when given by authUser/UNSET_AUTH_USER action', () => {
    // Arrange
    const initialState = null;
    const action = {
      type: AUTH_USER_ACTION_TYPES.UNSET_AUTH_USER,
    };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(null);
  });
});
