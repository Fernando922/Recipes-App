import styled from 'styled-components/native';
import { WHITE } from '../../utils/colors';

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
  padding: 20px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const ContentCard = styled.View`
  background-color: ${WHITE};
  margin-bottom: 24px;
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

export const ItemList = styled.Text``;

export const NoTip = styled.Text`
  margin-top: 16px;
  text-align: center;
`;
