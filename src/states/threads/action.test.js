// eslint-disable-next-line object-curly-newline
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { asyncSeeThreads, seeThreadsActionCreator } from './action';

/**
 * test scenario
 *
 * - asyncSeeThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
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

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveThreads thunk', () => {
  beforeEach(() => {
    api._seeAllThreads = api.seeAllThreads;
  });

  afterEach(() => {
    api.seeAllThreads = api._seeAllThreads;

    // Delete backup data
    delete api._seeAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // Implementating Stub
    api.seeAllThreads = () => Promise.resolve(fakeThreadsResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncSeeThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(
      // eslint-disable-next-line comma-dangle
      seeThreadsActionCreator(fakeThreadsResponse)
    );
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    //  Arrange
    // Stub Implementation
    api.seeAllThreads = () => Promise.reject(fakeErrorResponse);

    // Mock dispatch
    const dispatch = vi.fn();
    toast.error = vi.fn();

    // Action
    await asyncSeeThreads()(dispatch);

    // Assert
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
