import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpVoteThread } from '../states/threads/action';
import asyncUpVoteThreadDetail from '../states/threadDetail/action';
import { FaRegThumbsDown } from 'react-icons/fa';

const DownVoteThreadButton = ({ threadId, downVotesBy }) => {
  const { authUser = null } = useSelector((states) => states);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isDislikedThread = useMemo(() => {
    return downVotesBy?.includes(authUser.id);
  }, [downVotesBy, authUser]);

  const onDownVoteHandler = useCallback(
    (event) => {
      event.stopPropagation();

      if (pathname === '/') {
        dispatch(asyncDownVoteThread(threadId));
      } else {
        dispatch(asyncDownVoteThreadDetail(threadId));
      }
    },
    [pathname, dispatch, threadId]
  );

  return (
    <button title="Up vote" onClick={onDownVoteHandler}>
      <div className="flex items-center">
        {isDislikedThread ? (
          <FaRegThumbsDown className="text-red-500 fill-red-500" />
        ) : (
          <FaRegThumbsDown className="" />
        )}
        <span>{downVotesBy?.length}</span>
      </div>
    </button>
  );
};

export default DownVoteThreadButton;
