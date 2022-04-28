import React from 'react';
import styled from 'styled-components';

import { OperationParameter } from '@shared/models';
import { highlight } from '@theme/Search/utils';

interface ParametersProps {
  parameters: OperationParameter[];
}

const MAX_ITEMS = 2;

export function Parameters({ parameters = []}: ParametersProps) {
  const moreItems = Math.max(0, parameters.length - MAX_ITEMS)
  if (moreItems) {
    parameters.length = MAX_ITEMS;
  }

  return (
    <Wrapper data-component-name="Search/Parameters">
      {parameters.map(param => {
        const path = `${param.place} → ${param.path?.length ? param.path?.join(' → ') + ' → ': ''}`;
        return <>
          <Place>
            {path}{highlight(param.name)} <br/>
            {highlight(param.description)}
          </Place>
        </>
      })}
      {moreItems ? <MoreText>and {moreItems} more...</MoreText> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-left: 1px solid var(--color-border-light);
  padding: 0 12px;
  margin-top: 8px;
  margin-bottom: 4px;
`

const Place = styled.div`
  font-size: var(--font-size-small);
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:first-child {
    padding-top: 0;
  }
`;

const MoreText = styled.div`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-light);
  padding-top: 4px;
`