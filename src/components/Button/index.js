import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

const Button = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default Button;

Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  loading: false,
};
