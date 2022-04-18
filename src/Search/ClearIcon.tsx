import React, { SVGProps } from 'react';
import styled from 'styled-components';

import { breakpoints } from '@portal/media-css';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0"
    y="0"
    viewBox="0 0 298.7 298.7"
    {...props}
  >
    <polygon points="298.7 30.2 268.5 0 149.3 119.1 30.2 0 0 30.2 119.1 149.3 0 268.5 30.2 298.7 149.3 179.5 268.5 298.7 298.7 268.5 179.5 149.3 " />
  </svg>
);

export const ClearIcon = styled(Icon)`
  position: absolute;
  cursor: pointer;
  width: 0.5em;
  height: 0.5em;
  right: 1.2em;
  fill: var(--input-text-color);

  ${breakpoints.medium} {
    width: 0.625em;
    height: 0.625em;
  }
`;
