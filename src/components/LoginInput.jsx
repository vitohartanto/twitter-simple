import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onChangeEmailHandler] = useInput('');
  const [password, onChangePasswordHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Please complete both inputs');
      return;
    }

    login({ email, password });
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="py-4 px-6 sm:px-8 sm:py-6 w-[320px] sm:w-[480px]
  backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
    >
      <h1 className="text-3xl text-white font-bold mb-4 mt-2">Sign In</h1>
      <h2 className="text-xl text-white font-medium mb-4">
        Join the conversation! Share your story!
      </h2>
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmailHandler}
          className="mb-4 p-4 text-base text-[white] font-medium
      backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePasswordHandler}
          className="p-4 text-base text-[white] font-medium backdrop-blur-[2px]
      border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        />
        <button
          type="submit"
          title="Login"
          className="text-xl text-[#191919] hover:text-white
      hover:bg-[rgba(25,25,25,0.90)] hover:border-2 hover:border-white
      px-4 py-2 font-medium mt-4 mb-2 backdrop-blur-[2px]
      border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      rounded-[18px] bg-[rgba(255,255,255,0.90)]"
        >
          Sign In
        </button>
      </div>
      <div className="text-white text-sm mt-2 text-center self-center">
        <p className="inline">Haven&apos;t registered yet? </p>
        <Link to="/register" className="inline text-blue-500">
          Register here!
        </Link>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
