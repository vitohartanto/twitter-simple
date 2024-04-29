import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncNeutralizeVoteThread } from '../states/threads/action';
import { asyncNeutralizeVoteThreadDetail } from '../states/threadDetail/action';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdSentimentNeutral } from 'react-icons/md';

const NeutralizeVoteThreadButton = ({ threadId, upVotesBy, downVotesBy }) => {
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
    [pathname, dispatch, threadId]
  );

  return (
    <button title="Up vote" onClick={onNeutralizeVoteHandler}>
      <div className="flex items-center">
        {isNeutralizedThread ? (
          <MdSentimentNeutral className="text-blue-500 fill-blue-500" />
        ) : (
          <MdSentimentNeutral className="" />
        )}
        <span>{upVotesBy?.length}</span>
      </div>
    </button>
  );
};

export default NeutralizeVoteThreadButton;
