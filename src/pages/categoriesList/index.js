import React from 'react';
import PropTypes from 'prop-types';
import { Horizontal, Content } from './styles';
import CardCategorie from '../../components/cardCategorie';
import Toolbar from '../../components/Toolbar';
import { categories } from '../../utils/mock';
import { ContainerGradient } from '../../utils/globalStyle';

export default function CategoriesList({ navigation }) {
  return (
    <ContainerGradient>
      <Toolbar title="Categorias" center />
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
    </ContainerGradient>
  );
}

CategoriesList.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
