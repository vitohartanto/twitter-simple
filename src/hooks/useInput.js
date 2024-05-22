import { useState } from 'react';

// Custom Hook
const useInput = () => {
  const [value, setValue] = useState('');

  const onChangeValueHandler = (event) => setValue(event.target.value);

  return [value, onChangeValueHandler];
};

export default useInput;
