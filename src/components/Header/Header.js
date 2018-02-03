// @flow
import { Component } from 'react';
import { Transition } from 'react-transition-group';

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
      ({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }),
      this.toggleRootClass
    );
  };

  onMenuClose = () => {
    this.onMenuToggle();
    this.setState({
      isMenuButtonFocused: true,
    });
  };

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
            <Transition appear in={isMenuOpen} timeout={1250}>
              {status => (
                <Menu transitionStatus={status} onClick={this.onMenuClose} />
              )}
            </Transition>
            <MenuButton
              isFocused={isMenuButtonFocused}
              onClick={this.onMenuToggle}
            />
          </div>
        </Container>
      </header>
    );
  }
}

export { Header };
