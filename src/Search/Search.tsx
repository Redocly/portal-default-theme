import React from 'react';

import { usePreloadHistory } from '@portal/usePreloadHistory';
import { useFuseSearch } from '@portal/search';
import { Autocomplete } from '@theme/Search/Autocomplete';
import { ClearIcon } from '@theme/Search/ClearIcon';
import { SearchIcon } from '@theme/Search/SearchIcon';
import { SearchItem } from '@theme/Search/SearchItem';

export function Search() {
  const history = usePreloadHistory();
  const { query, setQuery, items } = useFuseSearch();

  const navigate = item => history.push(item.url);

  return (
    <>
      <Autocomplete
        items={items}
        value={query}
        change={setQuery}
        select={navigate}
        placeholder="Search the docs"
        renderItem={item => <SearchItem key={item.id} item={item} />}
      >
        {(isOpen, reset) => (isOpen ? <ClearIcon onClick={reset} /> : <SearchIcon />)}
      </Autocomplete>
    </>
  );
}
