import landscapeBackground from '../pageSignIn.png';
import ImageBackground from '../components/ImageBackground';
import talkNestLogo from '../talkNestLogo.png';

// import ImageComponent from '../components/ImageComponent';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <ImageBackground
        src={landscapeBackground}
        hash="[NHmciD+EeM}%%NGr=WU0P-nw|X74.%1ogs:NWI@xZsp-ONHNbjbWFs+NHNtRoocsmX5$ijbkUsB"
      />
      <div className="p-4 absolute top-6 left-6 w-[160px] backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]">
        <img src={talkNestLogo} alt="" />
      </div>
      <form
        action=""
        className="py-4 px-6 sm:px-8 sm:py-6 w-[320px] sm:w-[480px] backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
      >
        <h1 className="text-3xl text-white font-bold mb-4 mt-2">Sign In</h1>
        <h2 className="text-xl text-white font-medium mb-4">
          Join the conversation! Share your story!
        </h2>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 text-base text-[white] font-medium backdrop-blur-[2px] border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
          />
          <button className="text-xl text-[#191919] hover:text-white hover:bg-[rgba(25,25,25,0.90)] hover:border-2 hover:border-white px-4 py-2 font-medium mt-4 mb-2 backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(255,255,255,0.90)]">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
