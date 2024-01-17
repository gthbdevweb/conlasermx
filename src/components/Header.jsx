import React, { useState } from 'react';
import {
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
} from '../styles/header.styled';
import MenuOpen from '../assets/icons/menu-open.svg';
import MenuClose from '../assets/icons/menu-close.svg';
import Logo from '../assets/icons/logo.jpeg';
import Whatsapp from '../assets/icons/whatsapp.svg';
import Home from '../assets/icons/home.svg';
import Label from '../assets/icons/label.svg';
import Contact from '../assets/icons/contact.svg';
import Cart from '../assets/icons/cart.svg';
import About from '../assets/icons/about.svg';

const Header = () => {
  const [ menuOpenClose, setMenuOpenClose ] = useState(false);

  const handleMenuOpenClose = () => {
    setMenuOpenClose(!menuOpenClose);
  };

  const menuList = [
    {
      name: 'Inicio',
      url: '/conlasermx',
      icon: Home
    },
    {
      name: 'Productos',
      url: '/productos',
      icon: Label
    },
    {
      name: 'Contacto',
      url: '/contacto',
      icon: Contact
    },
    {
      name: 'Proceso de compra',
      url: '/proceso-de-compra',
      icon: Cart
    },
    {
      name: 'Acerca de',
      url: '/acerca-de',
      icon: About
    }
  ];

  const MenuOpneClose = () => {
    if (menuOpenClose) {
      return (
        <MenuCloseStyled 
          src={MenuClose}
        />
      );
    }

    return (
      <MenuOpenStyled 
        src={MenuOpen}
      />
    );
  };

  const MenuList = () => (
    menuList?.map(item => (
      <MenuLiStyled key={item.name} onClick={handleMenuOpenClose}>
        <MenuLinkStyled 
          to={item.url}        
        >
          <MenuIconStyled>
            <MenuImgStyled 
              src={item.icon}
            />
          </MenuIconStyled>
          {item.name}
        </MenuLinkStyled>
      </MenuLiStyled>
    ))
  );

  return (
    <HeaderStyled show={menuOpenClose}>
      <NavStyled>
        <MenuButtonOpenClose
          onClick={handleMenuOpenClose}
        >
          {MenuOpneClose()}
        </MenuButtonOpenClose>
        <LogoLinkStyled
          to='/conlasermx'
        >
          <LogoImgStyled 
            src={Logo}
          />
        </LogoLinkStyled>
        <HomeStyled>
          <WhatsappLinkStyled
            href='https://wa.me/1XXXXXXXXXX'
            target='_blank'
            alt="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <WhatsappImgStyled 
              src={Whatsapp}            
            />
          </WhatsappLinkStyled>
        </HomeStyled>
      </NavStyled>
      <MenuStyled
        show={menuOpenClose}
      >
        <MenuUlStyled>
          {MenuList()}
        </MenuUlStyled>
      </MenuStyled>
    </HeaderStyled>
  )
};

export default Header;
