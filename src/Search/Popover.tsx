import styled from 'styled-components';

export const Popover = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 100;
  min-width: 100%;
  width: 550px;
  max-width: 90vw;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.4);
  background: var(--popover-backgrond-color);
  list-style: none;
  border-radius: var(--popover-border-radius);
`;
