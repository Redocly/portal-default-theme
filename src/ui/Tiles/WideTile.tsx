import React from '@portal/react';
import { Link } from '@portal/Link';
import { TileProps } from '@theme/ui';
import styled from '@portal/styled-components';
import { mediaQueries } from '@portal/media-css';
import { TileText } from '@theme/ui/Tiles/TileText';
import { TileHeader } from '@theme/ui/Tiles/TileHeader';

// prettier-ignore
const WideTileWrapper = styled(Link)<{
  disableArrow?: boolean;
  withIcon: boolean;
  bgColor?: string;
  bgImage?: string;
  color?: string;
  maxWidth?: string;
}>`
  display: inline-flex;
  flex-direction: ${({ withIcon }) => (withIcon ? 'column' : 'row')};
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px rgba(35, 35, 35, 0.1);
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-repeat: no-repeat;
  padding: 24px;
  padding-right: ${({ disableArrow }) => (disableArrow ? '24px' : '56px')};
  margin-bottom: 32px;
  box-sizing: border-box;
  position: relative;
  text-decoration: none;
  width: 100%;
  transition: box-shadow 0.25s ease;
  :hover {
    box-shadow: 0px 10px 30px 0px rgba(35, 35, 35, 0.2);
  }
  :before {
    content: ${({ disableArrow }) => (disableArrow ? 'none' : '""')};
    display: inline-block;
    width: 9px;
    min-height: 18px;
    background-size: 9px 18px;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
  }
  &.external-url::after {
    content: none;
  }
  ${mediaQueries.medium} {
    width: calc(50% - 2em);
    padding: 32px;
    padding-right: ${({ disableArrow }) => (disableArrow ? '32px' : '64px')};
    flex-direction: row;
    max-width: ${({ maxWidth }) => maxWidth};
  }
`;

const WideTileHeader = styled(TileHeader)<{ align?: string }>`
  font-size: 24px;
  text-align: ${({ align }) => align || 'left'};
`;
const WideTileText = styled(TileText)<{ align?: string }>`
  font-size: 18px;
  text-align: ${({ align }) => align || 'left'};
`;

const WideTileIcon = styled.div`
  margin-bottom: 24px;
  flex-shrink: 0;
  width: 70px;
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
  ${mediaQueries.medium} {
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

export class WideTile extends React.Component<TileProps & { disableArrow?: boolean }> {
  render() {
    const {
      to,
      header,
      children,
      target,
      disableArrow,
      textAlign,
      headerAlign,
      icon,
      bgColor,
      bgImage,
      color,
      className,
      style,
      maxWidth,
    } = this.props;
    return (
      <WideTileWrapper
        to={to}
        target={target}
        disableArrow={disableArrow}
        withIcon={!!icon}
        bgColor={bgColor}
        bgImage={bgImage}
        color={color}
        className={className}
        style={style}
        maxWidth={maxWidth}
        data-component-name="ui/Tiles/WideTile"
      >
        {icon && (
          <WideTileIcon>
            <img src={icon} alt="" />
          </WideTileIcon>
        )}
        <div>
          {header && (
            <WideTileHeader align={textAlign} color={color} data-cy={`Wide-${header}`}>
              {header}
            </WideTileHeader>
          )}
          {children && (
            <WideTileText align={headerAlign} color={color}>
              {children}
            </WideTileText>
          )}
        </div>
      </WideTileWrapper>
    );
  }
}
