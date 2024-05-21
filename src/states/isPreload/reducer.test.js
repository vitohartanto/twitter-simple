import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer';

const IS_PRELOAD_ACTION_TYPES = {
  SET_IS_PRELOAD: 'isPreload/SET_IS_PRELOAD',
};

/**
 * test scenario for talksReducer
 *
 * - isPreloadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the isPreload with value boolean when given by isPreload/SET_IS_PRELOAD action
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

  it('should return the isPreload with value boolean when given by isPreload/SET_IS_PRELOAD action', () => {
    // Arrange
    const initialState = true;
    const isPreloadActionFalse = {
      type: IS_PRELOAD_ACTION_TYPES.SET_IS_PRELOAD,
      payload: {
        isPreload: false,
      },
    };

    const isPreloadActionTrue = {
      type: IS_PRELOAD_ACTION_TYPES.SET_IS_PRELOAD,
      payload: {
        isPreload: true,
      },
    };

    // Action
    const nextStateFalse = isPreloadReducer(initialState, isPreloadActionFalse);
    const nextStateTrue = isPreloadReducer(initialState, isPreloadActionTrue);

    // Assert
    expect(nextStateFalse).toEqual(false);
    expect(nextStateTrue).toEqual(true);
  });
});
