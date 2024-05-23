/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import './AvailableDiscussions.css';

function AvailableDiscussions({ content, type }) {
  const backgroundColor = {
    brown: '#6F4E37',
    blue: '#121481',
  };

  const textColor = {
    brown: '#FED8B1',
    blue: '#FFEAE3',
  };
  return (
    <h1
      className="
      mb-2
font-medium
text-xl
text-white
px-4
py-2
inline
backdrop-blur-[2px]
border-[1px_solid_rgba(255,255,255,0.18)]
shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
rounded-[18px]

bg-[rgba(25,25,25,0.90)]
"
      style={{ backgroundColor: backgroundColor[type], color: textColor[type] }}
    >
      Available Discussions {content}
    </h1>
  );
}

AvailableDiscussions.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};

AvailableDiscussions.defaultProps = {
  content: 'for StoryBook',
  type: 'brown',
};

export default AvailableDiscussions;
