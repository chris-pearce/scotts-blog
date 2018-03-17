// @flow
import classnames from 'classnames';
import FocusTrap from 'focus-trap-react';

import { CloseOnEscape, Container, Heading, Nav } from 'components';
import { UI_SIZES } from 'constants/index';
import { MenuButton } from './../';
import { ContactCta } from './innards';

type Props = {
  onClick: Function,
  className?: string,
};

const Menu = (props: Props) => {
  const { onClick, className } = props;

  if (!onClick) return null;

  const id = 'menu-heading';

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
            <MenuButton isOpen={false} onClick={onClick} />
            <div className="c-header-menu__inner">
              <Heading
                id={id}
                size={UI_SIZES.smallx}
                spacing={UI_SIZES.smallx}
                text="Navigate"
              />
              <Nav className="c-header-menu__nav" onClick={onClick} />
              <Heading
                size={UI_SIZES.smallx}
                spacing={UI_SIZES.base}
                text="Contact"
              />
              <ContactCta href="tel:+612-9221-0771" text="Call us" />
              <ContactCta
                href="mailto:info@citychiropractor.com.au"
                text="Email us"
              />
            </div>
          </Container>
        </FocusTrap>
      </div>
    </CloseOnEscape>
  );
};
export { Menu };
