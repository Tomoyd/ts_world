import React, { useEffect, useRef } from 'react';

const LazyLoadContainer = (children, onload) => {
  const currentRef = useRef();
  useEffect(() => {
    function lazyLoad(intersectionOptions) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          if (onload) {
            onload();
          }
        }
      }, intersectionOptions);
      if (currentRef.current) {
        observer.observe(currentRef.current);
      }
    }
    lazyLoad();
    return () => {
      currentRef;
    };
  }, [currentRef.current]);

  return <div ref={currentRef}>{children}</div>;
};
export default LazyLoadContainer;
