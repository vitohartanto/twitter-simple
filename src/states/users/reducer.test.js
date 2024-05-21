import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

const USERS_ACTION_TYPES = {
  SEE_USERS: 'users/SEE_USERS',
};

/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 * - should return users when given by users/SEE_USERS action
 *  - should return the initial state when given by unknown action
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

  it('should return users when given by users/SEE_USERS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: USERS_ACTION_TYPES.SEE_USERS,
      payload: {
        users: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://ui-avatars.com/api/?name=John Doe&background=random',
        },
      },
    };

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.users);
  });
});
