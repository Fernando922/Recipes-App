import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesList from './categoriesList';
import RecipesList from './recipesList';
import Recipe from './recipe';
import Splash from '../components/splash';

const StackHome = createStackNavigator(
  {
    Splash,
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
