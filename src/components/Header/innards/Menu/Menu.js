// @flow
import Link from 'gatsby-link';

import { MenuButton } from './../MenuButton';

type Props = {
  onClick: Function,
};

const Menu = (props: Props) => {
  const { onClick } = props;

  if (!onClick) return null;

  return (
    <div
      aria-labelledby="menu-label"
      aria-modal="true"
      role="dialog"
      className="c-header-menu"
    >
      <MenuButton {...{ onClick }} isOpen={false} />
      <h2 className="hide-visually" id="menu-label">
        Main navigation and our phone number
      </h2>
      <nav>
        <ul>
          <li>
            <Link to="/what-to-expect/">What to Expect</Link>
          </li>
          <li>
            <Link to="/hours-and-fees/">Hours & Fees</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/faqs/">FAQs</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
      <a href="tel:+612-9221-0771">Call us</a>
    </div>
  );
};

export { Menu };
