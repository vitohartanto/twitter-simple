import React from 'react';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link
      to="/"
      className="mb-2 lg:mb-6 px-4 py-2 text-lg self-start backdrop-blur-[2px]
      border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      rounded-[18px] bg-[rgba(25,25,25,0.90)]"
    >
      <div className="flex text-white">
        <p className="mr-4">&lt;</p>
        <p>Back</p>
      </div>
    </Link>
  );
}

export default BackButton;
