import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import pageNames from 'src/constants/pageNames';
import toLowercaseHyphenDelimited from 'src/utils/toLowercaseHyphenDelimited';
import './Nav.css';

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

export default function Nav(props) {
  const { isMobile, onClick } = props;
  const rootClass = 'c-nav';

  return (
    <nav
      className={classnames(rootClass, {
        [`${rootClass}--mobile`]: isMobile,
        [`${rootClass}--non-mobile`]: !isMobile,
      })}
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

Nav.propTypes = {
  isMobile: PropTypes.bool,
  onClick: PropTypes.func,
};

Nav.defaultProps = {
  isMobile: true,
  onClick: () => {},
};
