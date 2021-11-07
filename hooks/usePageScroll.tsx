import * as React from 'react';

const usePageScroll = () => {
  const [pageScrollX, setPageScrollX] = React.useState(0);

  React.useEffect(() => {
    const listenToScroll = () => {
      const scrollX = document.body.scrollTop || document.documentElement.scrollTop;
      setPageScrollX(scrollX);
    };

    window.addEventListener('scroll', listenToScroll)
  }, [setPageScrollX]);

  return pageScrollX;
};

export default usePageScroll;