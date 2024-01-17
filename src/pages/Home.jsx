import React from 'react';
import Head from '../components/Head';
import Features from '../components/Features';
import KnowProducts from '../components/KnowProducts';

import {
  HeadStyled
} from '../styles/home.styled';

const Home = () => {
  return (
    <HeadStyled>
      <Head />
      <Features />
      <KnowProducts />
    </HeadStyled>
  )
};

export default Home;