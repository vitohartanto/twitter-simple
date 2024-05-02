import toast from 'react-hot-toast';

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

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

const seeThreadDetailActionCreator = (threadDetail) => ({
  type: THREAD_DETAIL_ACTION_TYPES.SEE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

const clearThreadDetailActionCreator = () => ({
  type: THREAD_DETAIL_ACTION_TYPES.CLEAR_THREAD_DETAIL,
});

const upVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPES.UP_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const neutralizeVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPES.NEUTRALIZE_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const downVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPES.DOWN_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

// For Comments
const createCommentThreadDetailActionCreator = ({ threadId, comment }) => ({
  type: THREAD_DETAIL_ACTION_TYPES.CREATE_COMMENT_THREAD_DETAIL,
  payload: {
    threadId,
    comment,
  },
});

const upVoteCommentThreadDetailActionCreator = ({ commentId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPES.UP_VOTE_COMMENT_THREAD_DETAIL,
  payload: {
    commentId,
    userId,
  },
});

const neutralizeVoteCommentThreadDetailActionCreator = ({
  commentId,
  userId,
}) => ({
  type: THREAD_DETAIL_ACTION_TYPES.NEUTRALIZE_VOTE_COMMENT_THREAD_DETAIL,
  payload: {
    commentId,
    userId,
  },
});

const downVoteCommentThreadDetailActionCreator = ({ commentId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPES.DOWN_VOTE_COMMENT_THREAD_DETAIL,
  payload: {
    commentId,
    userId,
  },
});

const asyncSeeThreadDetail = (threadId) => async (dispatch) => {
  dispatch(clearThreadDetailActionCreator);

  dispatch(showLoading());

  try {
    const threadDetail = await api.seeThreadDetail(threadId);
    dispatch(seeThreadDetailActionCreator(threadDetail));
  } catch (error) {
    toast.error(error.message);
  }

  dispatch(hideLoading());
};

const asyncUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(
    upVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
  );
  try {
    await api.upVoteThread(threadId);
  } catch (error) {
    dispatch(
      upVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
    );
    toast.error(error.message);
  }
};

const asyncNeutralizeVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(
    neutralizeVoteThreadDetailActionCreator({
      threadId,
      userId: authUser.id,
    }),
  );
  try {
    await api.neutralizeVoteThread(threadId);
  } catch (error) {
    dispatch(
      neutralizeVoteThreadDetailActionCreator({
        threadId,
        userId: authUser.id,
      }),
    );
    toast.error(error.message);
  }
};

const asyncDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(
    downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
  );
  try {
    await api.downVoteThread(threadId);
  } catch (error) {
    dispatch(
      downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
    );
    toast.error(error.message);
  }
};

// Comments Feature
const asyncCreateCommentThreadDetail = (threadId, content) => async (dispatch) => {
  try {
    const comment = await api.createComment({ threadId, content });

    dispatch(createCommentThreadDetailActionCreator({ threadId, comment }));
    toast.success('Comment has been added');
  } catch (error) {
    toast.error(error.message);
  }
};

const asyncUpVoteCommentThreadDetail = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();
  dispatch(
    upVoteCommentThreadDetailActionCreator({ commentId, userId: authUser.id }),
  );

  try {
    const threadId = threadDetail.id;
    await api.upVoteComment({ threadId, commentId });
  } catch (error) {
    dispatch(
      upVoteCommentThreadDetailActionCreator({
        commentId,
        userId: authUser.id,
      }),
    );
    toast.error(error.message);
  }
};

const asyncNeutralizeVoteCommentThreadDetail = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();
  dispatch(
    neutralizeVoteCommentThreadDetailActionCreator({
      commentId,
      userId: authUser.id,
    }),
  );

  try {
    const threadId = threadDetail.id;
    await api.neutralizeVoteComment({ threadId, commentId });
  } catch (error) {
    dispatch(
      neutralizeVoteCommentThreadDetailActionCreator({
        commentId,
        userId: authUser.id,
      }),
    );
    toast.error(error.message);
  }
};

const asyncDownVoteCommentThreadDetail = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();
  dispatch(
    downVoteCommentThreadDetailActionCreator({
      commentId,
      userId: authUser.id,
    }),
  );

  try {
    const threadId = threadDetail.id;
    await api.downVoteComment({ threadId, commentId });
  } catch (error) {
    dispatch(
      downVoteCommentThreadDetailActionCreator({
        commentId,
        userId: authUser.id,
      }),
    );
    toast.error(error.message);
  }
};

export {
  seeThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  createCommentThreadDetailActionCreator,
  asyncSeeThreadDetail,
  asyncUpVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncCreateCommentThreadDetail,
  asyncUpVoteCommentThreadDetail,
  asyncNeutralizeVoteCommentThreadDetail,
  asyncDownVoteCommentThreadDetail,
};
