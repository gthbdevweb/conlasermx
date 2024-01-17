import styled from 'styled-components';

const HeadStyled = styled.div`
  padding: 16px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

export {
  HeadStyled
};
