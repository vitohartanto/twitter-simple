import landscapeBackground from '../pageLeaderboardsReal.png';
import ImageBackground from '../components/ImageBackground';
import NavigationBar from '../components/NavigationBar';

const LeaderboardsPage = () => {
  return (
    <div>
      <ImageBackground
        src={landscapeBackground}
        hash="[EHdHa^axtWV5xNsAHwc04E99zV[]|TJ-kS4}*tjNd$yR7w3IqV]5?9z=sW=TvtO$~t4I[s-M}Rn"
      />
      <NavigationBar />
      <div className="mt-8 ml-6 pr-6">
        <h1 className="mb-2 font-medium text-white text-xl px-4 py-2 inline backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
          User Active Leaderboards
        </h1>
        <div className="flex justify-between mt-6 mb-4">
          <h1 className="text-white text-xl font-medium px-4  py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            Users
          </h1>
          <h1 className="text-white text-xl font-medium px-4 py-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            Score
          </h1>
        </div>
        <div>
          <div className="mb-2 flex justify-between p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            <h1 className="text-white">Dimas Saputra</h1>
            <p className="text-white">25</p>
          </div>
          <div className="mb-2 flex justify-between p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            <h1 className="text-white">Dicoding</h1>
            <p className="text-white">21</p>
          </div>
          <div className="mb-2 flex justify-between p-4 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
            <h1 className="text-white">Vito</h1>
            <p className="text-white">19</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardsPage;
