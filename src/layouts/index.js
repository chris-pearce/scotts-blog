// @flow
import 'css/index.css';
import 'what-input';
import { Header } from 'components';
import type { Children } from 'types';

type Props = {
  children: Children,
};

const Root = (props: Props) => (
  <div>
    <Header />
    <main role="main">{props.children}</main>
  </div>
);

export default Root;
