import React from 'react';
import { Link } from 'react-router-dom';
import landscapeBackground from '../img/nicePageLeaderboards.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';

function NotFound404Page() {
  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[HD1_gMJ01yWL0RRM1$}NXIcaR-9_,noFrk.5PxGrdNxVycBx?s:xvRPr?xCJ*ahkEWA+ia{XNob"
      />
      <NavigationBar />
      <div className="p-8 gap-8 flex flex-col items-center
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
      >
        <h1 className="text-5xl font-bold text-white">404</h1>
        <h1 className="text-5xl font-bold text-white text-center">
          PAGE NOT FOUND
        </h1>
        <h1 className="text-3xl font-semibold text-white text-center">
          Back to
          {' '}
          <Link to="/" className="text-3xl font-semibold text-blue-500">
            Home
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default NotFound404Page;
