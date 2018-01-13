// @flow
import Link from 'gatsby-link';

type Props = {
  isActive: boolean,
};

const Menu = (props: Props) => {
  const { isActive = false } = props;

  return isActive ? (
    <div className="c-menu">
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
  ) : null;
};

export { Menu };
