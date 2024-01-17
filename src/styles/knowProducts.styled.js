import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const KnowProductsStyled = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-top: 64px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 120px;
  }
`;

const KnowProductsTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: -48px;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    top: -72px;
  }
`;

const KnowProductsTitleTextStyled = styled.p`
  font-size: ${props => props.theme.fontSizes.titleSmall};
  color: ${props => props.theme.colors.grayLight};
  background: ${props => props.theme.colors.grayPayne};
  padding: 12px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.titleLarge};
    padding: 24px;
  }
`;

const KnowProductsViewStyled = styled.div`
  background: ${props => props.theme.colors.blueSkyDeep};
  padding: 84px 0 64px;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 160px 0 82px;
  }
`;

const KnowProductsCardsSliderStyled = styled.div`
  transition: all .3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 50%;
    min-width: 50%;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 25%;
    min-width: 25%;
  }
`;

const KnowProductsCardStyled = styled(Link)`
  background: ${props => props.theme.colors.grayLight};
  border-radius: 8px;
  height: 342px;
  width: 224px;
  box-sizing: border-box;
  padding: 12px;
  text-decoration: none;
`;

const KnowProductsCardImgStyled = styled(LazyLoadImage)`
  height: 200px;
  width: 200px;
  border-radius: 8px;
`;

const KnowProductsCardTitleStyled = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  padding: 0;
  margin: 24px 0 12px 0;
  text-align: center;
  font-weight: 700;
  color: ${props => props.theme.colors.blackOlive};
`;

const KnowProductsCardDescriptionStyled = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0 24px;
  margin: 0;
  text-align: justify;
  color: ${props => props.theme.colors.blackOlive};
`;

const KnowProductsArrowLeftStyled = styled.button`
  position: absolute;
  height: 48px;
  width: 48px;
  background: ${props => props.theme.colors.grayLight};
  border-radius: 50%;
  border: none;
  box-shadow: 1px 2px 4px ${props => props.theme.colors.blackOlive};
  left: 3px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 2;
`;

const KnowProductsArrowRightStyled = styled.button`
  position: absolute;
  height: 48px;
  width: 48px;
  background: ${props => props.theme.colors.grayLight};
  border-radius: 50%;
  border: none;
  box-shadow: 1px 2px 4px ${props => props.theme.colors.blackOlive};
  right: 3px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 2;
`;

const KnowProductsArrowImgStyled = styled.img`
  height: 100%;
  width: 100%;
`;

const KnowProductsSeeMoreStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: right;
  }
`;

const KnowProductsSeeMoreLinkStyled = styled(Link)`
  text-decoration: none;
  border-radius: 8px;
  background: ${props => props.theme.colors.grayPayne};
  padding: 24px;
  color: ${props => props.theme.colors.grayLight};
  font-size: ${props => props.theme.fontSizes.medium};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

export {
  KnowProductsStyled,
  KnowProductsTitleStyled,
  KnowProductsTitleTextStyled,
  KnowProductsViewStyled,
  KnowProductsCardsSliderStyled,
  KnowProductsCardStyled,
  KnowProductsCardImgStyled,
  KnowProductsCardTitleStyled,
  KnowProductsCardDescriptionStyled,
  KnowProductsArrowLeftStyled,
  KnowProductsArrowRightStyled,
  KnowProductsArrowImgStyled,
  KnowProductsSeeMoreStyled,
  KnowProductsSeeMoreLinkStyled
};
