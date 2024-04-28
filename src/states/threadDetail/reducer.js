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

const threadDetailReducer = (threadDetail = [], action = {}) => {
  switch (action.type) {
    case THREAD_DETAIL_ACTION_TYPES.SEE_THREAD_DETAIL:
      return action.payload.threadDetail;

    case THREAD_DETAIL_ACTION_TYPES.CLEAR_THREAD_DETAIL:
      return null;

    case THREAD_DETAIL_ACTION_TYPES.CREATE_COMMENT_THREAD_DETAIL:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };

    case THREAD_DETAIL_ACTION_TYPES.UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy.concat([action.payload.userId]),
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter(
              (id) => id !== action.payload.userId
            )
          : threadDetail.downVotesBy,
      };

    case THREAD_DETAIL_ACTION_TYPES.NEUTRALIZE_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter(
              (id) => id !== action.payload.userId
            )
          : threadDetail.downVotesBy,
      };

    case THREAD_DETAIL_ACTION_TYPES.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter(
              (id) => id !== action.payload.userId
            )
          : threadDetail.downVotesBy.concat([action.payload.userId]),
      };

    case THREAD_DETAIL_ACTION_TYPES.UP_VOTE_COMMENT_THREAD_DETAIL:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy.concat([action.payload.userId]),
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (id) => id !== action.payload.userId
                  )
                : comment.downVotesBy,
            };
          }
          return comment;
        }),
      };

    case THREAD_DETAIL_ACTION_TYPES.NEUTRALIZE_VOTE_COMMENT_THREAD_DETAIL:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (id) => id !== action.payload.userId
                  )
                : comment.downVotesBy,
            };
          }
          return comment;
        }),
      };

    case THREAD_DETAIL_ACTION_TYPES.DOWN_VOTE_COMMENT_THREAD_DETAIL:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (id) => id !== action.payload.userId
                  )
                : comment.downVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };

    default:
      return threadDetail;
  }
};

export default threadDetailReducer;
