import styled from 'styled-components/native';
import { PRIMARY } from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${PRIMARY};
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;
