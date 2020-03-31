import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Button } from './styles';

import splashImage from '../../assets/splash.png';

export default function Splash({ navigation }) {
  function redirectToHome() {
    navigation.push('CategoriesList');
  }

  useEffect(() => {
    setTimeout(() => {
      redirectToHome();
    }, 2000);
  }, []);

  return (
    <Container>
      <Button onPress={redirectToHome}>
        <Image source={splashImage} />
      </Button>
    </Container>
  );
}

Splash.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
