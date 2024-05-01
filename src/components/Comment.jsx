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
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const purifiedDataComment = DOMPurify.sanitize(comment.content);

  const isLikedComment = useMemo(
    () => comment?.upVotesBy?.includes(authUser.id),
    [comment, authUser]
  );

  const isNeutralizedComment = useMemo(() => {
    const isLiked = comment?.upVotesBy?.includes(authUser.id);
    const isDisliked = comment?.downVotesBy?.includes(authUser.id);

    return !isLiked && !isDisliked;
  }, [comment, authUser]);

  const isDislikedComment = useMemo(
    () => comment?.downVotesBy?.includes(authUser.id),
    [comment, authUser]
  );

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
    <div className="p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <img
            src={`${comment?.owner.avatar}`}
            alt={`${comment?.owner.name}`}
          />
          <p>{comment.owner.name}</p>
        </div>
        <p>{postedAt(comment.createdAt)}</p>
      </div>
      <p className="mb-4">{parse(purifiedDataComment)}</p>
      <div className="flex text-white text-xl mb-2">
        <button onClick={onUpVoteCommentHandler(comment.id)}>
          {isLikedComment ? (
            <FaRegThumbsUp className="w-8 h-8 text-green-500 fill-green-500" />
          ) : (
            <FaRegThumbsUp className="w-8 h-8" />
          )}
        </button>
        <p className="mr-4">{comment.upVotesBy?.length}</p>
        <button onClick={onNeutralizeVoteCommentHandler(comment.id)}>
          {isNeutralizedComment ? (
            <MdSentimentNeutral className="w-8 h-8 text-blue-500 fill-blue-500" />
          ) : (
            <MdSentimentNeutral className="w-8 h-8" />
          )}
        </button>

        <button onClick={onDownVoteCommentHandler(comment.id)}>
          {isLikedComment ? (
            <FaRegThumbsDown className="w-8 h-8 text-red-500 fill-red-500" />
          ) : (
            <FaRegThumbsDown className="w-8 h-8" />
          )}
        </button>
        <p className="mr-4">{comment.downVotesBy?.length}</p>
      </div>
    </div>
  );
};

export default Comment;
