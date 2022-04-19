import React from '@portal/react';
import styled from '@portal/styled-components';
import FooterColumn from '@theme/Footer/FooterColumn';
import { mediaQueries } from '@portal/media-css';

export function FooterColumns({ columns = [] }) {
  if (!columns.length) {
    return null;
  }

  return (
    <FooterColumnsContainer data-component-name="Footer/FooterColumns">
      <FooterRow>
        {columns.map((column, index) => (
          <FooterColumn key={index} column={column} />
        ))}
      </FooterRow>
    </FooterColumnsContainer>
  );
}

export const FooterColumnsContainer = styled.div`
  padding: 3em 20px 1em 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  ${mediaQueries.small} {
    padding: 5.625em 20px 3.9375em 20px;
  }

  ${mediaQueries.print} {
    color: black;
    display: none;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  ${mediaQueries.small} {
    justify-content: space-evenly;
  }
`;
