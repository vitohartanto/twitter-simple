import landscapeBackground from '../nicePageDetails.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';
import { FaRegThumbsUp, FaRegThumbsDown, FaRegComment } from 'react-icons/fa';
import BackButton from '../components/BackButton';

const DetailPage = () => {
  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[fHJ8m}qJ7I=afR+fks.13EjxFockTocoLWCs,kAWVnkWDWDfibabFfioLf7oKj[WVayR+WVoKoe"
      />
      <NavigationBar />
      <div className="px-4 pt-6">
        <BackButton />
        <div className="mt-2 p-6 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
          <h1 className="text-white text-4xl mb-3 font-bold">
            Judul Percakapan
          </h1>
          <p className="text-white text-lg mb-4">#document</p>
          <p className="text-white text-2xl mb-4">Lorem Ipsum Dolor Sit Amet</p>
          <div className="flex flex-wrap items-center">
            <div className="flex text-white text-2xl mb-2">
              <FaRegThumbsUp className="mr-2" />
              <p className="mr-4">1</p>
              <FaRegThumbsDown className="mr-2" />
              <p className="mr-4">1</p>
              <FaRegComment className="mr-2" />
              <p className="mr-4">2</p>
            </div>
            <div className="flex text-white mb-2">
              <p className="mr-2 text-sm">14 minutes ago</p>
              <p className="text-sm">Created by John</p>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <p className="text-white text-3xl mt-4 font-bold mb-4">
              Comment This Thread
            </p>
            <textarea
              name=""
              id=""
              placeholder="Comment your thoughts here"
              className="p-4 text-white backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            ></textarea>
            <button className="mt-6 text-xl text-[#191919] hover:text-white hover:bg-[rgba(25,25,25,0.90)] hover:border-2 hover:border-white px-4 py-2 font-medium  mb-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]">
              Save Comment
            </button>
          </div>
        </div>
        <div className="mb-6 py-6 px-4 mt-6 text-white backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
          <h1 className="text-white text-2xl font-bold mb-2 ml-4">
            Comments (2)
          </h1>
          <div className="p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            <div className="flex justify-between mb-2">
              <p>Tovi</p>
              <p>2 minutes ago</p>
            </div>
            <p className="mb-4">Ini adalah comment</p>
            <div className="flex text-white text-xl mb-2">
              <FaRegThumbsUp className="mr-2" />
              <p className="mr-4">1</p>
              <FaRegThumbsDown className="mr-2" />
              <p className="mr-4">1</p>
            </div>
          </div>
          <div className="p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            <div className="flex justify-between mb-2">
              <p>Tovi</p>
              <p>2 minutes ago</p>
            </div>
            <p className="mb-4">Ini adalah comment</p>
            <div className="flex text-white text-xl mb-2">
              <FaRegThumbsUp className="mr-2" />
              <p className="mr-4">1</p>
              <FaRegThumbsDown className="mr-2" />
              <p className="mr-4">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
