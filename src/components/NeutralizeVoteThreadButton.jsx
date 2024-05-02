import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdSentimentNeutral } from 'react-icons/md';
import { asyncNeutralizeVoteThread } from '../states/threads/action';
import { asyncNeutralizeVoteThreadDetail } from '../states/threadDetail/action';

function NeutralizeVoteThreadButton({ threadId, upVotesBy, downVotesBy }) {
  // const { authUser = null } = useSelector((states) => states);
  const authUser = useSelector((state) => state.authUser || null);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isNeutralizedThread = useMemo(() => {
    const isVoted = upVotesBy?.includes(authUser.id);
    const isUnvoted = downVotesBy?.includes(authUser.id);

    return !isVoted && !isUnvoted;
  }, [upVotesBy, downVotesBy, authUser]);

  const onNeutralizeVoteHandler = useCallback(
    (event) => {
      event.stopPropagation();

      if (pathname === '/') {
        dispatch(asyncNeutralizeVoteThread(threadId));
      } else {
        dispatch(asyncNeutralizeVoteThreadDetail(threadId));
      }
    },
    [pathname, dispatch, threadId],
  );

  return (
    <button type="button" title="Up vote" onClick={onNeutralizeVoteHandler}>
      <div className="flex items-center">
        {isNeutralizedThread ? (
          <MdSentimentNeutral className="text-blue-500 fill-blue-500 mr-2" />
        ) : (
          <MdSentimentNeutral className="mr-2" />
        )}
      </div>
    </button>
  );
}

NeutralizeVoteThreadButton.propTypes = {
  threadId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  upVotesBy: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  downVotesBy: PropTypes.array,
};

NeutralizeVoteThreadButton.defaultProps = {
  upVotesBy: null,
  downVotesBy: null,
};

export default NeutralizeVoteThreadButton;
