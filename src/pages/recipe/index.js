import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  ContainerRecipe,
  ItemList,
  ContainerImage,
  Image,
  ContainerWrapper,
  Title,
  ContentCard,
  NoTip,
} from './styles';
import LoadingComponent from '../../components/loading';
import Toolbar from '../../components/Toolbar';
import { ContainerGradient } from '../../utils/globalStyle';
import api from '../../services/api';

export default function Recipe({ navigation }) {
  const [recipe] = useState(navigation.state.params.recipe);
  const [ingredients, setIngredients] = useState([]);
  const [prepareModes, setPrepareModes] = useState([]);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getIngredients() {
      return api.get(`/ingredients?id_recipe=${recipe.id}`);
    }

    function getPrepareModes() {
      return api.get(`/prepareModes?id_recipe=${recipe.id}`);
    }

    function getTips() {
      return api.get(`/tips?id_recipe=${recipe.id}`);
    }

    axios
      .all([getIngredients(), getPrepareModes(), getTips()])
      .then(
        axios.spread((respIngredients, respPrepareModes, respTips) => {
          setIngredients(respIngredients.data.content);
          setPrepareModes(respPrepareModes.data.content);
          setTips(respTips.data.content);
        })
      )
      .then(() => setLoading(false));
  }, []);

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
            <LoadingComponent active={loading}>
              {ingredients.map(ingredient => (
                <ItemList key={ingredient.id}>• {ingredient.name}</ItemList>
              ))}
            </LoadingComponent>
          </ContentCard>

          <ContentCard>
            <Title>Modo de Preparo</Title>
            <LoadingComponent active={loading}>
              {prepareModes.map(prepareMode => (
                <ItemList key={prepareMode.id}>• {prepareMode.name}</ItemList>
              ))}
            </LoadingComponent>
          </ContentCard>

          <ContentCard>
            <Title>Dicas</Title>
            <LoadingComponent active={loading}>
              {tips.length > 0 ? (
                tips.map(tip => <ItemList key={tip.id}>• {tip.name}</ItemList>)
              ) : (
                <NoTip>Nenhuma dica foi cadastrada.</NoTip>
              )}
            </LoadingComponent>
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

// {
//   "ingredientsList": {"ingredientsList": []},
//   "prepareModesList": {"ingredientsList": []},
//   "tipsList": {"ingredientsList": []}
// }
