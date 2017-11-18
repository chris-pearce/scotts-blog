import Link from 'gatsby-link';

export const Header = () => (
  <div>
    <div>
      <h1>
        <Link to="/">Gatsby</Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.func.isRequired,
};
