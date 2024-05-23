/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import './AddThreadButtonInside.css';

function AddThreadButtonInside({ type }) {
  const backgroundColor = {
    Model1: '#FF0000',
    Model2: '#850F8D',
  };

  const textColor = {
    Model1: '#FFE8C5',
    Model2: '#E49BFF',
  };

  const borderRadius = {
    Model1: '18px',
    Model2: '18px',
  };

  const customTop = {
    Model1: '-25%',
    Model2: '-25%',
  };

  const customLeft = {
    Model1: '35%',
    Model2: '35%',
  };
  return (
    <div
      className="relative w-16 h-16  backdrop-blur-[2px]
border-[1px_solid_rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
rounded-full  bg-[rgba(255,255,255,0.90)]"
      style={{
        backgroundColor: backgroundColor[type],
        color: textColor[type],
        borderRadius: borderRadius[type],
      }}
    >
      <p
        className="text-[#191919] text-3xl absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
        style={{ top: customTop[type], left: customLeft[type] }}
      >
        +
      </p>
    </div>
  );
}

AddThreadButtonInside.propTypes = {
  type: PropTypes.string,
};

export default AddThreadButtonInside;
