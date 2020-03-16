import styled from 'styled-components/native';
import { WHITE } from '../../utils/colors';

export const Container = styled.View`
  height: 150px;
  width: 100%;
  padding: 20px;
`;

export const ContainerButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${WHITE};
  border-radius: 10px;
  flex-direction: row;
`;

export const ContainerImage = styled.View`
  flex-grow: 1;
  border-radius: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  border-radius: 10px;
`;

export const Content = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
