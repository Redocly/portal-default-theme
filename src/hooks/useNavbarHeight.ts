import React from 'react';
import type { Location } from 'history';

import { getNavbarElement } from '@theme/utils/getNavbarElement';

export function useNavbarHeight(location: Location) {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const navbar = getNavbarElement();
    setHeight((navbar && navbar.clientHeight) || 0);
  }, [location.pathname]);

  React.useEffect(() => {
    window.requestAnimationFrame(() => {
      const navbar = getNavbarElement();
      setHeight((navbar && navbar.clientHeight) || 0);
    });
  }, []);

  return height;
}
