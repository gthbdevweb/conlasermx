import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
  margin: 0;
  padding: 6px 12px;
  height: 42px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 1px 3px 3px ${props => props.theme.colors.gray};
  position: fixed;
  background: ${props => props.theme.colors.grayLight};
  z-index: 99;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: ${props => props.show ? '92px' : '42px'};
  }
`;

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    padding-bottom: 8px;
  }
`;

const MenuButtonOpenClose = styled.button`
  height: 28px;
  width: 28px;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const MenuOpenStyled = styled.img`
  height: 100%;
  width: 100%;
`;

const MenuCloseStyled = styled.img`
  height: 100%;
  width: 100%;
`;

const LogoLinkStyled = styled(Link)`
  height: 28px;
  width: 28px;
  margin: 0;
  padding: 0;
`;

const LogoImgStyled = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: auto;
`;

const HomeStyled = styled.div`
  width: auto;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 6px;
`;

const WhatsappLinkStyled = styled.a`
  height: 19px;
  width: 19px;
  margin: 0;
  padding: 8px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gray};
`;

const WhatsappImgStyled = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: auto;
`;

const MenuStyled = styled.div`
  background: ${props => props.theme.colors.grayLight};
  position: absolute;
  top: 43px;
  left: ${props => props.show ? 0 : '-100%'};
  width: 100%;
  height: auto;
  padding: ${props => props.show ? '28px' : '28px 0'};
  transition: all .3s ease-out;
  box-shadow: 1px 3px 3px ${props => props.theme.colors.gray};
  box-sizing: border-box;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    left: ${props => props.show ? 0 : '-100%'};
    top: 0;
    padding: 12px;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    box-shadow: none;
  }
`;

const MenuUlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const MenuLiStyled = styled.li`
  margin-bottom: 18px;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 0;
  }
`;

const MenuLinkStyled = styled(Link)`
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.blackOlive};
  display: flex;
  justify-content: left;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const MenuIconStyled = styled.div`
  height: 19px;
  width: 19px;
  margin: 0 8px 0 0;
  padding: 8px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 14px;
    width: 14px;
    padding: 6px;
  }
`;

const MenuImgStyled = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: auto;
`;

export {
  HeaderStyled,
  NavStyled,
  MenuButtonOpenClose,
  MenuOpenStyled,
  MenuCloseStyled,
  LogoLinkStyled,
  LogoImgStyled,
  HomeStyled,
  WhatsappLinkStyled,
  WhatsappImgStyled,
  MenuStyled,
  MenuUlStyled,
  MenuLiStyled,
  MenuLinkStyled,
  MenuIconStyled,
  MenuImgStyled
};
