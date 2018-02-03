// @flow
import Link from 'gatsby-link';

import logoImage from 'images/logo.svg';

const Logo = () => (
  <Link className="c-header-logo" to="/">
    <img src={logoImage} alt="City Chiropractic Care" />
  </Link>
);

export { Logo };
