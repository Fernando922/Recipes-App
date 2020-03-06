import styled from 'styled-components/native';
import { PRIMARY, WHITE } from '../../utils/colors';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  background-color: ${PRIMARY};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${WHITE};
  font-weight: bold;
`;
