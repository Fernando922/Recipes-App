import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import { ContainerGradient } from '../../utils/globalStyle';
import { recipes } from '../../utils/mock';
import CardRecipe from '../../components/cardRecipe';
import { NoRecipes } from './styles';

export default function RecipesList({ navigation }) {
  const [recipesList, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId] = useState(navigation.state.params.id);
  const [title] = useState(navigation.state.params.name);

  useEffect(() => {
    const list = recipes.filter(recipe => recipe.idCategory === selectedId);
    setRecipes(list);
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      setLoading(false);
    }
  }, [recipes]);

  return (
    <ContainerGradient>
      <Toolbar leftAction={() => navigation.pop()} title={title} />
      {recipesList.length && !loading > 0 ? (
        recipesList.map(item => (
          <CardRecipe key={item.id} recipe={item} navigation={navigation} />
        ))
      ) : (
        <NoRecipes>Nenhuma Receita foi encontrada :(</NoRecipes>
      )}
    </ContainerGradient>
  );
}

RecipesList.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};
