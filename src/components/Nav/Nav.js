// @flow
import Link from 'gatsby-link';

import { PAGE_NAMES } from 'src/constants';
import { toLowercaseHyphenDelimited } from 'src/utilities';
import './Nav.css';

type Props = {
  isMobile?: boolean,
  onClick?: Function,
};

const data = [
  {
    id: 1,
    name: PAGE_NAMES.whatToExpect,
  },
  {
    id: 2,
    name: PAGE_NAMES.hoursAndFees,
  },
  {
    id: 3,
    name: PAGE_NAMES.about,
  },
  {
    id: 4,
    name: PAGE_NAMES.faqs,
  },
  {
    id: 5,
    name: PAGE_NAMES.blog,
  },
  {
    id: 6,
    name: PAGE_NAMES.contact,
  },
];

const Nav = (props: Props) => {
  const { isMobile = true, onClick } = props;
  const rootClass = 'c-nav';

  return (
    <nav
      className={`${rootClass} ${rootClass}--${
        isMobile ? 'mobile' : 'non-mobile'
      }`}
    >
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link
              onClick={onClick}
              to={`/${toLowercaseHyphenDelimited(item.name)}/`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
