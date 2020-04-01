import React from 'react';
import { Container, Image } from './styles';

import splashImage from '../../assets/splash.png';

export default function Splash() {
  return (
    <Container>
      <Image source={splashImage} />
    </Container>
  );
}
