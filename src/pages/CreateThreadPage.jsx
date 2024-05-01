import landscapeBackground from '../img/nicePageAddTalk.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncCreateThread } from '../states/threads/action';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateThreadPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <div className="mt-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <BackButton />
        <form
          onSubmit={onSubmitHandler}
          className=" py-4 px-6 sm:px-8 sm:py-6 w-[320px] sm:w-[480px] backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        >
          <h1 className="text-3xl text-white font-bold mb-4 mt-2">
            Create Thread
          </h1>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Thread's Title"
              value={title}
              onChange={onChangeInputTitle}
              className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            />
            <input
              type="text"
              placeholder="Thread's Category"
              value={category}
              onChange={onChangeInputCategory}
              className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            />
            <div
              data-text="Thread's body here, with support for rich text formatting such as bold, italic, underline, and more."
              name="body"
              type="text"
              onInput={onChangeInputBody}
              value={body}
              contentEditable
              className="p-4 text-base text-[#848d87] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            />
            <button className="text-xl text-[#191919] hover:text-white hover:bg-[rgba(25,25,25,0.90)] hover:border-2 hover:border-white px-4 py-2 font-medium mt-4 mb-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]">
              Add Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateThreadPage;
