import { FaRegComments } from 'react-icons/fa6';
import { FaTrophy } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="flex justify-around items-center h-20 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] bg-[rgba(25,25,25,0.90)]">
      <Link className="flex flex-col items-center">
        <FaRegComments className="text-white text-3xl" />
        <p className="text-white">Talks</p>
      </Link>
      <Link className="flex flex-col items-center">
        <FaTrophy className="text-white text-3xl" />
        <p className="text-white">Leaderboards</p>
      </Link>
      <button className="flex items-center">
        <PiSignOutBold className="text-white text-3xl mr-2" />
        <p className="text-white">Vito</p>
      </button>
    </nav>
  );
};

export default NavigationBar;
