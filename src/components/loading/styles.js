import styled from 'styled-components/native';
import { PRIMARY } from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: PRIMARY,
})`
  align-self: center;
`;
