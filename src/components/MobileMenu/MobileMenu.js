// @flow
import classnames from 'classnames';
import FocusTrap from 'focus-trap-react';
import CloseOnEscape from 'src/components/CloseOnEscape/CloseOnEscape';
import ContactCtas from 'src/components/ContactCtas/ContactCtas';
import Container from 'src/components/Container/Container';
import Heading from 'src/components/Heading/Heading';
import MobileMenuTrigger from 'src/components/MobileMenuTrigger/MobileMenuTrigger';
import Nav from 'src/components/Nav/Nav';
import uiSizes from 'src/constants/uiSizes';
import './MobileMenu.css';

type Props = {
  className?: string,
  onClick: Function,
};

export default function(props: Props) {
  const { className, onClick } = props;
  const id = 'mobile-menu-heading';

  return (
    <CloseOnEscape onKeydown={onClick}>
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
                size={uiSizes.small2x}
                spacing={uiSizes.small2x}
                text="Navigate"
              />
              <Nav onClick={onClick} />
              <Heading
                size={uiSizes.small2x}
                spacing={uiSizes.default}
                text="Contact"
              />
              <ContactCtas />
            </div>
          </Container>
        </FocusTrap>
      </div>
    </CloseOnEscape>
  );
}
