import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDownVoteThread } from '../states/threads/action';
import { asyncDownVoteThreadDetail } from '../states/threadDetail/action';
import { FaRegThumbsDown } from 'react-icons/fa';

const DownVoteThreadButton = ({ threadId, downVotesBy }) => {
  const authUser = useSelector((state) => state.authUser || null);

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
          <FaRegThumbsDown className="text-red-500 fill-red-500 mr-2" />
        ) : (
          <FaRegThumbsDown className="mr-2" />
        )}
        <span className="mr-2">{downVotesBy?.length}</span>
      </div>
    </button>
  );
};

DownVoteThreadButton.propTypes = {
  threadId: PropTypes.string,
  downVotesBy: PropTypes.array,
};

export default DownVoteThreadButton;
