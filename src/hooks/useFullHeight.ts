import React from 'react';
import throttle from 'lodash.throttle';

export function useFullHeight(element: React.MutableRefObject<HTMLElement | null>) {
  const handler = React.useCallback(() => {
    if (!element.current) {
      return;
    }

    const footer = document.querySelector('footer');
    if (!footer) {
      return;
    }

    const elementTop = element.current.getBoundingClientRect().top;
    const footerOffset = footer.offsetTop - window.scrollY - elementTop;
    if (footerOffset > window.innerHeight) {
      element.current.style.maxHeight = `${window.innerHeight - elementTop}px`;
    } else {
      element.current.style.maxHeight = `${footerOffset}px`;
    }
  }, [element]);

  const throttledHandler = React.useCallback(throttle(handler, 150), [handler]);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !element.current) {
      return () => {
        // nope
      };
    }

    window.addEventListener('scroll', throttledHandler, {
      capture: false,
    });
    window.addEventListener('resize', throttledHandler, {
      capture: false,
    });

    handler();

    return () => {
      window.removeEventListener('scroll', throttledHandler);
      window.removeEventListener('resize', throttledHandler);
    };
  }, [throttledHandler, element]);
}
