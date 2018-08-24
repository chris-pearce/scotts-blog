// @flow
import * as React from 'react';
import { Container } from 'src/components';
import { FRAGMENT_INDENTIFIERS } from 'src/constants';
import './Main.css';

type Props = {
  children: React.Node,
};

const Main = (props: Props) => (
  <main className="c-main" id={`#${FRAGMENT_INDENTIFIERS.main}`}>
    <Container>{props.children}</Container>
  </main>
);

export default Main;
