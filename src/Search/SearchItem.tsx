import { useEffect, useRef } from 'react';
import * as React from 'react';
import styled from 'styled-components';

import { Link } from '@portal/Link';
import { ActiveItem, SearchDocument } from '@shared/models';

interface SearchItemProps {
  item: ActiveItem<SearchDocument>;
}

export function SearchItem({ item }: SearchItemProps) {
  const ref = useRef<HTMLAnchorElement>();

  const highlight = ([pre, entry, suf]: string[]) => (
    <>
      {pre}
      <strong>{entry}</strong>
      {suf}
    </>
  );

  useEffect(() => {
    if (item.active) {
      ref.current.focus();
    }
  }, [item.active]);

  return (
    <SearchLink to={item.url} tabIndex={0} innerRef={ref} data-component-name="Search/SearchItem">
      <Title>{item.title}</Title>
      <Description>{highlight(item.chunks)}</Description>
      <Path>{item.path.join(' > ')}</Path>
    </SearchLink>
  );
}

const SearchLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 8px 24px;
  transition: background-color 0.3s ease;
  outline: none;
  white-space: nowrap;
  color: var(--search-item-text-color);

  &:hover,
  &:focus {
    background-color: var(--search-item-active-background-color);
  }
`;

const Title = styled.div`
  font-weight: 600;
  color: var(--search-item-title-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Path = styled.div`
  font-size: 12px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
