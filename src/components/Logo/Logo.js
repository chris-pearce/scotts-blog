import './Logo.css';
import logoImage from 'images/ccc-logo.svg';

const Logo = () => (
  <a href="/" className="c-logo" rel="home">
    <img src={logoImage} alt="City Chiropractor Care" />
  </a>
);

export default Logo;
