import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesList from './categoriesList';
import RecipesList from './recipesList';
import Recipe from './recipe';

const StackHome = createStackNavigator(
  {
    CategoriesList,
    RecipesList,
    Recipe,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const Routes = createAppContainer(StackHome);
export default Routes;
