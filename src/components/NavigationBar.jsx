import { FaRegComments } from 'react-icons/fa6';
import { FaTrophy } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';

const NavigationBar = () => {
  const authUser = useSelector((state) => state.authUser || null);
  const dispatch = useDispatch();

  const onSignOutHandler = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <nav className="flex justify-around items-center h-20 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] bg-[rgba(25,25,25,0.90)]">
      <Link className="flex flex-col items-center" to="/">
        <FaRegComments className="text-white text-3xl" />
        <p className="text-white">Threads</p>
      </Link>
      <Link className="flex flex-col items-center" to="/leaderboards">
        <FaTrophy className="text-white text-3xl" />
        <p className="text-white">Leaderboards</p>
      </Link>
      <button className="flex items-center" onClick={onSignOutHandler}>
        <PiSignOutBold className="text-white text-3xl mr-2" />
        <p className="text-white">{authUser?.name}</p>
      </button>
    </nav>
  );
};

export default NavigationBar;
