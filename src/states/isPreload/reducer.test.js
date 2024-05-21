import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer';

const AUTH_USER_ACTION_TYPES = {
  SET_AUTH_USER: 'authUser/SET_AUTH_USER',
  UNSET_AUTH_USER: 'authUser/UNSET_AUTH_USER',
};

/**
 * test scenario for talksReducer
 *
 * - isPreloadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by authUser/SET_AUTH_USER action
 *  - should return the authUser with value null when given by authUser/UNSET_AUTH_USER action
 *
 */

describe('isPreloadReducer Function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = true;
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = isPreloadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });
});
