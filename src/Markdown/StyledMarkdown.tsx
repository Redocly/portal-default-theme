import styled, { css } from 'styled-components';
import { typography, typographyTokens } from '@theme/ui/Typography';

export const baseTable = css`
  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: keep-all;
    border-collapse: separate;
    border-spacing: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  table th,
  table td {
    padding: 12px;
    border-bottom: 1px solid var(--color-border-light);
  }

  table th {
    text-align: left;
    font-weight: bold;
    background-color: var(--color-secondary-300);
  }

  table tr th:first-child,
  table tr td:first-child {
    border-left: 1px solid var(--color-border-light);
  }

  table tr td:last-child,
  table tr th:last-child {
    border-right: 1px solid var(--color-border-light);
  }

  table thead td,
  table thead th {
    border-top: 1px solid var(--color-border-light);
  }

  /* top-left border */

  table thead tr:first-child th:first-child {
    border-top-left-radius: var(--panel-border-radius);
  }

  /* top-right border */

  table thead tr:first-child th:last-child {
    border-top-right-radius: var(--panel-border-radius);
    border-top: 1px solid var(--color-border-light);
  }

  /* bottom-left border */

  table tbody tr:last-child td:first-child {
    border-bottom-left-radius: var(--panel-border-radius);
  }

  /* bottom-right border */

  table tbody tr:last-child td:last-child {
    border-bottom-right-radius: var(--panel-border-radius);
  }
`;

export function margins(theme) {
  if (!theme) return '';
  return css`
    ${{
      marginTop: theme.marginTop || theme.marginVertical || '',
      marginBottom: theme.marginBottom || theme.marginVertical || '',
      marginLeft: theme.marginLeft || theme.marginHorizontal || '',
      marginRight: theme.marginRight || theme.marginHorizontal || '',
    }}
  `;
}

// TODO: Can users specify another className or we should hardcode it?
export function headingAnchor(className = 'anchor') {
  return css`
    .${className}.before {
      position: absolute;
      left: 0;
      transform: translateX(-100%);
      padding-right: 4px;
    }

    .${className}.after {
      display: inline-block;
      padding-left: 4px;
    }

    svg,
    .${className} svg {
      visibility: hidden;
    }

    :hover .${className} svg,
    .${className}:focus svg {
      visibility: visible;
    }
  `;
}

export const StyledMarkdown = styled.main.attrs(() => ({
  'data-component-name': "Markdown/StyledMarkdown"
}))`
  font-weight: var(--font-weight-regular);
  padding: 0;

  color: var(--color-text-main);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  line-height: var(--line-height-m);

  a:not([role='button']) {
    text-decoration: var(--links-text-decoration);
    color: var(--links-color);

    &:visited {
      color: var(--links-color);
    }

    &:hover {
      color: var(--links-color-hover);
    }
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-weight-h);
    font-family: var(--font-family-h);
    position: relative;

    scroll-margin-top: 60px;
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  hr {
    border-top: 1px solid var(--color-border-light);
  }

  details {
    margin: 1.125em 0;

    summary {
      color: var(--color-primary-main);
      font-weight: var(--font-weight-regular);
      outline: 0;
      padding: 0;
      cursor: pointer;
    }

    > :not(summary):first-of-type {
      margin-top: 1.25em;
    }

    > *:last-child {
      margin-bottom: 1.25em;
    }
  }

  ${baseTable};

  .code-snippets-tabs {
    .snippets-tabs-headers {
      font-size: 0.9em;

      font-family: var(--font-family-h);

      .tab-header {
        text-align: center;
        padding: 0.2em 0.5em;
        display: inline-block;
        cursor: pointer;
        color: var(--color-text-dimmed);

        &.active {
          color: var(--color-primary-main);
          font-weight: var(--font-weight-bold);
        }
      }
    }

    .tab-content {
      margin-top: 4px;
      display: none;

      pre {
        margin-top: 0;
      }

      &.active {
        display: block;
      }
    }
  }

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    ${typography(typographyTokens.heading1)};
    ${margins(typographyTokens.heading1)};
    ${headingAnchor()};

    &:first-child {
      margin-top: 0;
    }
  }

  h2 {
    ${typography(typographyTokens.heading2)};
    ${margins(typographyTokens.heading2)};
    ${headingAnchor()};
  }

  h3 {
    ${typography(typographyTokens.heading3)};
    ${margins(typographyTokens.heading3)};
    ${headingAnchor()};
  }

  h4 {
    ${typography(typographyTokens.heading4)};
    ${margins(typographyTokens.heading4)};
    ${headingAnchor()};
  }

  h5 {
    ${typography(typographyTokens.heading5)};
    ${margins(typographyTokens.heading5)};
    ${headingAnchor()};
  }

  h6 {
    ${typography(typographyTokens.heading6)};
    ${margins(typographyTokens.heading6)};
    ${headingAnchor()};
  }

  code {
    color: var(--code-color);
    background-color: var(--code-background-color);

    border-radius: 2px;
    border: 1px solid var(--color-border-light);
    padding: 0.1em 0.25em 0.2em;
    font-weight: var(--code-font-weight);
    word-break: break-word;
    font-size: var(--code-font-size);
    font-family: var(--code-font-family);
  }

  blockquote {
    margin: var(--bloquote-margin-vertical) var(--bloquote-margin-horizontal);
    padding: var(--bloquote-padding-vertical) var(--bloquote-padding-horizontal);
    border-left: 4px solid var(--color-border-light);
    background-color: var(--bloquote-background-color);

    ${typography(typographyTokens.blockquote)};

    & > p:first-child {
      margin-top: 0;
    }
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
    margin: 0 auto;

    &:only-child {
      display: block;
    }
  }

  > ul,
  > p ul {
    > ol,
    > p ol {
      padding-left: 2em;
      margin: 0 0 1em;

      ul,
      ol {
        margin-bottom: 0;
        margin-top: 0;
      }
    }
  }
`;
