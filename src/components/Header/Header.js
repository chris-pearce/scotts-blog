// @flow
import Media from 'react-media';

import { BREAKPOINTS } from 'constants/index';
import { Container, Nav, UITransition } from 'components';
import { Logo, Menu, MenuButton } from './innards';

type State = {
  isMenuOpen: boolean,
};

class Header extends React.Component<State> {
  state = {
    isMenuOpen: false,
  };

  onMenuToggle = () => {
    this.setState(
      prevState => ({ isMenuOpen: !prevState.isMenuOpen }),
      this.toggleRootClass
    );

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  toggleRootClass() {
    const root = document.documentElement;

    if (root) {
      root.classList.toggle('is-header-menu-open', this.state.isMenuOpen);
    }
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className="c-header">
        <Container>
          <div className="c-header__inner">
            <Logo />
            <Media query={`(max-width: ${BREAKPOINTS.palm})`}>
              {matches =>
                matches ? (
                  <div>
                    <MenuButton onClick={this.onMenuToggle} />
                    <UITransition in={isMenuOpen}>
                      <Menu onClick={this.onMenuToggle} />
                    </UITransition>
                  </div>
                ) : (
                  <Nav onClick={this.onMenuToggle} className="c-header__nav" />
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
