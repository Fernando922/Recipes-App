import React from 'react';
import PropTypes from 'prop-types';
import { Container, Loading } from './styles';

export default function LoadingComponent({ children, active }) {
  return active ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    children
  );
}

LoadingComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
