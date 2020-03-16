import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Title, LeftButton } from './styles';
import { WHITE } from '../../utils/colors';

export default function Toolbar({ title, leftAction }) {
  return (
    <Container leftAction={leftAction}>
      {leftAction && (
        <LeftButton onPress={leftAction}>
          <Icon name="chevron-left" color={WHITE} size={40} />
        </LeftButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
}

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  leftAction: PropTypes.func,
};

Toolbar.defaultProps = {
  leftAction: null,
};
