import React from '@portal/react';
import styled from '@portal/styled-components';
import { transparentize } from 'polished';
import { Link } from '@portal/Link';

export default function SearchResults(props) {
  const { show, results, indexError, activeItemIdx, loading } = props;
  return (
    <SearchResultsWrap show={show} className="search-results">
      {indexError && process.env.NODE_ENV === 'development' && (
        <Message>
          Failed to load search index. Search index is not working in develop. <br />
          Try running <code>yarn build</code> to build the search index
        </Message>
      )}
      {results.length === 0 && !loading && <Message> Nothing Found </Message>}
      {results.map((item, idx) => (
        <SearchResultItem
          key={item.document.id}
          item={item.document}
          active={idx === activeItemIdx}
        />
      ))}
    </SearchResultsWrap>
  );
}

function SearchResultItem({ item, active }) {
  return (
    <SearchResultItemWrap active={active}>
      <Link to={item.url}>{item.heading}</Link>
    </SearchResultItemWrap>
  );
}

export const SearchResultItemWrap = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 8px 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => transparentize(0.9, theme.colors.primary.main)};
  }
  background-color: ${props =>
    props.active && transparentize(0.9, props.theme.colors.primary.main)};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 8px 16px;
  }

  font-size: 16px;
`;

const Message = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.primary.main};
  padding: 1.5em;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0.75em;
  }
`;

export const SearchResultsWrap = styled.ul<{ show: boolean }>`
  position: absolute;
  display: ${props => (props.show ? 'block' : 'none')};
  top: calc(100% + 20px);
  right: 0;
  z-index: 200;
  width: 550px;
  max-width: 90vw;
  max-height: 400px;
  overflow: auto;
  padding: 0;
  margin: 0;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.4);
  background: ${props => props.theme.colors.primary.contrastText};
  list-style: none;
  border-radius: ${props => props.theme.shape.borderRadius};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    top: 100%;
    width: 90%;
    max-width: 90%;
    left: 5%;
    margin-bottom: 16px;
    padding: 8px 0;
  }
`;
