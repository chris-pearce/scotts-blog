import React from 'react';
import PropTypes from 'prop-types';
import Container from 'src/components/Container/Container';
import fragmentIdentifiers from 'src/constants/fragmentIdentifiers';
import './Main.css';

export default function Main(props) {
  const { children } = props;

  return (
    <main className="c-main" id={`#${fragmentIdentifiers.main}`}>
      <Container>{children}</Container>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
