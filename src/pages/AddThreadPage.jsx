import landscapeBackground from '../nicePageAddTalk.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';

const AddThreadPage = () => {
  return (
    <div className="">
      <ImageBackground
        src={landscapeBackground}
        hash="[fHJ8m}qJ7I=afR+fks.13EjxFockTocoLWCs,kAWVnkWDWDfibabFfioLf7oKj[WVayR+WVoKoe"
      />
      <NavigationBar />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <BackButton />
        <form
          action=""
          className=" py-4 px-6 sm:px-8 sm:py-6 w-[320px] sm:w-[480px] backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        >
          <h1 className="text-3xl text-white font-bold mb-4 mt-2">
            Add New Talk
          </h1>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Title"
              className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            />
            <input
              type="text"
              placeholder="Category"
              className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
            />
            <textarea
              placeholder="Spread your talks"
              className="p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
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

export default AddThreadPage;
