// @flow
import { Container } from 'src/components';
import { FRAGMENT_INDENTIFIERS } from 'src/constants';

type Props = {
  children: Function,
};

const Main = (props: Props) => {
  const { children } = props;

  if (!children) return null;

  return (
    <main className="c-main" id={`#${FRAGMENT_INDENTIFIERS.main}`}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
