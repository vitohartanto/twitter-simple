import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { asyncRegisterUser } from '../states/users/action';
import useInput from '../hooks/useInput';
import landscapeBackground from '../img/nicePageRegister.png';
import ImageBackground from '../components/ImageBackground';
import threadNestLogo from '../img/threadNestLogo.png';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegisterHandler = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  const [name, onChangeNameHandler] = useInput('');
  const [email, onChangeEmailHandler] = useInput('');
  const [password, onChangePasswordHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      toast.error('Please complete all inputs');
      return;
    }

    onRegisterHandler({ name, email, password });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <ImageBackground
        src={landscapeBackground}
        hash="[yB%A;Q:ixWCyGaesmWCaJkqxtfkffo{oyj?RqjYoJkBXNjFj[kBaKW;bHoLjKWCaxafkUjbWEfk"
      />
      <div className="p-4 absolute top-6 left-6 w-[120px] lg:w-[160px] backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
        <img src={threadNestLogo} alt="Thread Nest Logo" />
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="py-4 px-6 sm:px-8 sm:py-6 w-[320px] sm:w-[480px] backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
      >
        <h1 className="text-3xl text-white font-bold mb-4 mt-2">Register</h1>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={onChangeNameHandler}
            className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmailHandler}
            className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePasswordHandler}
            className="p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          />
          <button
            type="submit"
            className="text-xl text-[#191919] hover:text-white hover:bg-[rgba(25,25,25,0.90)] hover:border-2 hover:border-white px-4 py-2 font-medium mt-4 mb-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]"
          >
            Register
          </button>
        </div>
        <div className="text-white text-sm mt-2  text-center">
          <p className="inline">Already registered? </p>
          <Link to="/" className="inline text-blue-500">
            Sign in here!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
