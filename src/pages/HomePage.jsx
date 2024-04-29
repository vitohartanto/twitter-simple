import landscapeBackground from '../nicePageSignIn.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';

import AddThreadButton from '../components/AddThreadButton';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadLists from '../components/ThreadLists';

const HomePage = () => {
  const threads = useSelector((state) => state.threads || []);
  const users = useSelector((state) => state.users || []);
  // const { threads = [], users = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  // useMemo is used here to optimize performance by memoizing the filtered result of the threads array based on the category prop, recalculating it only when necessary
  const filteredThreads = useMemo(() => {
    return threads.filter((thread) => {
      return thread?.category.toLowerCase().includes(category?.toLowerCase());
    });
  }, [threads, category]);

  const threadLists = useMemo(() => {
    return filteredThreads.map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.ownerId),
    }));
  }, [filteredThreads, users]);

  const threadCategory = useMemo(() => {
    return threads.reduce((accumulator, current) => {
      if (!accumulator.find((item) => item.category === current.category)) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
  }, [threads]);

  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[EHdHa^axtWV5xNsAHwc04E99zV[]|TJ-kS4}*tjNd$yR7w3IqV]5?9z=sW=TvtO$~t4I[s-M}Rn"
      />
      <AddThreadButton />
      <NavigationBar />

      <div className="pr-6">
        {/* POPULAR CATEGORY */}

        <div className="mt-8 ml-6">
          <h1 className="mb-2  font-medium text-white text-xl px-4 py-2 inline backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            Popular Category
          </h1>
          <div className="mt-6 flex flex-wrap">
            {threadCategory?.map((thread) => (
              <button
                key={thread.id}
                onClick={() => setCategory(thread.category)}
                className="mr-4 mb-2 text-center inline text-white text-sm px-4 py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
              >
                <span>{`#${thread.category}`}</span>
              </button>
            ))}

            <p className="mr-4 mb-2 text-center inline text-[#191919] text-sm px-4 py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]">
              #document
            </p>
            <p className="mr-4 mb-2 text-center inline text-[#191919] text-sm px-4 py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]">
              #document
            </p>
          </div>
        </div>

        {/* AVAILABLE DISCUSSIONS */}
        <div className="mt-8 ml-6">
          <h1 className="mb-2 font-medium text-white text-xl px-4 py-2 inline backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            Available Discussions
          </h1>
          <ThreadLists threadLists={threadLists} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
