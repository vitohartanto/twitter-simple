import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  asyncUpVoteCommentThreadDetail,
  asyncNeutralizeVoteCommentThreadDetail,
  asyncDownVoteCommentThreadDetail,
} from '../states/threadDetail/action';
import { useCallback } from 'react';
import { postedAt } from '../utils/postedAt';
import parse from 'html-react-parser';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { MdSentimentNeutral } from 'react-icons/md';

const Comment = ({ comment }) => {
  const authUser = useSelector((state) => state.authUser || null);
  const dispatch = useDispatch();

  const purifiedDataComment = DOMPurify.sanitize(comment.content);

  const isLikedComment = useMemo(() => {
    return comment?.upVotesBy?.includes(authUser.id);
  }, [comment, authUser]);

  const isNeutralizedComment = useMemo(() => {
    const isLiked = comment?.upVotesBy?.includes(authUser.id);
    const isDisliked = comment?.downVotesBy?.includes(authUser.id);

    return !isLiked && !isDisliked;
  }, [comment, authUser]);

  const isDislikedComment = useMemo(() => {
    return comment?.downVotesBy?.includes(authUser.id);
  }, [comment, authUser]);

  const onUpVoteCommentHandler = useCallback(
    (commentId) => {
      dispatch(asyncUpVoteCommentThreadDetail(commentId));
    },
    [dispatch]
  );

  const onNeutralizeVoteCommentHandler = useCallback(
    (commentId) => {
      dispatch(asyncNeutralizeVoteCommentThreadDetail(commentId));
    },
    [dispatch]
  );

  const onDownVoteCommentHandler = useCallback(
    (commentId) => {
      dispatch(asyncDownVoteCommentThreadDetail(commentId));
    },
    [dispatch]
  );

  return (
    <div
      key={comment.id}
      className="mt-4 p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            src={`${comment?.owner.avatar}`}
            alt={`${comment?.owner.name}`}
            className="w-8 h-8 rounded-full mr-2"
          />
          <p>{comment.owner.name}</p>
        </div>
        <p>{postedAt(comment.createdAt)}</p>
      </div>
      <h1 className="mb-4">{parse(purifiedDataComment)}</h1>
      <div className="flex items-center text-white text-xl mb-2">
        <button onClick={() => onUpVoteCommentHandler(comment.id)}>
          {isLikedComment ? (
            <FaRegThumbsUp className="w-8 h-8 mr-2 text-green-500 fill-green-500" />
          ) : (
            <FaRegThumbsUp className="w-8 h-8 mr-2" />
          )}
        </button>
        <p className="">{comment.upVotesBy?.length}</p>
        <button onClick={() => onNeutralizeVoteCommentHandler(comment.id)}>
          {isNeutralizedComment ? (
            <MdSentimentNeutral className="w-8 h-8 mx-4 text-blue-500 fill-blue-500" />
          ) : (
            <MdSentimentNeutral className="w-8 h-8 mx-4" />
          )}
        </button>

        <button onClick={() => onDownVoteCommentHandler(comment.id)}>
          {isDislikedComment ? (
            <FaRegThumbsDown className="w-8 h-8 mr-2 text-red-500 fill-red-500" />
          ) : (
            <FaRegThumbsDown className="w-8 h-8 mr-2" />
          )}
        </button>
        <p className="">{comment.downVotesBy?.length}</p>
      </div>
    </div>
  );
};

export default Comment;
