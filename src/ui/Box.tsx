import {
  space,
  position,
  flex,
  textAlign,
  color,
  border,
  layout,
  SpaceProps,
  LayoutProps,
  TextAlignProps,
  ColorProps,
  PositionProps,
  FlexProps,
  BordersProps,
} from '@portal/styled-system';
import styled from '@portal/styled-components';

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    FlexProps,
    TextAlignProps,
    ColorProps,
    BordersProps {}

export const Box = styled.div.attrs(() => ({
  'data-component-name': 'ui/Box'
}))<BoxProps>`
  max-width: 100%;
  ${space}
  ${layout}
  ${position}
  ${flex}
  ${textAlign}
  ${color}
  ${border}
`;
