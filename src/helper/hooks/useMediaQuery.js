import { useState, useEffect } from 'react';

const useMediaQuery = (breakpoint) => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (typeof breakpoint === 'number') {
    return [width >= breakpoint, width];
  }

  return [width];
};

export default useMediaQuery;
