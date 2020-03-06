import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

export default function Toolbar({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
};
