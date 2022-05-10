import React from 'react';
import throttle from 'lodash.throttle';

import { useNavbarHeight } from '@theme/hooks/useNavbarHeight';

export function useActiveSectionId(location) {
  const [itemId, setItemId] = React.useState<string>('');
  const navbarHeight = useNavbarHeight(location);
  const scrollListener = React.useCallback(
    throttle(() => {
      const sections = document.querySelectorAll('[data-section-id]');
      if (sections.length < 2) {
        setItemId('');
        return;
      }
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.y < navbarHeight + 5 && rect.bottom > navbarHeight + 5) {
          // use small padding 5px to account for rounding
          setItemId(section.getAttribute('data-section-id') || '');
          return;
        }
      }
      setItemId((sections[0] && sections[0].getAttribute('data-section-id')) || '');
    }, 150),
    [location, navbarHeight],
  );

  React.useEffect(() => {
    window.addEventListener('scroll', scrollListener, { capture: false });
    setTimeout(() => {
      scrollListener();
    }, 0);

    return () => {
      window.removeEventListener('scroll', scrollListener); // TODO: add throttle
    };
  }, [location, navbarHeight]);

  return itemId;
}
