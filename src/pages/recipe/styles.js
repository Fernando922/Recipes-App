import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerImage = styled.View`
  flex: 2;
`;

export const ContainerRecipe = styled.View`
  flex: 1;
`;

export const ContainerWrapper = styled.ScrollView.attrs({
  flex: 1,
})`
  flex: 3;
`;

export const Image = styled.Image``;

export const Ingredient = styled.Text``;

export const PrepareMode = styled.Text``;
