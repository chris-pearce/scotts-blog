// @flow
import classnames from 'classnames';
import FocusTrap from 'focus-trap-react';

import { CloseOnEscape, Container, Heading, Nav } from 'components';
import { UI_SIZES } from 'constants/index';
import { MenuButton } from './../MenuButton';

type Props = {
  onClick: Function,
  className?: string,
};

const Menu = (props: Props) => {
  const { onClick, className } = props;
  const id = 'menu-heading';

  if (!onClick) return null;

  return (
    <CloseOnEscape callback={onClick}>
      <div
        aria-labelledby={id}
        aria-modal="true"
        role="dialog"
        className={classnames('c-header-menu', className)}
      >
        <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
          <Container>
            <MenuButton {...{ onClick }} isOpen={false} />
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
        </FocusTrap>
      </div>
    </CloseOnEscape>
  );
};

export { Menu };
