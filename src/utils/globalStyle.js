import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { PRIMARY, PRIMARY_LIGHT } from './colors';

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: [PRIMARY, PRIMARY_LIGHT],
})`
  flex: 1;
`;
