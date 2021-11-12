import * as React from 'react';

const defaultSize = {
  width: 0,
  height: 0
};

const usePageResize = () => {
  const [size, setSize] = React.useState(defaultSize);

  React.useEffect(() => {
    const listenToResize = () => {
      const { width, height } = window.screen;
      setSize({
        width,
        height
      });
    };

    window.addEventListener('resize', listenToResize)
    listenToResize();
  }, [setSize]);

  return size;
}; 

export default usePageResize;