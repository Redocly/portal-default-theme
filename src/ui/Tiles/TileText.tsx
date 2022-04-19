import styled from '@portal/styled-components';

export const TileText = styled.span.attrs(() => ({
  'data-component-name': 'ui/Tiles/TileText'
}))<{ color?: string }>`
  display: inline-block;
  font-weight: var(--font-weight-regular);
  overflow: hidden;
  color: ${props => props.color || 'var(--color-text-main)'};
  line-height: 1.25;
  font-family: var(--font-family-primary);
`;
