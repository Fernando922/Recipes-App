import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Title } from './styles';

export default function CardCategorie({ id, name, image, navigation }) {
  function openCategorie() {
    navigation.navigate('RecipesList', { id, name });
  }

  return (
    <Container onPress={() => openCategorie()}>
      <Image source={{ uri: image }} />
      <Title>{name}</Title>
    </Container>
  );
}

CardCategorie.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
