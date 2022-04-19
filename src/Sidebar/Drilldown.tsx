import React from '@portal/react';
import styled from '@portal/styled-components';
import { MenuItemLabel } from '@theme/Sidebar/MenuItemLabel';
import { SeparatorLine } from '@theme/Sidebar/SeparatorLine';
import { DrilldownMenuItem } from '@theme/Sidebar/DrilldownMenuItem';
import { DrilldownMenu, DrilldownMenuProps } from '@theme/Sidebar/DrilldownMenu';

interface DrilldownProps extends DrilldownMenuProps {
  isExpanded: boolean;
  expand: () => void;
}

export function Drilldown({
  isExpanded,
  item,
  expand,
  ...props
}: React.PropsWithChildren<DrilldownProps>) {
  return (
    <Wrapper data-component-name="Sidebar/Drilldown">
      <DrilldownLabel onClick={expand}>
        <DrilldownMenuItem item={item} />
      </DrilldownLabel>

      {isExpanded ? <DrilldownMenu item={item} {...props} /> : null}

      {item.separatorLine ? <SeparatorLine /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const DrilldownLabel = styled(MenuItemLabel)`
  padding-top: calc(var(--sidebar-spacing-padding-vertical) * 2);
  padding-bottom: calc(var(--sidebar-spacing-padding-vertical) * 2);
  padding-left: var(--sidebar-spacing-padding-horizontal);
  font-weight: var(--font-weight-bold);

  &:hover {
    color: initial;
    background-color: initial;
  }
`;
