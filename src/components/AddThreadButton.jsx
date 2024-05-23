/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

import AddThreadButtonInside from './AddThreadButtonInside';

function AddThreadButton() {
  return (
    <Link
      to="/threads/newThread"
      className="z-50 fixed bottom-6 right-6"
      title="Create New Thread"
    >
      <AddThreadButtonInside />
    </Link>
  );
}

export default AddThreadButton;
