// @flow
import Media from 'react-media';
import ContactCtas from 'src/components/ContactCtas/ContactCtas';
import Container from 'src/components/Container/Container';
import Logo from 'src/components/Logo/Logo';
import MobileMenu from 'src/components/MobileMenu/MobileMenu';
import MobileMenuTrigger from 'src/components/MobileMenuTrigger/MobileMenuTrigger';
import Nav from 'src/components/Nav/Nav';
import UITransition from 'src/components/UITransition/UITransition';
import breakpoints from 'src/constants/tokens/breakpoints';
import './Header.css';

type State = {
  isMobileMenuOpen: boolean,
};

export default class Header extends React.Component<{}, State> {
  state = {
    isMobileMenuOpen: false,
  };

  onMobileMenuToggle = () => {
    this.setState(
      prevState => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }),
      this.toggleRootClass
    );

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  toggleRootClass() {
    const { isMobileMenuOpen } = this.state;
    const root = document.documentElement;

    if (root) {
      root.classList.toggle('is-mobile-menu-open', isMobileMenuOpen);
    }
  }

  render() {
    const { isMobileMenuOpen } = this.state;

    return (
      <header className="c-header">
        <Container>
          <div className="c-header__inner">
            <Logo />
            <Media query={`(max-width: ${breakpoints.breakpointLarge1x})`}>
              {matches =>
                matches ? (
                  <>
                    <MobileMenuTrigger onClick={this.onMobileMenuToggle} />
                    <UITransition in={isMobileMenuOpen}>
                      <MobileMenu onClick={this.onMobileMenuToggle} />
                    </UITransition>
                  </>
                ) : (
                  <div className="c-header__non-mobile-nav">
                    <ContactCtas isAlternateStyle />
                    <Nav isMobile={false} />
                  </div>
                )
              }
            </Media>
          </div>
        </Container>
      </header>
    );
  }
}
