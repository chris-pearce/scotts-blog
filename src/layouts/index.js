// @flow
// $FlowFixMe: nonexisting Flow definition for this file
import 'css/index.css';
import { Header, Main } from 'components';
import { FRAGMENT_INDENTIFIERS, UTILITY_CLASSES } from 'constants/index';

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
    <div className="root">
      <a
        className={UTILITY_CLASSES.hideVisually}
        href={`#${FRAGMENT_INDENTIFIERS.main}`}
      >
        Skip to the main content
      </a>
      <Header />
      <Main>{children()}</Main>
    </div>
  );
};

export default Root;
