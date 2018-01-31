// @flow
import { UTILITY_CLASSES } from 'consts';
import { Container, Heading, Nav } from 'components';
import { MenuButton } from './../MenuButton';

type Props = {
  onClick: Function,
};

const Menu = (props: Props) => {
  const { onClick } = props;
  const id = 'menu-heading';

  if (!onClick) return null;

  return (
    <div
      aria-labelledby={id}
      aria-modal="true"
      role="dialog"
      className={`c-header-menu ${
        UTILITY_CLASSES.animations.scaleUpFromTopRight
      }`}
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
  );
};

export { Menu };
