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
 *  - should return thread when given by threadDetail/RECEIVE_THREAD_DETAIL action
 *  - should return thread detail with new comment when given by threadDetail/ADD_COMMENT_THREAD_DETAIL action
 *  - should return the thread detail with toggled up vote thread detail
 *      when given threadDetail/TOGGLE_UPVOTE_THREAD_DETAIL action
 *  - should return the thread detail with toggled neutral vote thread detail
 *      when given threadDetail/TOGGLE_NEUTRALVOTE_THREAD_DETAIL action
 *  - should return the thread detail with toggled down vote thread detail
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
});
