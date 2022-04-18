import styled from '@portal/styled-components';
import { mediaCSS } from '@redocly/reference-docs';

export const TileHeader = styled.h3.attrs(() => ({
  'data-component-name': 'ui/Tiles/TileHeader'
}))<{ color?: string }>`
  font-weight: var(--font-weight-bold);
  line-height: 1.25;
  color: ${props => props.color || 'var(--color-primary-main)'};
  ${mediaCSS({ fontFamily: 'var(--h-font-family)' })};
  && {
    margin: 0 0 0.5em;
  }
`;
