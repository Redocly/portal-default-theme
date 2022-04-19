import React from '@portal/react';
import { Link } from '@portal/Link';
import styled from '@portal/styled-components';

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const DropDownContainer = styled.div`
  position: relative;
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
`;

const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #e4e7eb;
  font-weight: 600;
  color: var(--color-text-main);
  background: var(--color-secondary-300);
`;

const DropDownList = styled.div`
  position: absolute;
  background: var(--color-secondary-300);
  margin: 2px 20px 0 20px;
  padding: 0;
  border-radius: 4px;
  border: 1px solid rgba(38, 50, 56, 0.2);
  z-index: 9999;
  left: 0;
  right: 0;
`;

const IconWrapper = styled.span`
  transition: transform 0.2s;
  display: inline-block;
  font-size: 0;
  &.active {
    transform: rotate(-180deg);
  }
`;

const ListItem = styled.div`
  background-color: var(--background-color);
  padding: 0.4em 10px;
  font-size: 1em;
  color: var(--color-text-main);
  cursor: pointer;
  &:hover {
    background-color: rgba(38, 50, 56, 0.12);
  }
  &.active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const DropDownLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--color-text-main);
`;

export default function Dropdown({ items, activeItem }) {
  const ref: React.Ref<HTMLDivElement> = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);
  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <DropDownContainer ref={ref} data-component-name="ui/Dropdown">
      <DropDownHeader onClick={toggling}>
        {activeItem?.label || activeItem.version}
        <IconWrapper className={!!isOpen && 'active'}>
          <Icon />
        </IconWrapper>
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {items.map(item => (
            <ListItem
              className={activeItem.version === item.version && 'active'}
              onClick={toggling}
              key={item?.link + item?.version}
            >
              <DropDownLink to={item?.link || '#'}>{item?.label || item.version}</DropDownLink>
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
}
