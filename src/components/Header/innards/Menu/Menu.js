// @flow
import classnames from 'classnames';

import { Container, Heading, Nav } from 'components';
import { UI_SIZES } from 'constants/index';
import { MenuButton } from './../MenuButton';

type Props = {
  onClick: Function,
  transitionHook?: string,
};

const Menu = (props: Props) => {
  const { onClick, transitionHook } = props;
  const id = 'menu-heading';

  if (!onClick) return null;

  return (
    <div
      aria-labelledby={id}
      aria-modal="true"
      role="dialog"
      className={classnames('c-header-menu', transitionHook)}
    >
      <Container>
        <MenuButton {...{ onClick }} isFocused isOpen={false} />
        <div className="c-header-menu__inner">
          <Heading
            {...{ id }}
            size={UI_SIZES.smallx}
            spacing={UI_SIZES.smallx}
            text="Navigate"
          />
          <Nav {...{ onClick }} className="c-header-menu__nav" />
          <a href="tel:+612-9221-0771">Call us</a>
        </div>
      </Container>
    </div>
  );
};

export { Menu };
