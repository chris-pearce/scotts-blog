import Header from './../Header/Header';

const Root = ({ children }) => (
  <div>
    <Header />
    <main role="main">{children()}</main>
  </div>
);

Root.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Root;
