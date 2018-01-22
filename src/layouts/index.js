// @flow
import 'css/index.css';
import { Container, Header } from 'components';
import { UTILITY_CLASSES } from 'consts';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('what-input');
}

type Props = {
  children: Function,
};

const Root = (props: Props) => {
  const { children } = props;

  if (!children) return null;

  return (
    <div>
      <a className={UTILITY_CLASSES.hideVisually} href="#main">
        Skip to the main content
      </a>
      <Header />
      <main role="main" id="main">
        <Container>{children()}</Container>
      </main>
    </div>
  );
};

export default Root;
