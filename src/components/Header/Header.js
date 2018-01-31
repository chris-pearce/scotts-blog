// @flow
import { Component } from 'react';

import { CloseOnEscape, Container } from 'components';
import { Logo, Menu, MenuButton } from './innards';

type State = {
  isMenuButtonFocused: boolean,
  isMenuOpen: boolean,
};

class Header extends Component<State> {
  state = {
    isMenuButtonFocused: false,
    isMenuOpen: false,
  };

  onMenuToggle = () => {
    this.setState(
      prevState => ({ isMenuOpen: !prevState.isMenuOpen }),
      this.toggleRootClass
    );
  };

  onMenuClose = () => {
    this.onMenuToggle();
    this.focusMenuButton();
  };

  focusMenuButton = () => {
    this.setState({ isMenuButtonFocused: true });
  };

  // Toggle a class on the document to prevent vertical scrolling when the menu
  // is open
  toggleRootClass() {
    const root = document.documentElement;

    if (root) {
      root.classList.toggle('is-header-menu-open', this.state.isMenuOpen);
    }
  }

  render() {
    const { isMenuButtonFocused, isMenuOpen } = this.state;

    return (
      <header role="banner" className="c-header">
        <Container>
          <div className="c-header__inner">
            <Logo />
            {isMenuOpen ? (
              <CloseOnEscape callback={this.onMenuClose}>
                <Menu onClick={this.onMenuClose} />
              </CloseOnEscape>
            ) : (
              <MenuButton
                isFocused={isMenuButtonFocused}
                onClick={this.onMenuToggle}
              />
            )}
          </div>
        </Container>
      </header>
    );
  }
}

export { Header };
