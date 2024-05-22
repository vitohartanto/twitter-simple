import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  return [value];
};

export default useInput;
