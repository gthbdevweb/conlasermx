import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeadStyled = styled.div`
  background: ${props => props.theme.colors.yellow};
  padding: 64px 16px 78px 16px;
  border-radius: 8px;
  box-shadow: 4px 4px 6px ${props => props.theme.colors.gray};
  margin-top: 42px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 120px 64px 120px 64px;
    box-shadow: none;
    border-radius: 0;
    margin-top: 0;
  }
`;

const HeadH1Styled = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.fontSizes.titleSmall};
  text-align: left;
  line-height: 1.5;
  width: 290px;
  font-weight: 700;
  color: ${props => props.theme.colors.blackOlive};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.titleLarge};
    width: 450px;
  }
`;

const HeadPStyled = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  text-align: left;
  line-height: 1.5;
  margin: 32px 0 48px 0;
  color: ${props => props.theme.colors.blackOlive};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.large};
    margin: 64px 0 48px 0;
  }
`;

const HeadLinkStyled = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.grayLight};
  border: 1px solid gray;
  padding: 12px;
  font-size: ${props => props.theme.fontSizes.medium};
  float: right;
  border-radius: 3px;
  background: ${props => props.theme.colors.blackOlive};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

export {
  HeadStyled,
  HeadH1Styled,
  HeadPStyled,
  HeadLinkStyled
};
