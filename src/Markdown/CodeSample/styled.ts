import { getLuminance } from 'polished';
import styled, { css } from 'styled-components';
import { typography } from '@theme/ui/Typography';
import type { Tokens } from '@theme/Markdown/CodeSample/types';

function genTokens(tokens?: Tokens | null) {
  if (!tokens) {
    return '';
  }

  let res = '';

  for (const token of Object.keys(tokens)) {
    if (token !== 'default') {
      res += `.token.${token} { color: ${tokens[token].color}; }\n`;
    }
  }

  if (tokens.default) {
    return css`
      pre& {
        ${typography(tokens.default)}
      }
      ${res}
    `;
  }

  return res;
}

const getCodeBlockBackgroundColor = theme =>
  Array.isArray(theme.codeBlock.backgroundColor)
    ? theme.codeBlock.backgroundColor[0]
    : theme.codeBlock.backgroundColor;

export const CodeButton = css`
  padding: 0 5px;
  border-radius: 4px;
`;

export const CodeSampleButtonContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 5px;
`;

export const CopyCodeButton = styled.div`
  ${CodeButton}
  display: none;

  &:hover {
    cursor: pointer;
  }
`;

export const DoneIndicator = styled.div`
  ${CodeButton}
  cursor: default;
`;

const lightStyleCodeButton = css`
  ${CopyCodeButton},
  ${DoneIndicator} {
    color: ${({ theme }) => theme.codeBlock.copyButton.visibleText};
  }

  ${CopyCodeButton}:hover {
    color: ${({ theme }) => theme.codeBlock.copyButton.visibleText};
    outline: 1px solid ${({ theme }) => theme.codeBlock.copyButton.visibleText};
  }
`;

const darkStyleCodeButton = css`
  ${CopyCodeButton},
  ${DoneIndicator} {
    color: ${({ theme }) => theme.codeBlock.copyButton.visibleText};
  }

  ${CopyCodeButton}:hover {
    color: white;
    color: ${({ theme }) => theme.codeBlock.copyButton.contrastText};
    background-color: ${({ theme }) => theme.codeBlock.copyButton.background};
  }
`;

const lightStyleTokens = css`
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999988;
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string,
  .token.attr-value {
    color: #e3116c;
  }
  .token.punctuation,
  .token.operator {
    color: #393a34; /* no highlight */
  }

  .token.entity,
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.property,
  .token.regex,
  .token.inserted {
    color: #36acaa;
  }

  .token.atrule,
  .token.keyword,
  .token.attr-name,
  .language-autohotkey .token.selector {
    color: #00a4db;
  }

  .token.function,
  .token.deleted,
  .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .token.tag,
  .token.selector,
  .language-autohotkey .token.keyword {
    color: #00009f;
  }
`;

const darkStyleTokens = css`
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.property,
  .token.tag,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #62bff9;
  }
  .token.boolean {
    color: firebrick;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a0fbaa;
    & + a,
    & + a:visited {
      color: #4ed2ba;
      text-decoration: underline;
    }
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }
  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.deleted {
    color: red;
  }
`;

export const Wrapper = styled.div`
  overflow: auto;
  border-radius: 4px;
  position: relative;

  ${({ theme }) =>
    getLuminance(getCodeBlockBackgroundColor(theme)) < 0.25
      ? darkStyleCodeButton
      : lightStyleCodeButton}

  &:hover {
    ${CodeSampleButtonContainer} ${CopyCodeButton} {
      display: block;
    }
  }

  pre {
    white-space: ${({ theme }) => (theme.typography.code.wrap ? 'pre-wrap' : 'pre')};
    color: white;
    padding: 12px 14px 15px 14px;
    overflow-x: auto;
    line-height: normal;
    border-radius: 4px;

    font-family: ${({ theme }) => theme.typography.code.fontFamily};
    background-color: ${({ theme }) => theme.codeBlock.backgroundColor};

    code {
      background-color: transparent;
      border: 0;
      padding: 0;

      color: ${({ theme }) =>
        getLuminance(theme.codeBlock.backgroundColor) < 0.5 ? 'white' : '#393A34'};

      &:before,
      &:after {
        content: none;
      }
    }
  }

  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border: 0;
    border-radius: ${({ theme }) => theme.shape.borderRadius};
  }

  code[class='language-text'] {
    line-height: 1.2em;
    display: inline-flex;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }
    .token.entity {
      cursor: help;
    }
    .token.punctuation {
      opacity: 0.7;
    }
    .namespace {
      opacity: 0.7;
    }

    ${({ theme }) =>
      getLuminance(getCodeBlockBackgroundColor(theme)) < 0.5 ? darkStyleTokens : lightStyleTokens}
    ${({ theme }) => genTokens(theme.codeBlock.tokens)}
  }
`;
