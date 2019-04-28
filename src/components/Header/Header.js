import React from 'react';
import Media from 'react-media';
import ContactCtas from 'src/components/ContactCtas/ContactCtas';
import Container from 'src/components/Container/Container';
import Logo from 'src/components/Logo/Logo';
import MobileMenu from 'src/components/MobileMenu/MobileMenu';
import MobileMenuTrigger from 'src/components/MobileMenuTrigger/MobileMenuTrigger';
import Nav from 'src/components/Nav/Nav';
import UITransition from 'src/components/UITransition/UITransition';
import { a11y } from 'src/tokens';
import './Header.css';

console.log('\n\n All tokens: ', a11y.tapTarget);

export default class Header extends React.Component {
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
            {/* large1x bp */}
            <Media query="(max-width: 40em)">
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
