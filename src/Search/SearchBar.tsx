import React from '@portal/react';
import styled from '@portal/styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from '@portal/hooks';
import SearchInput from '@theme/Search/SearchInput';
import SearchResults from '@theme/Search/SearchResults';
import SearchClient from '@portal/services/SearchClient';

export default function SearchBar({ className }: { className?: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [indexError, setIndexError] = React.useState(false);
  const [searchResultsVisible, setSearchResultsVisible] = React.useState(false);
  const [activeItemIdx, setActiveItemIdx] = React.useState(0);

  const onSearch = async evt => {
    const query: string = evt.target.value;
    setSearchQuery(query);
    querySearchResults(query);
  };

  // tslint:disable-next-line:member-ordering
  const querySearchResults = debounce(
    async (query: string) => {
      if (!query) {
        setLoading(false);
        setResults([]);
        return;
      } else {
        setLoading(true);
      }

      try {
        const searchRes = await SearchClient.search(query);

        if (Array.isArray(searchRes)) {
          setResults(searchRes);
        } else if (searchRes.message) {
          setIndexError(true);
        }
      } finally {
        if (searchQuery === query) {
          // only clear loading state when last result arrived
          setLoading(false);
        }
      }
    },
    250,
    true,
  );

  const onToggleSearchResults = (value: boolean) => {
    setSearchResultsVisible(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 27) {
      // ESC
      this.onClearIconClick();
      (event.target as HTMLInputElement).blur();
    }
    if (event.keyCode === 40) {
      // Arrow down
      setActiveItemIdx(Math.min(activeItemIdx + 1, results.length - 1));
      event.preventDefault();
    }
    if (event.keyCode === 38) {
      // Arrow up
      setActiveItemIdx(Math.max(0, activeItemIdx - 1));
      event.preventDefault();
    }
    if (event.keyCode === 13) {
      // enter
      const activeResult = results[activeItemIdx];
      if (activeResult) {
        navigate(activeResult?.link);
      }
    }
  };

  const onClearIconClick = () => {
    setSearchQuery('');
    setResults([]);
  };

  return (
    <SearchWrap className={className}>
      <SearchInput
        onChange={onSearch}
        onToggleSearchResults={onToggleSearchResults}
        onKeyDown={handleKeyDown}
        onClear={onClearIconClick}
        query={searchQuery || ''}
        loading={loading}
        location={location}
      />
      <SearchResults
        show={searchResultsVisible}
        results={results}
        indexError={indexError}
        query={searchQuery}
        loading={loading}
        activeItemIdx={activeItemIdx}
        location={location}
      />
    </SearchWrap>
  );
}

const SearchWrap = styled.span`
  position: relative;
  vertical-align: middle;

  @media print {
    display: none;
  }
`;

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  threshold: number,
  leading?: boolean,
): T {
  let timeout;
  let count = 0;
  return function debounced(...args: any[]) {
    count++;
    function delayed() {
      if (count > 1) {
        fn(...args);
      }
      count = 0;
      timeout = null;
    }

    if (timeout) {
      clearTimeout(timeout);
    } else if (leading) {
      fn(...args);
    }

    timeout = setTimeout(delayed, threshold);
  } as T;
}
