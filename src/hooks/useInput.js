import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const onChangeValueHandler = (event) => setValue(event.target.value);

  return [value, onChangeValueHandler];
};

export default useInput;
