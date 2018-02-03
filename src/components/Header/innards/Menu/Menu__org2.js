// @flow
import { Transition } from 'react-transition-group';

import { Container, Heading, Nav } from 'components';
import { MenuButton } from './../MenuButton';

type Props = {
  isOpen: boolean,
  onClick: Function,
};

const Menu = (props: Props) => {
  const { isOpen, onClick } = props;
  const id = 'menu-heading';

  if (!isOpen && !onClick) return null;

  return (
    <Transition appear in={isOpen} timeout={1000}>
      {status => (
        <div
          aria-labelledby={id}
          aria-modal="true"
          role="dialog"
          className={`c-header-menu is-${status}`}
        >
          <Container>
            <MenuButton {...{ onClick }} isFocused isOpen={false} />
            <div className="c-header-menu__inner">
              <Heading id={id} size="smallx" spacing="smallx" text="Navigate" />
              <Nav {...{ onClick }} className="c-header-menu__nav" />
              <a href="tel:+612-9221-0771">Call us</a>
            </div>
          </Container>
        </div>
      )}
    </Transition>
  );
};

export { Menu };
