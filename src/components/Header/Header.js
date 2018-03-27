// @flow
import { Fragment } from 'react';
import Media from 'react-media';

import { BREAKPOINTS } from 'constants/index';
import {
  ContactCtas,
  Container,
  Logo,
  MobileMenu,
  MobileMenuTrigger,
  Nav,
  UITransition,
} from 'components';

type State = {
  isMobileMenuOpen: boolean,
};

class Header extends React.Component<{}, State> {
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
    const root = document.documentElement;

    if (root) {
      root.classList.toggle('is-mobile-menu-open', this.state.isMobileMenuOpen);
    }
  }

  render() {
    const { isMobileMenuOpen } = this.state;

    return (
      <header className="c-header">
        <Container>
          <div className="c-header__inner">
            <Logo />
            <Media query={`(max-width: ${BREAKPOINTS.large})`}>
              {matches =>
                matches ? (
                  <Fragment>
                    <MobileMenuTrigger onClick={this.onMobileMenuToggle} />
                    <UITransition in={isMobileMenuOpen}>
                      <MobileMenu onClick={this.onMobileMenuToggle} />
                    </UITransition>
                  </Fragment>
                ) : (
                  <div className="c-header__non-mobile-nav">
                    <ContactCtas />
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

export { Header };
