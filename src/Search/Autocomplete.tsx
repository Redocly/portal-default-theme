import React, {
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { FormInput } from '@theme/Search/Input';
import { Popover } from '@theme/Search/Popover';
import { ActiveItem } from '@shared/models';

interface AutocompleteProps<T> {
  placeholder?: string;
  value: string;
  items: T[];
  renderItem(item: ActiveItem<T>): ReactNode;
  change(value: string): void;
  select(item: T): void;
  children?(isOpen: boolean, close: () => void): ReactNode;
}

export function Autocomplete<T>({
  placeholder,
  value,
  items,
  change,
  select,
  renderItem,
  children,
}: AutocompleteProps<T>) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setActiveIdx(-1);
  };

  const reset = () => {
    change('');
    close();
  };

  const stopPropagation = (event: SyntheticEvent) => event.stopPropagation();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setActiveIdx(-1);
    change(event.target.value);
  };

  const onKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'Escape':
        close();
        event.currentTarget.blur();
        break;
      case 'ArrowDown':
        setActiveIdx(Math.min(activeIdx + 1, items.length - 1));
        event.preventDefault();
        break;
      case 'ArrowUp':
        setActiveIdx(Math.max(0, activeIdx - 1));
        break;
      case 'Enter':
        if (activeIdx > -1) {
          select(items[activeIdx]);
        }
        break;
    }
  };

  const mapItem = (item, idx) => {
    const active = idx === activeIdx;
    return renderItem({ ...item, active });
  };

  useEffect(close, [location]);

  return (
    <Wrapper data-component-name="Search/Autocomplete">
      {isOpen ? <Overlay onClick={close} /> : null}
      <AutocompleteBox onKeyDown={onKeydown}>
        <FormInput
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={open}
          onClick={stopPropagation}
        />

        {children?.(isOpen, reset)}

        {isOpen && value ? (
          <Popover>{items.length ? items.map(mapItem) : <Message>No results</Message>}</Popover>
        ) : null}
      </AutocompleteBox>
    </Wrapper>
  );
}

const Wrapper = styled.div``

const AutocompleteBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Message = styled.div`
  padding: 24px;
  color: var(--color-text-main);
`;
