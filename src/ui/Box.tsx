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

const StyledBox = styled.div<BoxProps>`
  max-width: 100%;
  ${space}
  ${layout}
  ${position}
  ${flex}
  ${textAlign}
  ${color}
  ${border}
`;

export function Box(props: BoxProps) {
  return <StyledBox {...props} data-component-name="ui/Box" />
}
