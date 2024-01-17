import React from 'react';
import {
  HeadStyled,
  HeadH1Styled,
  HeadPStyled,
  HeadLinkStyled
} from '../styles/head.styled';

const Head = () => {
  return (
    <HeadStyled>
      <HeadH1Styled>Somos una marca registrada, 100% mexicana.</HeadH1Styled>
      <HeadPStyled>Contamos con más de 6 años de experiencia y los mejores productos personalizados.</HeadPStyled>
      <HeadLinkStyled
        to='/contacto'
      >
        Contactanos
      </HeadLinkStyled>
    </HeadStyled>
  )
};

export default Head;
