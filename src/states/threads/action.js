import toast from 'react-hot-toast';
import api from '../../utils/api';

const THREADS_ACTION_TYPES = {
  SEE_THREADS: 'threads/SEE_THREADS',
  CREATE_THREAD: 'threads/CREATE_THREAD',
  UP_VOTE_THREAD: 'threads/UP_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'threads/NEUTRALIZE_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'threads/DOWN_VOTE_THREAD',
};

const seeThreadsActionCreator = (threads) => {
  return {
    type: THREADS_ACTION_TYPES.SEE_THREADS,
    payload: {
      threads,
    },
  };
};

const createThreadActionCreator = (thread) => {
  return {
    type: THREADS_ACTION_TYPES.CREATE_THREAD,
    payload: {
      thread,
    },
  };
};

const upVoteThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: THREADS_ACTION_TYPES.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
};

const neutralizeThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: THREADS_ACTION_TYPES.NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
};

const downThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: THREADS_ACTION_TYPES.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
};

const asyncSeeThreads = () => {
  return async (dispatch) => {
    try {
      const threads = await api.seeAllThreads();
      dispatch(seeThreadsActionCreator(threads));
    } catch (error) {
      toast.error(error.message);
    }
  };
};

const asyncCreateThread = ({ title, category, body }) => {
  return async (dispatch) => {
    try {
      const thread = await api.createThread(title, category, body);
      dispatch(createThreadActionCreator(thread));

      toast.success('Successfully add new thread');
    } catch (error) {
      toast.error(error.message);
    }
  };
};

const asyncUpVoteThread = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
      toast.error(error.message);
    }
  };
};

const asyncNeutralizeVoteThread = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.neutralizeVoteThread(threadId);
    } catch (error) {
      dispatch(
        neutralizeThreadActionCreator({ threadId, userId: authUser.id })
      );
      toast.error(error.message);
    }
  };
};

const asyncDownVoteThread = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      dispatch(downThreadActionCreator({ threadId, userId: authUser.id }));
      toast.error(error.message);
    }
  };
};

export {
  seeThreadsActionCreator,
  createThreadActionCreator,
  asyncSeeThreads,
  asyncCreateThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};
