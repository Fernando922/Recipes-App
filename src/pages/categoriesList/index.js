import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Horizontal, Content } from './styles';
import CardCategorie from '../../components/cardCategorie';
import Toolbar from '../../components/Toolbar';
import { ContainerGradient } from '../../utils/globalStyle';
import api from '../../services/api';
import Splash from '../../components/splash';

export default function CategoriesList({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function findCategories() {
      return api.get('/categories');
    }

    findCategories().then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  return loading ? (
    <Splash />
  ) : (
    <ContainerGradient>
      <Toolbar title="Categorias" center />
      <Content>
        <Horizontal>
          {categories.length > 0 &&
            categories.map(categorie => (
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
