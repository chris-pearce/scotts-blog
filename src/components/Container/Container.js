import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import uiSizes from 'src/constants/uiSizes';
import './Container.css';

export default function Container(props) {
  const { children, size, tag: Tag } = props;
  const rootClass = 'c-container';

  return (
    <Tag
      className={classnames(rootClass, {
        [`${rootClass}--${size}`]: size,
        [`${rootClass}--is-inline`]: Tag === 'span',
      })}
    >
      {children}
    </Tag>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.shape(uiSizes),
  tag: PropTypes.oneOf(['div', 'span']),
};

Container.defaultProps = {
  size: uiSizes.default,
  tag: 'div',
};
