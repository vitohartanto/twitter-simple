import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import {
  asyncCreateCommentThreadDetail,
  asyncSeeThreadDetail,
} from '../states/threadDetail/action';

import UpVoteThreadButton from '../components/UpVoteThreadButton';
import DownVoteThreadButton from '../components/DownVoteThreadButton';
import NeutralizeVoteThreadButton from '../components/NeutralizeVoteThreadButton';
import { postedAt } from '../utils/postedAt';

import CommentLists from '../components/CommentLists';
import landscapeBackground from '../img/nicePageDetails.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';

function DetailPage() {
  const [comment, setComment] = useState('');
  const { threadId } = useParams();
  const threadDetail = useSelector((state) => state.threadDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSeeThreadDetail(threadId));
  }, [dispatch, threadId]);

  const purifiedData = DOMPurify.sanitize(threadDetail?.body);

  const onChangeComment = (event) => {
    const { innerHTML } = event.target;
    setComment(innerHTML);
  };
  const onCreateComment = () => {
    dispatch(asyncCreateCommentThreadDetail(threadId, comment));
    setComment('');
  };
  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[UEX?|rBDNW+PXiuVsa3O=iv$nkC5Ys:wIavvzW?Nxn~o6f6oaj^ROSzbIWBr^nhozbbXRbHRjjF"
      />
      <NavigationBar />
      <div className="px-4 pt-6">
        <Link to="/" className="">
          <p className="text-lg text-white px-4 py-2 inline backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            &lt; Back
          </p>
        </Link>
        <div className="mt-6 p-6 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
          <h1 className="text-white text-4xl mb-3 font-bold">
            {threadDetail?.title}
          </h1>
          <p className="text-white text-lg mb-4">{`#${threadDetail?.category}`}</p>
          <h1 className="text-white text-2xl mb-4">{parse(purifiedData)}</h1>
          <div className="flex flex-wrap items-center mb-8">
            <div className="flex text-white text-2xl mb-2 mr-10">
              <UpVoteThreadButton
                threadId={threadDetail?.id}
                upVotesBy={threadDetail?.upVotesBy}
              />
              <NeutralizeVoteThreadButton
                threadId={threadDetail?.id}
                upVotesBy={threadDetail?.upVotesBy}
                downVotesBy={threadDetail?.downVotesBy}
              />
              <DownVoteThreadButton
                threadId={threadDetail?.id}
                downVotesBy={threadDetail?.downVotesBy}
              />
            </div>
            <div className="flex text-white items-center mb-2">
              <p className="mr-2 text-sm">
                {postedAt(threadDetail?.createdAt)}
              </p>
              <div className="flex items-center">
                <img
                  src={`${threadDetail?.owner?.avatar}`}
                  alt={`${threadDetail?.owner?.name}`}
                  className="rounded-full w-10 h-10 mr-2"
                />
                <p className="text-sm">
                  <span>Created by </span>
                  {threadDetail?.owner?.name}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <p className="text-white text-3xl mt-4 font-bold mb-4">
              Comment This Thread
            </p>

            <div
              data-text="Thread's comment here, with support for rich text formatting such as bold, italic, underline, and more."
              name="body"
              type="text"
              onInput={onChangeComment}
              value={comment}
              contentEditable
              className="p-4 text-base text-[#848d87] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            />
            <button
              onClick={onCreateComment}
              type="submit"
              className="mt-6 text-xl text-[#191919] hover:text-white hover:bg-[rgba(25,25,25,0.90)] hover:border-2 hover:border-white px-4 py-2 font-medium  mb-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]"
            >
              Save Comment
            </button>
          </div>
        </div>
        <div className="mb-8 py-6 px-4 mt-6 text-white backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
          <h1 className="text-white text-2xl font-bold mb-2 ml-4">
            Comments
            {`(${threadDetail?.comments?.length})`}
          </h1>
          {threadDetail?.comments?.length > 0 ? (
            <CommentLists comments={threadDetail?.comments} />
          ) : (
            <p className="ml-4 text-lg my-4">No Comments Yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
