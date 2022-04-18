import { mediaCSS } from '@redocly/reference-docs';
import styled, { css } from '@portal/styled-components';
import { color, typography as typographySystem, ColorProps, TypographyProps } from '@portal/styled-system';

export const typographyTokens = {
  typography: {
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-family-h)',
    lineHeight: 'var(--line-height-m)',
  },
  heading1: {
    fontSize: 'var(--h1-font-size)',
    fontFamily: 'var(--font-family-h)',
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: 'var(--h1-line-height)',
    color: 'var(--color-text-main)',
    marginTop: 'var(--h1-margin-top)',
    marginBottom: 'var(--h1-margin-bottom)',
  },
  heading2: {
    fontSize: 'var(--h2-font-size)',
    fontFamily: 'var(--font-family-h)',
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: 'var(--h2-line-height)',
    color: 'var(--color-text-main)',
    marginTop: 'var(--h2-margin-top)',
    marginBottom: 'var(--h2-margin-bottom)',
  },
  heading3: {
    fontSize: 'var(--h3-font-size)',
    fontFamily: 'var(--font-family-h)',
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: 'var(--h3-line-height)',
    color: 'var(--color-text-main)',
    marginTop: 'var(--h3-margin-top)',
    marginBottom: 'var(--h3-margin-bottom)',
  },
  heading4: {},
  heading5: {},
  heading6: {},
  blockquote: {
    color: 'var(--color-text-main)',
  },
  alert: {
    fontSize: 'var(--alert-font-size)',
    fontWeight: 'var(--alert-font-weight)',
    lineHeight: 'var(--alert-line-height)',
    marginTop: 'var(--alert-margin-vertical)',
    marginBottom: 'var(-alert-margin-vartical)',
    heading: {
      fontSize: 'var(--alert-heading-font-size)',
      fontWeight: 'var(--alert-heading-font-weight)',
      lineHeight: 'var(--alert-line-height)',
      transform: 'var(--alert-heading-transform)',
    },
  },
};

export function typography(theme) {
  if (!theme) return '';
  return css`
    ${mediaCSS({
      fontSize: theme.fontSize || '',
      fontWeight: theme.fontWeight || '',
      fontFamily: theme.fontFamily || '',
      lineHeight: theme.lineHeight || '',
      color: theme.color || '',
      textTransform: theme.transform || '',
    })}
  `;
}

type HeadingProps = TypographyProps &
  ColorProps & {
    mt?: string;
    mb?: string;
  };

export const Emphasis = styled.strong.attrs(() => ({
  'data-component-name': 'ui/Typography/Emphasis'
}))`
  font-weight: var(--font-weight-bold);
`;

export const H1 = styled.h1.attrs(() => ({
  'data-component-name': 'ui/Typography/H1'
}))<HeadingProps>`
  ${typography(typographyTokens.heading1)};
  margin: 1.35em 0 0.9em;
  && {
    ${({ mt }) => mt && `margin-top: ${mt};`}
    ${({ mb }) => mb && `margin-bottom: ${mb};`}
    ${color}
    ${typographySystem}
  }
`;

export const H2 = styled.h1.attrs(() => ({
  'data-component-name': 'ui/Typography/H2'
}))<HeadingProps>`
  ${typography(typographyTokens.heading2)};
  margin: 1.25em 0 0.8em;
  && {
    ${({ mt }) => mt && `margin-top: ${mt};`}
    ${({ mb }) => mb && `margin-bottom: ${mb};`}
    ${color}
    ${typographySystem}
  }
`;

export const H3 = styled.h1.attrs(() => ({
  'data-component-name': 'ui/Typography/H3'
}))<HeadingProps>`
  ${typography(typographyTokens.heading3)};
  margin: 1.25em 0 0.8em;
  && {
    ${({ mt }) => mt && `margin-top: ${mt};`}
    ${({ mb }) => mb && `margin-bottom: ${mb};`}
    ${color}
    ${typographySystem}
  }
`;

export const SectionHeader = styled.h2`
  color: var(--color-primary-main);
  font-size: 1.75em;
  font-weight: var(--font-weight-light);
  text-align: center;
  margin: 2.65em 0;
  padding: 0px 20px;
  ${mediaCSS({ fontFamily: 'var(--font-family-h)' })};
`;

export const Typography = styled.p.attrs(() => ({
  'data-component-name': "ui/Typography/Typography"
}))<
  TypographyProps & {
    color?: string;
    mt?: string;
    mb?: string;
  }
>`
  ${typography(typographyTokens.typography)};
  color: var(--color-text-main);
  ${color}
  margin-top: ${({ mt }) => mt || '1em'};
  margin-bottom: ${({ mb }) => mb || '1em'};
  ${typographySystem}
`;

export const CompactTypography = styled(Typography).attrs(() => ({
  mt: '0em',
  mb: '0em',
  'data-component-name': 'ui/Typography/CompactTypography'
}))``;
