import styled from 'styled-components';

export const FormInput = styled.input`
  padding: 1em 2.5em 1em 1em;
  background-color: var(--input-background-color);
  border-radius: var(--input-border-radius);
  border: none;
  outline: none;
  color: var(--input-text-color);
  font-size: var(--input-font-size);
  font-family: var(--input-font-family);
  line-height: var(--input-line-height);

  ::placeholder {
    color: var(--input-text-color);
  }
`;
