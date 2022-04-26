import { space } from 'styled-system';
import styled from 'styled-components';

import { H1, H2 } from '@theme/ui/Typography';
import { Background } from '@theme/ui/Background';

export const Jumbotron = styled(Background).attrs(() => ({
  'data-component-name': 'ui/Jumbotron'
}))<{
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  bgImage?: string;
  bgColor?: string;
  parallaxEffect?: boolean;
  textColor?: string;
}>`
  flex-direction: column;
  padding-top: ${({ pt }) => pt || '0'};
  padding-bottom: ${({ pb }) => pb || '8em'};
  padding-left: ${({ pl }) => pl || '0'};
  padding-right: ${({ pr }) => pr || '0'};
  ${({ bgColor }) => bgColor && `background: ${bgColor}`};
  ${({ bgImage, bgColor }) =>
    bgImage &&
    `
      background: ${bgColor || 'var(--color-primary-main)'} url(${bgImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  `};
  ${({ parallaxEffect }) =>
    parallaxEffect &&
    `
      background-attachment: scroll, fixed;
  `};
  ${space}
  ${H1}, ${H2} {
    color: ${({ textColor }) => textColor || 'var(--navbar-color-text)'};
    text-align: center;
    padding: 0;
  }
  h1 {
    font-size: 3.5em;
    line-height: 1.2;
    font-weight: var(--font-weight-bold);
    margin: 1.75em 0 0.5em 0;
  }
  h2 {
    font-size: 1.875em;
    line-height: 1;
    font-weight: var(--font-weight-light);
    margin: 0;
    margin-bottom: 2em;
  }
`;
