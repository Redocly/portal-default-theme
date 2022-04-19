import React, { SVGProps } from 'react';
import styled from 'styled-components';

import { breakpoints } from '@portal/media-css';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <span data-component-name="Search/SearchIcon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 490 490"
      {...props}
    >
      <path d="M484 455.2L366.2 337.4c29.2-35.6 46.8-81.2 46.8-130.9C413 92.5 320.5 0 206.5 0 92.4 0 0 92.5 0 206.5S92.4 413 206.5 413c49.7 0 95.2-17.5 130.8-46.7L455.1 484c8 8 20.9 8 28.9 0C492 476.1 492 463.1 484 455.2zM206.5 371.9C115.2 371.9 41 297.7 41 206.5S115.2 41 206.5 41C297.7 41 372 115.3 372 206.5S297.7 371.9 206.5 371.9z" />
    </svg>
  </span>
);

export const SearchIcon = styled(Icon)`
  position: absolute;
  cursor: pointer;
  width: 1em;
  height: 1em;
  right: 1em;
  fill: var(--input-text-color);
  z-index: -1;

  ${breakpoints.medium} {
    width: 1.2em;
    height: 1.2em;
  }
`;
