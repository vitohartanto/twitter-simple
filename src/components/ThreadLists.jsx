import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import { FaRegComment } from 'react-icons/fa';
import UpVoteThreadButton from './UpVoteThreadButton';
import NeutralizeVoteThreadButton from './NeutralizeVoteThreadButton';
import DownVoteThreadButton from './DownVoteThreadButton';
import { postedAt } from '../utils/postedAt';

function ThreadLists({ threadLists = [] }) {
  return (
    <div className="">
      {threadLists?.map((thread) => {
        // Preventing Cross-Site Scripting using DOMPurify
        const purifiedData = DOMPurify.sanitize(thread?.body);
        return (
          <div
            className="mt-8 p-6 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            key={thread.id}
          >
            <Link to={`/threads/${thread?.id}`}>
              <h1 className="underline text-white text-xl mb-3 font-bold">
                {thread?.title}
              </h1>
            </Link>

            <h1 className="text-white mb-4">
              {parse(purifiedData.slice(0, 120))}
              <span>...</span>
            </h1>
            <div className="flex flex-wrap">
              <div className="flex text-white text-2xl mb-2 mr-10">
                <UpVoteThreadButton
                  threadId={thread?.id}
                  upVotesBy={thread?.upVotesBy}
                />
                <NeutralizeVoteThreadButton
                  threadId={thread?.id}
                  upVotesBy={thread?.upVotesBy}
                  downVotesBy={thread?.downVotesBy}
                />
                <DownVoteThreadButton
                  threadId={thread?.id}
                  downVotesBy={thread?.downVotesBy}
                />

                <div className="flex items-center">
                  <FaRegComment className="mr-2" />
                  <p className="mr-4">{thread?.totalComments}</p>
                </div>
              </div>
              <div className="flex text-white items-center mb-2">
                <p className="mr-2 text-sm">{postedAt(thread?.createdAt)}</p>
                <div className="flex items-center">
                  <img
                    src={`${thread?.user.avatar}`}
                    alt={`${thread?.user.name}`}
                    className="rounded-full w-10 h-10 mr-2"
                  />
                  <p className="text-sm">
                    <span>Created by </span>
                    {thread?.user.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ThreadLists.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  threadLists: PropTypes.array,
};

export default ThreadLists;
