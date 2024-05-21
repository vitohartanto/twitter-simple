import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

const USERS_ACTION_TYPES = {
  SEE_USERS: 'users/SEE_USERS',
};

/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknow action
 */

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });
});
