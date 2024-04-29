import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpVoteThread } from '../states/threads/action';
import asyncUpVoteThreadDetail from '../states/threadDetail/action';
import { FaRegThumbsUp } from 'react-icons/fa';

const UpVoteThreadButton = ({ threadId, upVotesBy }) => {
  const { authUser = null } = useSelector((states) => states);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isLikedThread = useMemo(() => {
    return upVotesBy?.includes(authUser.id);
  }, [upVotesBy, authUser]);

  const onUpVoteHandler = useCallback(
    (event) => {
      event.stopPropagation();

      if (pathname === '/') {
        dispatch(asyncUpVoteThread(threadId));
      } else {
        dispatch(asyncUpVoteThreadDetail(threadId));
      }
    },
    [pathname, dispatch, threadId]
  );

  return (
    <button title="Up vote" onClick={onUpVoteHandler}>
      <div className="flex items-center">
        {isLikedThread ? (
          <FaRegThumbsUp className="text-green-500 fill-green-500" />
        ) : (
          <FaRegThumbsUp className="" />
        )}
        <span>{upVotesBy?.length}</span>
      </div>
    </button>
  );
};

export default UpVoteThreadButton;
