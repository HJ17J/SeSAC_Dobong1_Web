import { useState } from 'react';

export default function useToggle(initValue = false) {
  const [value, setValue] = useState(initValue);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}
