// @flow
import { Link } from 'gatsby';
import pageNames from 'src/constants/pageNames';
import toLowercaseHyphenDelimited from 'src/utils/toLowercaseHyphenDelimited';
import './Nav.css';

type Props = {
  isMobile?: boolean,
  onClick?: Function,
};

const data = [
  {
    id: 1,
    name: pageNames.whatToExpect,
  },
  {
    id: 2,
    name: pageNames.hoursAndFees,
  },
  {
    id: 3,
    name: pageNames.about,
  },
  {
    id: 4,
    name: pageNames.faqs,
  },
  {
    id: 5,
    name: pageNames.blog,
  },
  {
    id: 6,
    name: pageNames.contact,
  },
];

export default function(props: Props) {
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
}
