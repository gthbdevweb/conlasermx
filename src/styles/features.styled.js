import styled from 'styled-components';

const FeaturesStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 32px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 72px;
    gap: 0 32px;
    max-width: 1200px;
    margin: 32px auto;
  }
`;

const FeaturesDescriptionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.blackOlive};
  padding: 16px 32px;
  border-radius: 8px;
  margin: 24px 0;
  background: ${props => props.theme.colors.grayLight};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex: 1 0 40%;
  }
`;

const FeaturesIconStyled = styled.img`
  height: 54px;
  width: 54px;
  aspect-ratio: auto;
`;

const FeaturesPStyled = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.blackOlive};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

export {
  FeaturesStyled,
  FeaturesDescriptionStyled,
  FeaturesIconStyled,
  FeaturesPStyled
};
