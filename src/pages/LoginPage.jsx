import React from 'react';

import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { asyncSetAuthUser } from '../states/authUser/action';
import useInput from '../hooks/useInput';
import landscapeBackground from '../img/nicePageSignIn.png';
import ImageBackground from '../components/ImageBackground';
import threadNestLogo from '../img/threadNestLogo.png';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();

  const onLoginHandler = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  const [email, onChangeEmailHandler] = useInput('');
  const [password, onChangePasswordHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Please complete both inputs');
      return;
    }

    onLoginHandler({ email, password });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <ImageBackground
        src={landscapeBackground}
        hash="[MK^pW5+BQ$k}2tSFegH{qoGw3W?}#w@w{J89cs=orwd]$n|%3jFMnXSoxodrrWCxHxZott4WGNZ"
      />
      <div
        className="p-4 absolute top-6 left-6 w-[160px]
      backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)]
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
      >
        <img src={threadNestLogo} alt="Thread Nest Logo" />
      </div>
      <LoginInput
        email={email}
        password={password}
        onSubmitHandler={onSubmitHandler}
        onChangeEmailHandler={onChangeEmailHandler}
        onChangePasswordHandler={onChangePasswordHandler}
      />
    </div>
  );
}

export default LoginPage;
