import React from 'react';
import styled from '@portal/styled-components';
import { OperationParameter } from '@shared/models';
import { highlight } from './utils';

interface ParametersProps {
  parameters: OperationParameter[];
}

const MAX_ITEMS = 2;

export function Parameters({ parameters = []}: ParametersProps) {
  let moreItems = 0;

  if (parameters.length > MAX_ITEMS) {
    moreItems = parameters.length - MAX_ITEMS;
    parameters.length = MAX_ITEMS;
  }

  return (
    <Wrapper>
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