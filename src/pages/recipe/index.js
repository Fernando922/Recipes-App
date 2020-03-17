import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ContainerRecipe,
  ItemList,
  ContainerImage,
  Image,
  ContainerWrapper,
  Title,
  ContentCard,
} from './styles';
import Toolbar from '../../components/Toolbar';
import { ContainerGradient } from '../../utils/globalStyle';

export default function Recipe({ navigation }) {
  const [recipe] = useState(navigation.state.params.recipe);

  return (
    <ContainerGradient>
      <Toolbar title={recipe.name} leftAction={() => navigation.pop()} />
      <ContainerImage>
        <Image source={{ uri: recipe.image }} />
      </ContainerImage>
      <ContainerWrapper>
        <ContainerRecipe>
          <ContentCard>
            <Title>Ingredientes</Title>
            {recipe.ingredients.map(ingredient => (
              <ItemList key={ingredient.id}>• {ingredient.name}</ItemList>
            ))}
          </ContentCard>

          <ContentCard>
            <Title>Modo de Preparo</Title>
            {recipe.prepareMode.map(prepareMode => (
              <ItemList key={prepareMode.id}>• {prepareMode.name}</ItemList>
            ))}
          </ContentCard>

          <ContentCard>
            <Title>Dicas</Title>
            {recipe.tips.map(tip => (
              <ItemList key={tip.id}>• {tip.name}</ItemList>
            ))}
          </ContentCard>
        </ContainerRecipe>
      </ContainerWrapper>
    </ContainerGradient>
  );
}

Recipe.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        recipe: PropTypes.object.isRequired,
      }),
    }),
  }).isRequired,
};
