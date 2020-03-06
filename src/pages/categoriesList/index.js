import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { Horizontal, Content } from './styles';
import CardCategorie from '../../components/cardCategorie';
import Toolbar from '../../components/Toolbar';
import { categories } from '../../utils/mock';
import { PRIMARY, PRIMARY_LIGHT } from '../../utils/colors';

export default function CategoriesList({ navigation }) {
  return (
    <LinearGradient style={{ flex: 1 }} colors={[PRIMARY, PRIMARY_LIGHT]}>
      <Toolbar title="Categorias" />
      <Content>
        <Horizontal>
          {categories.map(categorie => (
            <CardCategorie
              key={categorie.id}
              id={categorie.id}
              name={categorie.name}
              image={categorie.image}
              navigation={navigation}
            />
          ))}
        </Horizontal>
      </Content>
    </LinearGradient>
  );
}

CategoriesList.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
