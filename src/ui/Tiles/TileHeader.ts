import React from '@portal/react';
import styled from '@portal/styled-components';
import { mediaCSS } from '@redocly/reference-docs';

export function TileHeader({ color, children }) {
  return (
    <StyledH3 color={color} data-component-name="ui/Tiles/TileHeader">{children}</StyledH3>
  )
}

const StyledH3 = styled.h3<{ color?: string }>`
  font-weight: var(--font-weight-bold);
  line-height: 1.25;
  color: ${props => props.color || 'var(--color-primary-main)'};
  ${mediaCSS({ fontFamily: 'var(--h-font-family)' })};
  && {
    margin: 0 0 0.5em;
  }
`;
