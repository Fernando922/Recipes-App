import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  ContainerImage,
  Image,
  ContainerButton,
  Content,
} from './styles';

export default function CardRecipe({ navigation, recipe }) {
  return (
    <Container>
      <ContainerButton
        onPress={() => navigation.navigate('Recipe', { recipe })}
      >
        <ContainerImage>
          <Image source={{ uri: recipe.image }} />
        </ContainerImage>
        <Content>
          <Title>{recipe.name}</Title>
        </Content>
      </ContainerButton>
    </Container>
  );
}

CardRecipe.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
