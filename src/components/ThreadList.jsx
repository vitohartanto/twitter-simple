import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { MdSentimentNeutral } from 'react-icons/md';

import { FaRegThumbsUp, FaRegThumbsDown, FaRegComment } from 'react-icons/fa';
import UpVoteThreadButton from './UpVoteThreadButton';
import NeutralizeVoteThreadButton from './NeutralizeVoteThreadButton';
import DownVoteThreadButton from './DownVoteThreadButton';
import { postedAt } from '../utils/postedAt';

const ThreadLists = ({ threadLists }) => {
  //Preventing Cross-Site Scripting using DOMPurify
  const purifiedData = DOMPurify.sanitize(thread?.body);
  return (
    <div className="">
      {threadLists?.map((thread) => (
        <div
          className="mt-8 p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          key={thread.id}
        >
          <Link to={`/threads/%{thread?.id}`}>
            <h1 className="underline text-white text-xl mb-3 font-bold">
              {thread?.title}
            </h1>
          </Link>

          <p>{parse(purifiedData.slice(0, 50))}...</p>
          <div className="flex flex-wrap">
            <div className="flex text-white text-2xl mb-2">
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

              <div className="flex">
                <FaRegComment className="mr-2" />
                <p className="mr-4">{thread?.totalComments}</p>
              </div>
            </div>
            <div className="flex text-white ">
              <p className="mr-2 text-sm">{postedAt(thread?.createdAt)}</p>
              <div>
                <img
                  src={`${thread?.user.avatar}`}
                  alt={`${thread?.user.name}`}
                />
                <p className="text-sm">Created by {thread?.user.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Link to="/threads/:threadId">
        <h1 className="underline text-white text-xl mb-3 font-bold">
          Judul Percakapan
        </h1>
      </Link>
      <p className="text-white text-lg mb-4">Lorem Ipsum Dolor Sit Amet</p>
      <div className="flex flex-wrap">
        <div className="flex text-white text-2xl mb-2">
          <FaRegThumbsUp className="mr-2" />
          <p className="mr-4">1</p>
          <FaRegThumbsDown className="mr-2" />
          <p className="mr-4">1</p>
          <FaRegComment className="mr-2" />
          <p className="mr-4">2</p>
        </div>
        <div className="flex text-white ">
          <p className="mr-2 text-sm">14 minutes ago</p>
          <p className="text-sm">Created by John</p>
        </div>
      </div>
    </div>
  );
};

export default ThreadLists;
