// @flow
import { Container } from 'components';

type Props = {
  children: Function,
};

const MainContentContainer = (props: Props) => {
  const { children } = props;

  if (!children) return null;

  return (
    <main className="c-main" role="main" id="main">
      <Container>{children}</Container>
    </main>
  );
};

export { MainContentContainer };
