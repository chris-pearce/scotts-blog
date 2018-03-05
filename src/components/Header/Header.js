// @flow
import { Component } from 'react';

import { Container, UITransition } from 'components';
import { Logo, Menu, MenuButton } from './innards';

type State = {
  isMenuOpen: boolean,
};

class Header extends Component<State> {
  state = {
    isMenuOpen: false,
  };

  onMenuToggle = () => {
    this.setState(
      ({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }),
      this.toggleRootClass
    );
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
      <header role="banner" className="c-header">
        <Container>
          <div className="c-header__inner">
            <Logo />
            <MenuButton onClick={this.onMenuToggle} />
            <UITransition in={isMenuOpen}>
              <Menu onClick={this.onMenuToggle} />
            </UITransition>
          </div>
        </Container>
      </header>
    );
  }
}

export { Header };
