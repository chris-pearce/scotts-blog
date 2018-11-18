// @flow
import { Link } from 'gatsby';
import logoImage from 'src/assets/images/logo.svg';
import './Logo.css';

export default function() {
  return (
    <Link className="c-logo" to="/">
      <img src={logoImage} alt="City Chiropractic Care" />
    </Link>
  );
}
