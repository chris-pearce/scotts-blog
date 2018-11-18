// @flow
import * as React from 'react';
import Container from 'src/components/Container/Container';
import fragmentIdentifiers from 'src/constants/fragmentIdentifiers';
import './Main.css';

type Props = {
  children: React.Node,
};

export default function(props: Props) {
  const { children } = props;

  return (
    <main className="c-main" id={`#${fragmentIdentifiers.main}`}>
      <Container>{children}</Container>
    </main>
  );
}
