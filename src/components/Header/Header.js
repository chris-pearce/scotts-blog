// @flow
import { Component } from 'react';

import { Container } from 'components';
import { Logo, Menu, MenuTrigger } from './innards';

type State = {
  isMenuOpen: boolean,
};

class Header extends Component<State> {
  state = {
    isMenuOpen: false,
  };

  handleMenuToggle = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header role="banner" className="c-header">
        <Container>
          <div className="c-header__inner">
            <Logo />
            <MenuTrigger
              isActive={isMenuOpen}
              onClick={this.handleMenuToggle}
            />
            <Menu isActive={isMenuOpen} />
          </div>
        </Container>
      </header>
    );
  }
}

export { Header };
