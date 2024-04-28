const THREADS_ACTION_TYPES = {
  SEE_THREADS: 'threads/SEE_THREADS',
  CREATE_THREAD: 'threads/CREATE_THREAD',
  UP_VOTE_THREAD: 'threads/UP_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'threads/NEUTRALIZE_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'threads/DOWN_VOTE_THREAD',
};

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case THREADS_ACTION_TYPES.SEE_THREADS:
      return action.payload.threads;

    case THREADS_ACTION_TYPES.CREATE_THREAD:
      return [action.payload.thread, ...threads];

    case THREADS_ACTION_TYPES.UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy.concat([action.payload.userId]),
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy,
          };
        }

        return thread;
      });

    case THREADS_ACTION_TYPES.NEUTRALIZE_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy,
          };
        }

        return thread;
      });

    case THREADS_ACTION_TYPES.DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy.concat([action.payload.userId]),
          };
        }

        return thread;
      });
    default:
      return threads;
  }
};

export default threadsReducer;
