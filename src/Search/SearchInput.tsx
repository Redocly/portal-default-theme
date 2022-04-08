import React from '@portal/react';
import styled from '@portal/styled-components';
import { transparentize } from 'polished';
import { mediaCSS } from '@redocly/reference-docs';
import { replaceHashInColor } from '@portal/utils';

export default function SearchInput(props) {
  const { query, onChange, onToggleSearchResults, onKeyDown, onClear, loading } = props;

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const timeoutIdRef = React.useRef<number | undefined>();

  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    return () => {
      window.clearTimeout(timeoutIdRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (isFocused && query.length > 0) {
      onToggleSearchResults(true);
    } else {
      onToggleSearchResults(false);
    }
  }, [isFocused, query]);

  return (
    <SearchInputWrap>
      <SearchInputField
        type="text"
        autoComplete="off"
        value={query || ''}
        onChange={onChange}
        id="search"
        ref={inputRef}
        placeholder="Search the docs"
        aria-label="Search the docs"
        onFocus={() => setIsFocused(true)}
        // without it, the user will not be able to click on the search results
        onBlur={() => (timeoutIdRef.current = window.setTimeout(() => setIsFocused(false), 200))}
        onKeyDown={onKeyDown}
      />
      {isFocused ? (
        loading ? (
          <SearchLoadingIcon />
        ) : (
          <SearchClearIcon onClick={onClear} />
        )
      ) : (
        <SearchIcon onClick={() => inputRef.current && inputRef.current.focus()} />
      )}
    </SearchInputWrap>
  );
}

export function svgToDataUri(svg, color) {
  return `data:image/svg+xml,${encodeURIComponent(svg.replace(/#000/g, color))}`;
}

export const SearchInputWrap = styled.span`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  height: 2em;
  line-height: 2em;

  margin-left: 5px; // margin to avoid sticking with active navbar items

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0;
    flex: 0 1 auto;
    width: 90%;

    margin: 32px auto;
    line-height: 1.2;
    font-size: 1rem;
    position: relative;
    display: block;
    height: auto;
  }
`;

const SearchInputField = styled.input`
  max-width: 275px;
  display: inline-block;
  border-radius: ${props => props.theme.shape.borderRadius};
  flex: 1 1 auto;
  padding: 1em 2.5em 1em 1em;
  border: none;
  background-color: ${({ theme }) => transparentize(0.9, theme.colors.navbar.contrastText)};
  box-sizing: border-box;
  outline: none;
  color: ${({ theme }) => theme.colors.navbar.contrastText};
  font-size: ${({ theme }) => theme.navbar.fontSize};

  ${({ theme }) =>
    mediaCSS({
      fontFamily: theme.typography.headings.fontFamily,
    })}

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: inline-block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding-right: 2.6em;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.navbar.contrastText};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  }
`;

const InputSearchIcon = styled.span`
  position: absolute;
  cursor: pointer;
  width: 1em;
  height: 1em;
  right: 1em;
  transform: translateY(-50%);
  top: 50%;
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 1.2em;
    height: 1.2em;
  }
`;

const SearchIcon = styled(InputSearchIcon)`
  background-image: url('${({ theme }) =>
    svgToDataUri(theme.components.search.icon, theme.components.search.iconColor)}');
`;

const SearchClearIcon = styled(InputSearchIcon)`
  ${({ theme }) => `
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 298.7 298.7' xml:space='preserve'%3E%3Cpolygon fill='${replaceHashInColor(
    theme.colors.navbar.contrastText,
  )}' points='298.7 30.2 268.5 0 149.3 119.1 30.2 0 0 30.2 119.1 149.3 0 268.5 30.2 298.7 149.3 179.5 268.5 298.7 298.7 268.5 179.5 149.3 '/%3E%3C/svg%3E%0A");
  width: 0.5em;
  height: 0.5em;
  right: 1.2em;
  @media only screen and (max-width: ${theme.breakpoints.medium}) {
    width: 0.625em;
    height: 0.625em;
  }
  `}
`;

const SearchLoadingIcon = styled(InputSearchIcon)`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' background='none'%3E%3Ccircle cx='50' cy='50' fill='none' stroke='%23fdfdfd' stroke-width='15' r='35' stroke-dasharray='164.93361431346415 56.97787143782138' transform='rotate(257.745 50 50)'%3E%3CanimateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E");
`;
