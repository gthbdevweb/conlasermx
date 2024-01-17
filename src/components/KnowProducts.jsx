import React, { useState, useEffect } from 'react';
import useWindowSize from '../utils/useWindowSize';
import {
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
} from '../styles/knowProducts.styled';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import ArrowRight from '../assets/icons/arrow-right.svg';
import CojinLlaveroImg from '../assets/products/cojin-llavero.jpeg';
import CollarPlacaImg from '../assets/products/collar-placa.jpeg';
import CollarImg from '../assets/products/collar.jpeg';
import PlacaMetalicaImg from '../assets/products/placa-metalica.jpeg';
import PlayeraLlaveroCojinImg from '../assets/products/playera-llavero-cojin.jpeg';
import SudaderaLlaveroImg from '../assets/products/sudadera-llavero.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';

const KnowProducts = () => {
  const [slideCount, setSlideCount] = useState(0);
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [changeSlideCount, setChangeSlideCount] = useState(4);

  const productsList = [
    {
      img: CojinLlaveroImg,
      title: 'Cojin personalizado y llavero',
      desciption: '* En la compra te regalamos un imán*'
    },
    {
      img: SudaderaLlaveroImg,
      title: 'Sudadera y llavero',
      desciption: '* Perzonalizado'
    },
    {
      img: PlacaMetalicaImg,
      title: 'Placa metálica',
      desciption: '* 2 X $130'
    },
    {
      img: CollarPlacaImg,
      title: 'Collar identificación',
      desciption: '* Placa de acero inoxidable'
    },
    {
      img: PlayeraLlaveroCojinImg,
      title: 'Playera + Llavero + cojín',
      desciption: '* Super combo'
    },
    {
      img: CollarImg,
      title: 'Collar grabado',
      desciption: '* Diversos tamaños'
    }
  ];

  const handleNextSlide = () => {
    if (slideCount >= -changeSlideCount) {
      setSlideCount(slideCount - 1);
    }
  };

  const handlePrevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

  const ProductsList = () => (
    productsList?.map(item => (
      <KnowProductsCardsSliderStyled key={item.title} style={{transform: `translate(calc(${slideCount}00%))`}}>
        <KnowProductsCardStyled
          to='/productos'
        >
          <KnowProductsCardImgStyled 
            alt='imagen'
            effect="blur"
            src={item.img}
          />
          <KnowProductsCardTitleStyled>{item.title}</KnowProductsCardTitleStyled>
          <KnowProductsCardDescriptionStyled>{item.desciption}</KnowProductsCardDescriptionStyled>
        </KnowProductsCardStyled>
      </KnowProductsCardsSliderStyled>
      
    ))
  );

  useEffect(() => {
    if (isMobile) return setChangeSlideCount(4);
    if (isTablet) return setChangeSlideCount(3);
    if (isDesktop) return setChangeSlideCount(1);
  }, [isMobile, isTablet, isDesktop]);

  return (
    <KnowProductsStyled>
      <KnowProductsTitleStyled>
        <KnowProductsTitleTextStyled>
          Conoce nuestros productos
        </KnowProductsTitleTextStyled>
      </KnowProductsTitleStyled>
      <KnowProductsViewStyled>
        <KnowProductsArrowLeftStyled
          onClick={handlePrevSlide}
        >
          <KnowProductsArrowImgStyled 
            src={ArrowLeft}
          />
        </KnowProductsArrowLeftStyled>
        {ProductsList()}
        <KnowProductsArrowRightStyled
          onClick={handleNextSlide}
        >
          <KnowProductsArrowImgStyled 
            src={ArrowRight}
          />
        </KnowProductsArrowRightStyled>
      </KnowProductsViewStyled>
      <KnowProductsSeeMoreStyled>
        <KnowProductsSeeMoreLinkStyled
          to='/productos'
        >
          Ver todos los productos
        </KnowProductsSeeMoreLinkStyled>
      </KnowProductsSeeMoreStyled>
    </KnowProductsStyled>
  )
};

export default KnowProducts;
