import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import { ContainerGradient } from '../../utils/globalStyle';
import CardRecipe from '../../components/cardRecipe';
import { NoRecipes } from './styles';
import api from '../../services/api';
import LoadingComponent from '../../components/loading';

export default function RecipesList({ navigation }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId] = useState(navigation.state.params.id);
  const [title] = useState(navigation.state.params.name);

  useEffect(() => {
    function findRecipes() {
      return api.get(`/recipes?id_category=${selectedId}`);
    }

    findRecipes()
      .then(res => setRecipes(res.data))
      .then(() => setLoading(false));
  }, []);

  return (
    <ContainerGradient>
      <Toolbar leftAction={() => navigation.pop()} title={title} />
      <LoadingComponent active={loading}>
        {recipes.length > 0 ? (
          recipes.map(item => (
            <CardRecipe key={item.id} recipe={item} navigation={navigation} />
          ))
        ) : (
          <NoRecipes>Nenhuma Receita foi encontrada :(</NoRecipes>
        )}
      </LoadingComponent>
    </ContainerGradient>
  );
}

RecipesList.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};
