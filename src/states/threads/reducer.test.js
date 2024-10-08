import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

const THREADS_ACTION_TYPES = {
  SEE_THREADS: 'threads/SEE_THREADS',
  CREATE_THREAD: 'threads/CREATE_THREAD',
  UP_VOTE_THREAD: 'threads/UP_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'threads/NEUTRALIZE_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'threads/DOWN_VOTE_THREAD',
};

/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return threads when given by threads/SEE_THREADS action
 *  - should return the threads with the new thread when given by threads/CREATE_THREAD action
 *  - should return the threads with the up voted thread when given by threads/UP_VOTE_THREAD action
 *  - should return the threads with the neutralize voted thread when given by threads/NEUTRALIZE_VOTE_THREAD action
 *  - should return the threads with the down voted thread when given by threads/DOWN_VOTE_THREAD action
 */

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return threads when given by threads/SEE_THREADS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: THREADS_ACTION_TYPES.SEE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'First Thread',
            body: 'Hello world',
            category: 'Percobaan',
            createdAt: '2024-05-21T07:00:00.000Z',
            ownerId: 'user-1',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [''],
          },
          {
            id: 'thread-2',
            title: 'Second Thread',
            body: 'Hello world 2',
            category: 'Percobaan 2',
            createdAt: '2024-05-21T07:00:00.000Z',
            ownerId: 'user-2',
            totalComments: 2,
            upVotesBy: ['user-3'],
            downVotesBy: [''],
          },
        ],
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by threads/CREATE_THREAD action', () => {
    // Arrange
    const initialState = [
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

    const action = {
      type: THREADS_ACTION_TYPES.CREATE_THREAD,
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Second Thread',
          body: 'Hello world 2',
          category: 'Percobaan 2',
          createdAt: '2024-05-21T07:00:00.000Z',
          ownerId: 'user-2',
          totalComments: 0,
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the up voted thread when given by threads/UP_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
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

    const action = {
      type: THREADS_ACTION_TYPES.UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the neutralize voted thread when given by threads/NEUTRALIZE_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'First Thread',
        body: 'Hello world',
        category: 'Percobaan',
        createdAt: '2024-05-21T07:00:00.000Z',
        ownerId: 'user-1',
        totalComments: 0,
        upVotesBy: ['user-1'],
        downVotesBy: [],
      },
    ];

    const action = {
      type: THREADS_ACTION_TYPES.UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the down voted thread when given by threads/DOWN_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
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

    const action = {
      type: THREADS_ACTION_TYPES.DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
