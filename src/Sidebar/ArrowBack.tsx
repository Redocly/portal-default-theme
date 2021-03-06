import React from 'react';
import styled from 'styled-components';

const Arrow = ({ className }: React.HTMLProps<HTMLElement>) => (
  <span data-component-name="Sidebar/ArrowBack">
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 10"
      width="12px"
      height="10px"
      className={className}
    >
      <path d="M2.414 5l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L2.414 5z" />
      <path d="M2 5a1 1 0 011-1h8a1 1 0 110 2H3a1 1 0 01-1-1z" />
    </svg>
  </span>
);

export const ArrowBack = styled(Arrow)`
  fill: var(--sidebar-chevron-color);
`;
