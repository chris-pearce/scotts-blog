import 'css/index.css';
import { SiteHeader } from 'components';

const Root = ({ children }) => (
  <div>
    <SiteHeader />
    <main role="main">{children()}</main>
  </div>
);

Root.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Root;
