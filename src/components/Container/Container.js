import './Container.css';

const Container = ({ children, size = 'large' }) => (
  <div className={`l-container l-container--${size}`}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['x-small', 'small', 'large', 'x-large']),
};

export default Container;
