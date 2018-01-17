// @flow
import { Component } from 'react';

import { Container } from 'components';
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
      prevState => ({ isMenuOpen: !prevState.isMenuOpen }),
      this.toggleRootClass
    );
  };

  // Toggle a class on the `<html>` element that prevents vertical scrolling
  // when the menu is open
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
            {isMenuOpen ? (
              <Menu onClick={this.onMenuToggle} />
            ) : (
              <MenuButton onClick={this.onMenuToggle} />
            )}
          </div>
        </Container>
      </header>
    );
  }
}

export { Header };
