import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './MobileMenuTrigger.css';

export default function MobileMenuTrigger(props) {
  const { isOpen, onClick } = props;
  const rootClass = 'c-mobile-menu-trigger';

  return (
    <button
      aria-label={`${isOpen ? 'Open' : 'Close'} menu`}
      className={classnames(rootClass, {
        [`${rootClass}--open`]: isOpen,
        [`${rootClass}--close`]: !isOpen,
      })}
      onClick={onClick}
      type="button"
    >
      <span />
    </button>
  );
}

MobileMenuTrigger.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

MobileMenuTrigger.defaultProps = {
  isOpen: true,
  onClick: () => {},
};
