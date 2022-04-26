import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Link } from '@portal/Link';
import { OperationBadge } from '@redocly/reference-docs';
import { ActiveItem, SearchDocument } from '@shared/models';
import { Parameters } from './Parameters';
import { highlight } from './utils';

interface SearchItemProps {
  item: ActiveItem<SearchDocument>;
}

export function SearchItem({ item }: SearchItemProps) {
  const ref = useRef<HTMLAnchorElement>();

  useEffect(() => {
    if (item.active) {
      ref.current.focus();
    }
  }, [item.active]);

  return (
    <SearchLink to={item.url} tabIndex={0} innerRef={ref}>
      {item.httpVerb ?
        <Operation>
          <OperationBadge type={item.httpVerb}>{item.httpVerb}</OperationBadge>
          {highlight(item.pathName)}
        </Operation>
      : null}
      <Title>
        {highlight(item.title)}
      </Title>
      <Description>
        {highlight(item.text)}
      </Description>

      {item.parameters?.length
        ? <Parameters parameters={item.parameters}/>
        : <Path>
          {item.path?.join(' → ')}
        </Path>
      }
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

const Operation = styled.div`
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small);
  color: var(--search-item-title-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.div`
  font-weight: var(--font-weight-bold);
  color: var(--search-item-title-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: var(--line-height-m);
`;

const Description = styled.div`
  font-size: var(--font-size-base);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Path = styled.div`
  font-size: var(--font-size-small);
  line-height: 22px;
`;
