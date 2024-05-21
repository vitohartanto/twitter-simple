// eslint-disable-next-line object-curly-newline
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import { setAuthUserActionCreator } from '../authUser/action';
/**
 * test scenario
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeAuthUserResponse = {
  user: {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._seeOwnProfile = api.seeOwnProfile;
  });

  afterEach(() => {
    api.seeOwnProfile = api._seeOwnProfile;

    // Delete backup data
    delete api._seeOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // Implementating Stub
    api.seeOwnProfile = () => Promise.resolve(fakeAuthUserResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      // eslint-disable-next-line comma-dangle
      setAuthUserActionCreator(fakeAuthUserResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    //  Arrange
    // Stub Implementation
    api.seeOwnProfile = () => Promise.reject(fakeErrorResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));

    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
