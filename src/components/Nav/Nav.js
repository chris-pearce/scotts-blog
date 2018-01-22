// @flow
import Link from 'gatsby-link';

import { PAGE_NAMES } from 'consts';
import { toLowercaseHyphenDelimited } from 'utilities';

type Props = {
  onClick: Function,
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
  const { onClick } = props;

  if (!onClick) return null;

  return (
    <nav aria-label="Primary navigation">
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link
              {...{ onClick }}
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

export { Nav };
