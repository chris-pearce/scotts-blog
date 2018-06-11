// @flow
import { Container } from 'src/components';

const Footer = () => (
  <footer className="c-footer">
    <Container>
      <small className="c-footer__copyright">
        © Copyright {new Date().getFullYear()} City Chiropractor Care.{' '}
        <span>
          Website by{' '}
          <a href="https://cjpearce.com" rel="external">
            Chris
          </a>{' '}
          &{' '}
          <a href="http://kllevin.com" rel="external">
            Kate
          </a>.
        </span>
      </small>
    </Container>
  </footer>
);

export default Footer;
