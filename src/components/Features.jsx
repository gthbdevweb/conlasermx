import React from 'react';
import DesignIcon from '../assets/icons/design.svg';
import ServiceIcon from '../assets/icons/service.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import SecureBuyIcon from '../assets/icons/secure-buy.svg';
import {
  FeaturesStyled,
  FeaturesDescriptionStyled,
  FeaturesIconStyled,
  FeaturesPStyled
} from '../styles/features.styled';

const Features = () => {
  const featuresList = [
    {
      text: 'Diseños personalizados',
      icon: DesignIcon
    },
    {
      text: 'Atención personalizada',
      icon: ServiceIcon
    },
    {
      text: 'Envíos a toda la republica',
      icon: ShippingIcon
    },
    {
      text: 'Seguridad en tu compra',
      icon: SecureBuyIcon
    }
  ];

  const FeaturesList = () => (
    featuresList?.map(item => (
      <FeaturesDescriptionStyled key={item.text}>
        <FeaturesIconStyled 
          src={item.icon}
        />
        <FeaturesPStyled>
          {item.text}
        </FeaturesPStyled>
      </FeaturesDescriptionStyled>
    ))
  );

  return (
    <FeaturesStyled>
      {FeaturesList()}
    </FeaturesStyled>
  )
};

export default Features;

