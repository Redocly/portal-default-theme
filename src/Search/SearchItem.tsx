import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Link } from '@portal/Link';
import { OperationBadge } from '@redocly/reference-docs';
import { ActiveItem, SearchDocument } from '@shared/models';

interface SearchItemProps {
  item: ActiveItem<SearchDocument>;
}

const MAX_SEARCH_ITEMS = 2;

export function SearchItem({ item }: SearchItemProps) {
  const ref = useRef<HTMLAnchorElement>();

  const highlight = (text: string | string[]) => {
    if (!Array.isArray(text)) return text;

    const [pre, entry, suf] = text;
    return <>
      {pre}
        <Strong>{entry}</Strong>
      {suf}
    </>
  };

  let moreItems = 0;

  if (item.parameters.length > MAX_SEARCH_ITEMS) {
    moreItems = item.parameters.length - MAX_SEARCH_ITEMS;
    item.parameters.length = MAX_SEARCH_ITEMS;
  }

  useEffect(() => {
    if (item.active) {
      ref.current.focus();
    }
  }, [item.active]);

  return (
    <SearchLink to={item.url} tabIndex={0} innerRef={ref}>
      <Operaition>
        {item.httpVerb ? <OperationBadge type={item.httpVerb}>{item.httpVerb}</OperationBadge> : null}
        {highlight(item.pathName)}
      </Operaition>
      <Title>
        {highlight(item.title)}
      </Title>
      <Description>
        {highlight(item.text)}
      </Description>

      {item.parameters?.length
        ?
        <Parameters>
          {item.parameters.map(param => {
            const path = `${param.place} → ${param.path?.length ? param.path?.join(' → ') + ' → ': ''}`;
            return <>
              <Place>
                {path}{highlight(param.name)} <br/>
                {highlight(param.description)}
              </Place>
            </>
            })
          }
          {moreItems ? <MoreText>and {moreItems} more...</MoreText> : null}
        </Parameters>
        :
        <Path>
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

const Strong = styled.strong`
  color: var(--color-primary-main);
`

const Parameters = styled.div`
  border-left: 1px solid var(--color-border-light);
  padding: 0 12px;
  margin-top: 8px;
  margin-bottom: 4px;
`

const MoreText = styled.div`
  font-size: 12px;
  font-weight: 100;
  padding-top: 4px;
`

const Operaition = styled.div`
  font-weight: 200;
  font-size: 12px;
  color: var(--search-item-title-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.div`
  line-height: 22px;
  font-weight: 600;
  color: var(--search-item-title-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Place = styled.div`
  font-size: 12px;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:first-child {
    padding-top: 0;
  }
`;

const Path = styled.div`
  font-size: 12px;
  line-height: 22px;
`;
