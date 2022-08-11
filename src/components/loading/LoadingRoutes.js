import React, { useEffect } from 'react';

const LoadingRoutes = () => {
  useEffect(() => {
    const contentArea = document.querySelector('#loadingRoutes');
    const htmlTag = document.documentElement;
    if (!contentArea) {
      htmlTag.setAttribute('data-show', 'false');
    } else {
      contentArea.style = 'opacity:0';
    }
    document.body.classList.add('spinner');
    return () => {
      setTimeout(() => {
        if (!contentArea) {
          htmlTag.setAttribute('data-show', 'true');
        } else {
          contentArea.style = 'opacity:1';
        }
        document.body.classList.remove('spinner');
      }, 30);
    };
  }, []);

  return <></>;
};

export default LoadingRoutes;
