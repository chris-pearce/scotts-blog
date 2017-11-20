import { Container, Logo } from 'components';

const SiteHeader = () => (
  <header role="banner" className="l-header">
    <Container>
      <Logo />
    </Container>
  </header>
);

// Header.propTypes = {
//   children: PropTypes.func.isRequired,
// };

export { SiteHeader };
