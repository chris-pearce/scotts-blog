// @flow
import Link from 'gatsby-link';

import logoImage from 'src/assets/images/logo.svg';

const Logo = () => (
  <Link className="c-logo" to="/">
    <img src={logoImage} alt="City Chiropractic Care" />
  </Link>
);

export default Logo;
