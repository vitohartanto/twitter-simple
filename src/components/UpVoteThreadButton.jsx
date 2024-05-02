import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegThumbsUp } from 'react-icons/fa';
import { asyncUpVoteThread } from '../states/threads/action';
import { asyncUpVoteThreadDetail } from '../states/threadDetail/action';

function UpVoteThreadButton({ threadId, upVotesBy }) {
  const authUser = useSelector((state) => state.authUser || null);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isLikedThread = useMemo(() => upVotesBy?.includes(authUser.id), [upVotesBy, authUser]);

  const onUpVoteHandler = useCallback(
    (event) => {
      event.stopPropagation();

      if (pathname === '/') {
        dispatch(asyncUpVoteThread(threadId));
      } else {
        dispatch(asyncUpVoteThreadDetail(threadId));
      }
    },
    [pathname, dispatch, threadId],
  );

  return (
    <button type="button" title="Up vote" onClick={onUpVoteHandler}>
      <div className="flex items-center">
        {isLikedThread ? (
          <FaRegThumbsUp className="text-green-500 fill-green-500 mr-2" />
        ) : (
          <FaRegThumbsUp className="mr-2" />
        )}
        <span className="mr-2">{upVotesBy?.length}</span>
      </div>
    </button>
  );
}

UpVoteThreadButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  threadId: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  upVotesBy: PropTypes.array,
};

export default UpVoteThreadButton;
