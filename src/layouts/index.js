// @flow
import 'css/index.css';
import { Header, MainContentContainer } from 'components';
import { UTILITY_CLASSES } from 'constants/index';

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
      <MainContentContainer>{children()}</MainContentContainer>
    </div>
  );
};

export default Root;
