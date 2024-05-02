import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncSeeLeaderboards } from '../states/leaderboards/action';
import landscapeBackground from '../img/nicePageLeaderboards.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';

function LeaderboardsPage() {
  const leaderboards = useSelector((state) => state.leaderboards || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSeeLeaderboards());
  }, [dispatch]);

  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[HD1_gMJ01yWL0RRM1$}NXIcaR-9_,noFrk.5PxGrdNxVycBx?s:xvRPr?xCJ*ahkEWA+ia{XNob"
      />
      <NavigationBar />
      <div className="mt-8 ml-6 pr-6">
        <h1 className="
        b-2
        font-medium
        text-white
        text-xl
        px-4 py-2
        inline backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        >
          User Active Leaderboards
        </h1>
        <div className="flex justify-between mt-6 mb-4">
          <h1 className="text-white text-xl font-medium px-4  py-2
          backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          >
            Users
          </h1>
          <h1 className="text-white text-xl font-medium px-4 py-2
          backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          >
            Score
          </h1>
        </div>
        <div className="mb-8">
          {leaderboards.map((leaderboard) => (
            <div
              key={leaderboard.user.id}
              className="mb-2 flex items-center justify-between
              p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
              shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            >
              <div className="flex items-center">
                <img
                  src={leaderboard.user.avatar}
                  alt={`user-${leaderboard.user.name}`}
                  className="rounded-full w-10 h-10 mr-2"
                />
                <h1 className="text-white text-lg">{leaderboard.user.name}</h1>
              </div>
              <p className="text-white text-lg">{leaderboard.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardsPage;
