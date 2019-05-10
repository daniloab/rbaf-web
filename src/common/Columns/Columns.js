import React from 'react'
import styled from 'styled-components'

export const StyledRow = styled.div`
  display: flex;
  justify-content: ${props => props.justify}
  align-content: ${props => props.align}
  flex-wrap: wrap;
  width: 100%;
`;

export const Row = ({ children, ...props }) => <StyledRow {...props}>{children}</StyledRow>;

export const StyledCol = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  width: calc((100% * ${props => props.span ? props.span : 12}) / 12);
  padding: 5px 5px 0px 5px;

  @media only screen and (max-width: 768px) {
    width: calc((100% * ${props => props.spanSm ? props.spanSm : 12}) / 12) !important;    
    font-size: 12px;
  }
`;

export const Col = ({ children, ...props }) => (
  <StyledCol {...props}>{children}</StyledCol>
);