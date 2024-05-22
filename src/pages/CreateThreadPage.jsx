import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { asyncCreateThread } from '../states/threads/action';
import landscapeBackground from '../img/nicePageAddTalk.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import CreateThread from '../components/CreateThread';

function CreateThreadPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line no-shadow
  const onCreateThread = ({ title, category, body }) => {
    dispatch(asyncCreateThread({ title, category, body }));
  };

  const onChangeInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeInputCategory = (event) => {
    setCategory(event.target.value);
  };

  const onChangeInputBody = (event) => {
    const { innerHTML } = event.target;
    setBody(innerHTML);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!title || !category || !body) {
      toast.error('Please complete all three inputs');
      return;
    }

    onCreateThread({ title, category, body });

    navigate('/');

    setTitle('');
    setCategory('');
    setBody('');
  };

  return (
    <div className="">
      <ImageBackground
        src={landscapeBackground}
        hash="[gJlDuT_MeWU%jbxoHoI5YaQxZaMO8RPs:kBIqR6j?XRx[nhRkbIbJn%kVfkM~fhofWCR*R*W;e."
      />
      <NavigationBar />
      <div
        className="mt-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      flex flex-col justify-center items-center"
      >
        <BackButton />
        <CreateThread
          title={title}
          body={body}
          category={category}
          onSubmitHandler={onSubmitHandler}
          onChangeInputBody={onChangeInputBody}
          onChangeInputTitle={onChangeInputTitle}
          onChangeInputCategory={onChangeInputCategory}
        />
      </div>
    </div>
  );
}

export default CreateThreadPage;
