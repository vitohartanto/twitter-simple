import landscapeBackground from '../pageHomeFix.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';

const HomePage = () => {
  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[EHdHa^axtWV5xNsAHwc04E99zV[]|TJ-kS4}*tjNd$yR7w3IqV]5?9z=sW=TvtO$~t4I[s-M}Rn"
      />
      <NavigationBar />

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
      </div>
    </div>
  );
};

export default HomePage;
