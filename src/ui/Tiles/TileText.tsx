import React from '@portal/react';
import styled from '@portal/styled-components';
import { mediaCSS } from '@redocly/reference-docs';

export const StyledText = styled.span<{ color?: string }>`
  display: inline-block;
  font-weight: var(--font-weight-regular);
  overflow: hidden;
  color: ${props => props.color || 'var(--color-text-main)'};
  line-height: 1.25;
  ${mediaCSS({ fontFamily: 'var(--font-family-primary)' })};
`;

export function TileText({ color, children }) {
  return (
    <StyledText color={color} data-component-name="ui/Tiles/TileText">{children}</StyledText>
  )
}
