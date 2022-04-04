import React from '@portal/react';
import { Link } from '@portal/Link';
import { Flex } from '@theme/ui/Flex';
import styled from '@portal/styled-components';
import { mediaQueries } from '@portal/media-css';
import { TileText } from '@theme/ui/Tiles/TileText';
import { TileHeader } from '@theme/ui/Tiles/TileHeader';

type TextAlign = 'left' | 'right' | 'center' | 'justify';

export interface TileProps {
  header?: string;
  icon?: string;
  children?: string;
  to?: string;
  target?: string;
  headerAlign?: TextAlign;
  textAlign?: TextAlign;
  bgColor?: string;
  bgImage?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
}

const ThinTileWrapper = styled(Link)<{ bgColor?: string; bgImage?: string }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px rgba(35, 35, 35, 0.1);
  box-sizing: border-box;
  transition: box-shadow 0.25s ease;
  padding: 24px;
  margin-bottom: 20px;
  text-decoration: none;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-repeat: no-repeat;

  :hover {
    box-shadow: 0px 10px 100px 0px rgba(35, 35, 35, 0.2);
  }

  ${mediaQueries.small} {
    width: calc(50% - 20px);
    margin-right: 10px;
    margin-left: 10px;
  }
  ${mediaQueries.medium} {
    width: 250px;
  }
  ${mediaQueries.large} {
    width: 280px;
  }

  &.external-url {
    :after {
      display: none;
    }
  }
`;

const ThinTileIcon = styled.img`
  width: 90px;
  ${mediaQueries.medium} {
    width: 80px;
  }
`;

const ThinTileHeader = styled(TileHeader)<{ align?: TextAlign }>`
  font-size: 24px;
  text-align: ${({ align }) => align || 'center'};
`;

const ThinTileText = styled(TileText)<{ icon?: string; align?: TextAlign }>`
  font-size: 18px;
  line-height: 1.5;
  flex-shrink: 0;
  min-height: 3em;
  text-align: ${({ align }) => align || 'center'};
  ${({ icon }) =>
    icon
      ? `
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 8;
  `
      : ''};
  ${mediaQueries.small} {
    min-height: 6em;
  }
  ${mediaQueries.medium} {
    min-height: 4.5em;
  }
`;

export class ThinTile extends React.Component<TileProps> {
  render() {
    const {
      header,
      icon,
      children,
      to,
      target,
      headerAlign,
      textAlign,
      bgColor,
      bgImage,
      color,
      className,
      style,
    } = this.props;

    const Wrapper = to
      ? ThinTileWrapper
      : (ThinTileWrapper.withComponent('div') as typeof ThinTileWrapper);

    return (
      <Wrapper
        to={to}
        target={target}
        color={color}
        // bgColor={bgColor}
        // bgImage={bgImage}
        className={className}
        style={style}
      >
        {(icon || header) && (
          <Flex flexDirection="column">
            {icon && (
              <Flex
                flexShrink={0}
                height={{ xs: 'auto', small: '100px', medium: '110px' }}
                alignItems="center"
                justifyContent="center"
                mb="25px"
              >
                <ThinTileIcon src={icon} />
              </Flex>
            )}
            {header && (
              <ThinTileHeader align={headerAlign} color={color} data-cy={`Thin-${header}`}>
                {header}
              </ThinTileHeader>
            )}
          </Flex>
        )}
        {children && (
          <ThinTileText icon={icon} align={textAlign} color={color}>
            {children}
          </ThinTileText>
        )}
      </Wrapper>
    );
  }
}
