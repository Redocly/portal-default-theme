import React from 'react';
import styled from 'styled-components';

interface IconProps extends React.HTMLProps<HTMLElement> {
  type: 'warning' | 'success' | 'danger' | 'attention' | 'info';
}

function Icon({ type, className }: IconProps) {
  switch (type) {
    case 'warning':
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0"
          y="0"
          viewBox="0 0 500.6 500.6"
          enableBackground="new 0 0 500.6 500.6"
        >
          <path d="M250.3 15.1c-132.5 0-239.8 107.2-239.8 239.8 0 132.5 107.2 239.8 239.8 239.8 132.5 0 239.8-107.2 239.8-239.8C490.1 122.3 382.8 15.1 250.3 15.1zM250.3 457.1C138.5 457.1 48 366.7 48 254.8 48 143 138.5 52.5 250.3 52.5c111.8 0 202.3 90.5 202.3 202.3C452.6 366.7 362.1 457.1 250.3 457.1z" />
          <path d="M250.3 135.8c-10.3 0-18.7 8.4-18.7 18.7v120.6c0 10.3 8.4 18.7 18.7 18.7s18.7-8.4 18.7-18.7V154.5C269 144.2 260.7 135.8 250.3 135.8z" />
          <circle cx="250.3" cy="342.1" r="25.3" />
        </svg>
      );
    case 'success':
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0"
          y="0"
          viewBox="0 0 500.6 500.6"
          enableBackground="new 0 0 500.6 500.6"
        >
          <path d="M250.3 490.1c132.5 0 239.8-107.2 239.8-239.8 0-132.5-107.2-239.8-239.8-239.8 -132.5 0-239.8 107.2-239.8 239.8C10.6 382.8 117.8 490.1 250.3 490.1zM250.3 48c111.8 0 202.3 90.5 202.3 202.3 0 111.8-90.5 202.3-202.3 202.3C138.5 452.6 48 362.1 48 250.3 48 138.5 138.5 48 250.3 48z" />
          <path d="M224.7 349.6c8.5 5.9 20.2 3.8 26.1-4.6L355 195.7c5.9-8.5 3.8-20.2-4.6-26.1s-20.2-3.8-26.1 4.6L220 323.5C214.1 332 216.2 343.7 224.7 349.6z" />
          <path d="M247.1 346.2c7.3-7.3 7.3-19.2 0-26.5l-55.9-55.9c-7.3-7.3-19.2-7.3-26.5 0s-7.3 19.2 0 26.5l55.9 55.9C228 353.5 239.8 353.5 247.1 346.2z" />
        </svg>
      );
    case 'danger':
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0"
          y="0"
          viewBox="0 0 500.6 500.6"
          enableBackground="new 0 0 500.6 500.6"
        >
          <path d="M250.3 490.1c132.5 0 239.8-107.2 239.8-239.8 0-132.5-107.2-239.8-239.8-239.8 -132.5 0-239.8 107.2-239.8 239.8C10.6 382.8 117.8 490.1 250.3 490.1zM250.3 48c111.8 0 202.3 90.5 202.3 202.3 0 111.8-90.5 202.3-202.3 202.3C138.5 452.6 48 362.1 48 250.3 48 138.5 138.5 48 250.3 48z" />
          <path d="M168.4 332.2c7.3 7.3 19.2 7.3 26.5 0l137.3-137.3c7.3-7.3 7.3-19.2 0-26.5 -7.3-7.3-19.2-7.3-26.5 0L168.4 305.7C161.1 313 161.1 324.9 168.4 332.2z" />
          <path d="M168.4 168.4c-7.3 7.3-7.3 19.2 0 26.5l137.3 137.3c7.3 7.3 19.2 7.3 26.5 0 7.3-7.3 7.3-19.2 0-26.5L194.9 168.4C187.6 161.1 175.7 161.1 168.4 168.4z" />
        </svg>
      );
    case 'attention':
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0"
          y="0"
          viewBox="0 0 500.6 500.6"
          enableBackground="new 0 0 500.6 500.6"
        >
          <path d="M250.3 301.8c-8.3 0-15-6.7-15-15V181.9c0-8.3 6.7-15 15-15 8.3 0 15 6.7 15 15v104.9C265.3 295.1 258.6 301.8 250.3 301.8zM483.7 377L297.2 66.1c-21.2-35.3-72.6-35.4-93.8 0L16.9 377c-17.6 29.4 3.6 67.1 38 67.1h390.8C480.1 444.1 501.4 406.4 483.7 377L483.7 377zM445.7 414.1H54.9c-11.2 0-18-12.2-12.3-21.7L229.1 81.5c9.6-16 32.8-16 42.4 0L458 392.4C463.7 401.9 456.9 414.1 445.7 414.1z" />
          <circle cx="250.3" cy="339.2" r="22.5" />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0"
          y="0"
          viewBox="0 0 500.6 500.6"
          enableBackground="new 0 0 500.6 500.6"
        >
          <path d="M250.3 490.7c132.5 0 239.8-107.2 239.8-239.8 0-132.5-107.2-239.8-239.8-239.8 -132.5 0-239.8 107.2-239.8 239.8C10.6 383.5 117.8 490.7 250.3 490.7zM250.3 48.6c111.8 0 202.3 90.5 202.3 202.3 0 111.8-90.5 202.3-202.3 202.3C138.5 453.2 48 362.7 48 250.9 48 139.1 138.5 48.6 250.3 48.6z" />
          <path d="M250.3 370c10.3 0 18.7-8.4 18.7-18.7V230.6c0-10.3-8.4-18.7-18.7-18.7 -10.3 0-18.7 8.4-18.7 18.7v120.6C231.6 361.6 240 370 250.3 370z" />
          <circle cx="250.3" cy="163.7" r="25.3" />
        </svg>
      );
  }
}

export const AlertIcon = styled(Icon).attrs(() => ({
  'data-component-name': 'ui/AlertIcon'
}))`
  position: absolute;
  left: var(--alert-padding-horizontal);
  top: 50%;
  transform: translateY(-50%);
  width: var(--alert-icon-size);
  height: var(--alert-icon-size);
  margin-right: var(--alert-padding-horizontal);
  flex-shrink: 0;

  fill: ${({ type }) => `var(--alert-${type}-icon-color)`};
`;
