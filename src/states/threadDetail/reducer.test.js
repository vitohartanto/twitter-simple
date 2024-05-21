import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

const THREAD_DETAIL_ACTION_TYPES = {
  SEE_THREAD_DETAIL: 'threadDetail/SEE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'threadDetail/CLEAR_THREAD_DETAIL',
  CREATE_COMMENT_THREAD_DETAIL: 'threadDetail/CREATE_COMMENT_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'threadDetail/UP_VOTE_THREAD_DETAIL',
  NEUTRALIZE_VOTE_THREAD_DETAIL: 'threadDetail/NEUTRALIZE_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'threadDetail/DOWN_VOTE_THREAD_DETAIL',
  UP_VOTE_COMMENT_THREAD_DETAIL: 'threadDetail/UP_VOTE_COMMENT_THREAD_DETAIL',
  NEUTRALIZE_VOTE_COMMENT_THREAD_DETAIL:
    'threadDetail/NEUTRALIZE_VOTE_COMMENT_THREAD_DETAIL',
  DOWN_VOTE_COMMENT_THREAD_DETAIL:
    'threadDetail/DOWN_VOTE_COMMENT_THREAD_DETAIL',
};

/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknow action
 *  - should return thread when given by threadDetail/SEE_THREAD_DETAIL action
 *  - should return thread detail with new comment when given by threadDetail/CREATE_COMMENT_THREAD_DETAIL action
 *  - should return the thread detail with up voted thread detail
 *      when given threadDetail/TOGGLE_UPVOTE_THREAD_DETAIL action
 *  - should return the thread detail with neutralize voted thread detail
 *      when given threadDetail/TOGGLE_NEUTRALVOTE_THREAD_DETAIL action
 *  - should return the thread detail with down voted thread detail
 *      when given threadDetail/TOGGLE_DOWNVOTE_THREAD_DETAIL action
 *  - should return the thread detail with toggled up vote comment thread detail
 *      when given threadDetail/TOGGLE_UPVOTE_COMMENT_THREAD_DETAIL action
 *  - should return the thread detail with toggled neutral vote comment thread detail
 *      when given threadDetail/TOGGLE_NEUTRALVOTE_COMMENT_THREAD_DETAIL action
 *  - should return the thread detail with toggled down vote comment thread detail
 *      when given threadDetail/TOGGLE_DOWNVOTE_COMMENT_THREAD_DETAIL action
 */

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknow action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return thread when given by threadDetail/SEE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: THREAD_DETAIL_ACTION_TYPES.SEE_THREAD_DETAIL,
      payload: {
        threadDetail: [
          {
            id: 'thread-1',
            title: 'First Thread',
            body: 'Hello world',
            createdAt: '2024-05-21T02:14:19.068Z',
            owner: {
              id: 'user-1',
              name: 'Riko',
              avatar: 'https://ui-avatars.com/api/?name=Riko&background=random',
            },
            category: 'Percobaan',
            comments: [
              {
                id: 'comment-1',
                content: 'Apa kabar',
                createdAt: '2024-05-21T02:22:27.078Z',
                owner: {
                  id: 'user-doni',
                  name: 'Doni',
                  avatar:
                    'https://ui-avatars.com/api/?name=Doni&background=random',
                },
                upVotesBy: ['user-2'],
                downVotesBy: [],
              },
            ],
            upVotesBy: [],
            downVotesBy: ['user-2'],
          },
          {
            id: 'thread-2',
            title: 'Second Thread',
            body: 'Hello world 2',
            createdAt: '2024-05-21T02:14:19.068Z',
            owner: {
              id: 'user-1',
              name: 'Doni',
              avatar: 'https://ui-avatars.com/api/?name=Doni&background=random',
            },
            category: 'Percobaan 2',
            comments: [
              {
                id: 'comment-1',
                content: 'Apa kabar Doni, saya Rizky',
                createdAt: '2024-05-21T02:22:27.078Z',
                owner: {
                  id: 'user-rizky',
                  name: 'Rizky',
                  avatar:
                    'https://ui-avatars.com/api/?name=Rizky&background=random',
                },
                upVotesBy: ['user-2'],
                downVotesBy: [],
              },
            ],
            upVotesBy: [],
            downVotesBy: ['user-2'],
          },
        ],
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return thread detail with new comment when given by threadDetail/CREATE_COMMENT_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'First Thread',
      body: 'Hello world',
      createdAt: '2024-05-21T02:14:19.068Z',
      owner: {
        id: 'user-1',
        name: 'Riko',
        avatar: 'https://ui-avatars.com/api/?name=Riko&background=random',
      },
      category: 'Percobaan',
      comments: [],
      upVotesBy: [],
      downVotesBy: ['user-2'],
    };

    const action = {
      type: THREAD_DETAIL_ACTION_TYPES.CREATE_COMMENT_THREAD_DETAIL,
      payload: {
        threadId: 'thread-1',
        comment: {
          id: 'comment-1',
          content: 'First Comment',
          createdAt: '2024-05-21T02:22:55.078Z',
          owner: {
            id: 'user-3',
            name: 'Rembo',
            avatar: 'https://ui-avatars.com/api/?name=Rembo&background=random',
          },
          upVotesBy: ['user-2'],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  // eslint-disable-next-line max-len
  it('should return the thread detail with up voted thread detail when given threadDetail/UP_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'First Thread',
      body: 'Hello world',
      createdAt: '2024-05-21T02:14:19.068Z',
      owner: {
        id: 'user-1',
        name: 'Riko',
        avatar: 'https://ui-avatars.com/api/?name=Riko&background=random',
      },
      category: 'Percobaan',
      comments: [
        {
          id: 'comment-1',
          content: 'Apa kabar',
          createdAt: '2024-05-21T02:22:27.078Z',
          owner: {
            id: 'user-doni',
            name: 'Doni',
            avatar: 'https://ui-avatars.com/api/?name=Doni&background=random',
          },
          upVotesBy: ['user-2'],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };

    const action = {
      type: THREAD_DETAIL_ACTION_TYPES.UP_VOTE_THREAD_DETAIL,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });

  // eslint-disable-next-line max-len
  it('should return the thread detail with neutralize voted thread detail when given threadDetail/NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'First Thread',
      body: 'Hello world',
      createdAt: '2024-05-21T02:14:19.068Z',
      owner: {
        id: 'user-1',
        name: 'Riko',
        avatar: 'https://ui-avatars.com/api/?name=Riko&background=random',
      },
      category: 'Percobaan',
      comments: [
        {
          id: 'comment-1',
          content: 'Apa kabar',
          createdAt: '2024-05-21T02:22:27.078Z',
          owner: {
            id: 'user-doni',
            name: 'Doni',
            avatar: 'https://ui-avatars.com/api/?name=Doni&background=random',
          },
          upVotesBy: ['user-2'],
          downVotesBy: [],
        },
      ],
      upVotesBy: ['user-1'],
      downVotesBy: [],
    };
    const action = {
      type: THREAD_DETAIL_ACTION_TYPES.NEUTRALIZE_VOTE_THREAD_DETAIL,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });
});
