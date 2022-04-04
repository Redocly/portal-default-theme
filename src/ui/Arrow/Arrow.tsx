import React from '@portal/react';
import styled from '@portal/styled-components';

export interface ArrowProps {
  direction?: string;
}

function directionToTransform({ direction }: ArrowProps) {
  switch (direction) {
    case 'up':
      return 180;
    case 'right':
      return -90;
    case 'left':
      return 90;
    default:
      return 0;
  }
}

const Icon = ({ className }: React.HTMLProps<HTMLElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 5" className={className}>
    <path d="M3.5 2.51L5.806.205a.7.7 0 01.99.99l-2.8 2.8a.698.698 0 01-.99 0l-2.8-2.8a.7.7 0 11.99-.99L3.5 2.51z" />
  </svg>
);

export const Arrow = styled(Icon)`
  width: var(--sidebar-chevron-size);
  height: var(--sidebar-chevron-size);
  fill: var(--sidebar-chevron-color);
  transform: rotate(${directionToTransform}deg);

  vertical-align: middle;
`;
