import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddThreadButton from '../components/AddThreadButton';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadLists from '../components/ThreadLists';
import landscapeBackground from '../img/nicePageSignIn.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';

function HomePage() {
  const threads = useSelector((state) => state.threads || []);
  const users = useSelector((state) => state.users || []);

  const dispatch = useDispatch();

  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  // useMemo is used here to optimize performance by memoizing the filtered result of the threads
  // array based on the category prop, recalculating it only when necessary
  const filteredThreads = useMemo(
    () =>
      threads.filter((thread) =>
        thread?.category.toLowerCase().includes(category?.toLowerCase())
      ),
    [threads, category]
  );

  const threadLists = useMemo(
    () =>
      filteredThreads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
      })),
    [filteredThreads, users]
  );

  const threadCategory = useMemo(
    () =>
      threads.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.category === current.category)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []),
    [threads]
  );
  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[MK-8*5+BQ$k}2tSFdgH{qoGw3W?^Xw@w{J89cs=orwd]$n|%3jFMnXSoxodrrWCxHxZott4WZNZ"
      />
      <AddThreadButton />
      <NavigationBar />

      <div className="pr-6 flex flex-col min-[850px]:flex-row">
        {/* POPULAR CATEGORY */}
        <div className="mt-8 ml-6 grow">
          <h1
            className="
  mb-2
  font-medium
  text-white
  text-xl
  px-4
  py-2
  inline
  backdrop-blur-[2px]
  border-[1px_solid_rgba(255,255,255,0.18)]
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  rounded-[18px]
  bg-[rgba(25,25,25,0.90)]
"
          >
            Popular Category
          </h1>
          <div className="mt-6 flex flex-wrap items-center">
            {threadCategory?.map((thread) => (
              <button
                key={thread.id}
                type="button"
                onClick={() => setCategory(thread.category)}
                className="
                mb-2
                focus:bg-[rgba(255,255,255,0.90)]
                focus:text-[#191919]
                mr-4
                text-center
                inline
                text-white
                text-sm
                px-4
                py-2
                backdrop-blur-[2px]
                border-[1px_solid_rgba(255,255,255,0.18)]
                shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                rounded-[18px]
                bg-[rgba(25,25,25,0.90)]
              "
              >
                <span>{`#${thread.category}`}</span>
              </button>
            ))}
            <button
              onClick={() => setCategory('')}
              type="button"
              className="
    mr-4
    mb-2
    text-center
    inline
    text-[#191919]
    text-sm
    px-4
    py-2
    backdrop-blur-[2px]
    border-[1px_solid_rgba(255,255,255,0.18)]
    shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
    rounded-[18px]
    bg-[rgba(255,255,255,0.90)]
  "
            >
              See All
            </button>
          </div>
        </div>

        {/* AVAILABLE DISCUSSIONS */}
        <div className="mt-8 ml-6 mb-8 grow-[10]">
          <h1
            className="
  mb-2
  font-medium
  text-white
  text-xl
  px-4
  py-2
  inline
  backdrop-blur-[2px]
  border-[1px_solid_rgba(255,255,255,0.18)]
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  rounded-[18px]
  bg-[rgba(25,25,25,0.90)]
"
          >
            Available Discussions
          </h1>
          <ThreadLists threadLists={threadLists} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
