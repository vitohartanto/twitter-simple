import landscapeBackground from '../nicePageSignIn.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';
import { FaRegThumbsUp, FaRegThumbsDown, FaRegComment } from 'react-icons/fa';
import AddThreadButton from '../components/AddThreadButton';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[EHdHa^axtWV5xNsAHwc04E99zV[]|TJ-kS4}*tjNd$yR7w3IqV]5?9z=sW=TvtO$~t4I[s-M}Rn"
      />
      <AddThreadButton />
      <NavigationBar />

      <div className="pr-6">
        {/* POPULAR CATEGORY */}

        <div className="mt-8 ml-6">
          <h1 className="mb-2  font-medium text-white text-xl px-4 py-2 inline backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            Popular Category
          </h1>
          <div className="mt-6 flex flex-wrap">
            <p className="mr-4 mb-2 text-center inline text-white text-sm px-4 py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
              #redux
            </p>
            <p className="mr-4 mb-2 text-center inline text-[#191919] text-sm px-4 py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]">
              #document
            </p>
            <p className="mr-4 mb-2 text-center inline text-[#191919] text-sm px-4 py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]">
              #document
            </p>
          </div>
        </div>

        {/* AVAILABLE DISCUSSIONS */}
        <div className="mt-8 ml-6">
          <h1 className="mb-2  font-medium text-white text-xl px-4 py-2 inline backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            Available Discussions
          </h1>
          <div className="mt-8 p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            <Link to="/threads/:threadId">
              <h1 className="underline text-white text-xl mb-3 font-bold">
                Judul Percakapan
              </h1>
            </Link>
            <p className="text-white text-lg mb-4">
              Lorem Ipsum Dolor Sit Amet
            </p>
            <div className="flex flex-wrap">
              <div className="flex text-white text-2xl mb-2">
                <FaRegThumbsUp className="mr-2" />
                <p className="mr-4">1</p>
                <FaRegThumbsDown className="mr-2" />
                <p className="mr-4">1</p>
                <FaRegComment className="mr-2" />
                <p className="mr-4">2</p>
              </div>
              <div className="flex text-white ">
                <p className="mr-2 text-sm">14 minutes ago</p>
                <p className="text-sm">Created by John</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
