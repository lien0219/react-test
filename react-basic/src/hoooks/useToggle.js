import { useState } from "react";

function useToggle() {
  const [value, setValue] = useState(true);

  const toggle = () => setValue(!value);

  return {
    value,
    toggle,
  };
}

export default useToggle;
