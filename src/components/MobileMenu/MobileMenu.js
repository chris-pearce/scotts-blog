// @flow
import classnames from 'classnames';
import FocusTrap from 'focus-trap-react';

import {
  CloseOnEscape,
  ContactCtas,
  Container,
  Heading,
  MobileMenuTrigger,
  Nav,
} from 'src/components';
import { UI_SIZES } from 'src/constants';

type Props = {
  className?: string,
  onClick: Function,
};

const MobileMenu = (props: Props) => {
  const { onClick, className } = props;

  if (!onClick) return null;

  const id = 'mobile-menu-heading';

  return (
    <CloseOnEscape callback={onClick}>
      <div
        aria-labelledby={id}
        aria-modal="true"
        role="dialog"
        className={classnames('c-mobile-menu', className)}
      >
        <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
          <Container>
            <MobileMenuTrigger isOpen={false} onClick={onClick} />
            <div className="c-mobile-menu__inner">
              <Heading
                id={id}
                size={UI_SIZES.smallx}
                spacing={UI_SIZES.smallx}
                text="Navigate"
              />
              <Nav onClick={onClick} />
              <Heading
                size={UI_SIZES.smallx}
                spacing={UI_SIZES.base}
                text="Contact"
              />
              <ContactCtas />
            </div>
          </Container>
        </FocusTrap>
      </div>
    </CloseOnEscape>
  );
};

export default MobileMenu;
