// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { asyncSeeLeaderboards, seeLeaderboardsActionCreator } from './action';

/**
 * test scenario
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert(react-hot-toast) correctly when data fetching failed
 */

const fakeLeaderboardsResponse = [
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
];

const fakeErrorResponse = new Error('Ups, something went wrong!');

describe('asyncSeeLeaderboards thunk', () => {
  beforeEach(() => {
    api._seeLeaderboards = api.seeLeaderboards;
  });

  afterEach(() => {
    api.seeLeaderboards = api._seeLeaderboards;

    // delete backup data
    delete api._seeLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    api.seeLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncSeeLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      // eslint-disable-next-line comma-dangle
      seeLeaderboardsActionCreator(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert(react-hot-toast) correctly when data fetching failed', async () => {
    // Arrange
    api.seeLeaderboards = () => Promise.reject(fakeErrorResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Mock react-hot-toast error
    toast.error = vi.fn();

    // Action
    await asyncSeeLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
