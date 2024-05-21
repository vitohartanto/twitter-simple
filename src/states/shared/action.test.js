// eslint-disable-next-line object-curly-newline
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { asyncPopulateUsersAndThreads } from './action';
import { seeThreadsActionCreator } from '../threads/action';
import { seeUsersActionCreator } from '../users/action';

/**
 * test scenario
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert(toast) correctly when data fetching failed
 */

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'First Thread',
    body: 'Hello world',
    category: 'Percobaan',
    createdAt: '2024-05-21T07:00:00.000Z',
    ownerId: 'user-1',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
];

const fakeUsersResponse = [
  {
    id: 'user-1',
    name: 'Vito',
    email: 'vito@gmail.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._seeAllUsers = api.seeAllUsers;
    api._seeAllThreads = api.seeAllThreads;
  });

  afterEach(() => {
    api.seeAllUsers = api._seeAllUsers;
    api.seeAllThreads = api._seeAllThreads;

    // delete backup data
    delete api._seeAllUsers;
    delete api._seeAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // Implementating stub
    api.seeAllThreads = () => Promise.resolve(fakeThreadsResponse);
    api.seeAllUsers = () => Promise.resolve(fakeUsersResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalled(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      // eslint-disable-next-line comma-dangle
      seeThreadsActionCreator(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      // eslint-disable-next-line comma-dangle
      seeUsersActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalled(hideLoading());
  });

  it('should dispatch action and call alert(react-hot-toast) correctly when data fetching failed', async () => {
    // Arrange
    // Implementating stub
    api.seeAllThreads = () => Promise.reject(fakeErrorResponse);
    api.seeAllUsers = () => Promise.reject(fakeErrorResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Mock toast
    toast.error = vi.fn();

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
