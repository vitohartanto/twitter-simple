import React from 'react';
import PropTypes from 'prop-types';

function CreateThread({
  title,
  body,
  category,
  onSubmitHandler,
  onChangeInputBody,
  onChangeInputTitle,
  onChangeInputCategory,
}) {
  return (
    <form
      onSubmit={onSubmitHandler}
      className=" py-4 px-6 sm:px-8 sm:py-6 w-[320px] sm:w-[480px] backdrop-blur-[2px]
  border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  rounded-[18px] bg-[rgba(25,25,25,0.90)]"
    >
      <h1 className="text-3xl text-white font-bold mb-4 mt-2">Create Thread</h1>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Thread's Title"
          value={title}
          onChange={onChangeInputTitle}
          className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px]
      border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        />
        <input
          type="text"
          placeholder="Thread's Category"
          value={category}
          onChange={onChangeInputCategory}
          className="mb-4 p-4 text-base text-[white] font-medium backdrop-blur-[2px]
      border-2 border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        />
        <div
          data-text="Thread's body here, with support for rich text formatting such as bold, italic, underline, and more."
          name="body"
          type="text"
          onInput={onChangeInputBody}
          value={body}
          contentEditable
          className="p-4 text-base text-[#848d87] font-medium backdrop-blur-[2px] border-2
      border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[18px] bg-[rgba(25,25,25,0.90)]"
        />
        <button
          type="submit"
          className="text-xl text-[#191919] hover:text-white hover:bg-[rgba(25,25,25,0.90)]
      hover:border-2 hover:border-white px-4 py-2 font-medium mt-4 mb-2 backdrop-blur-[2px]
      border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      rounded-[18px] bg-[rgba(255,255,255,0.90)]"
        >
          Add Talk
        </button>
      </div>
    </form>
  );
}

CreateThread.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  onChangeInputBody: PropTypes.func.isRequired,
  onChangeInputTitle: PropTypes.func.isRequired,
  onChangeInputCategory: PropTypes.func.isRequired,
};

export default CreateThread;
