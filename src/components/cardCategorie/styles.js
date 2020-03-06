import styled from 'styled-components/native';

import { WHITE, SECONDARY } from '../../utils/colors';

export const Container = styled.TouchableOpacity`
  height: 300px;
  width: 45%;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  flex: 1;
  border-radius: 8px;
`;

export const Title = styled.Text`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 8px;
  color: ${WHITE};
  background-color: ${SECONDARY};
`;
