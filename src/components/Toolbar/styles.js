import styled from 'styled-components/native';
import { PRIMARY, WHITE } from '../../utils/colors';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  background-color: ${PRIMARY};
  align-items: center;
  justify-content: ${props => (props.leftAction ? 'flex-start' : 'center')};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${WHITE};
  font-weight: bold;
`;

export const LeftButton = styled.TouchableOpacity``;
