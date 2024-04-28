import { Link } from 'react-router-dom';

const AddThreadButton = () => {
  return (
    <Link to="/threads/newThread" className="fixed bottom-6 right-6">
      <div className="relative w-16 h-16  backdrop-blur-[2px] border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-full bg-[rgba(25,25,25,0.90)]">
        <p className="text-white text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          +
        </p>
      </div>
    </Link>
  );
};

export default AddThreadButton;
