import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import uiSizes from 'src/constants/uiSizes';
import utilityClasses from 'src/constants/utilityClasses';
import './Heading.css';

export default function Heading(props) {
  const { id, isVisuallyHidden, rank, size, spacing, text } = props;
  const Tag = `h${rank}`;
  const rootClass = 'c-heading';

  return (
    <Tag
      className={classnames(rootClass, {
        [`${rootClass}--${size}`]: size,
        [`${utilityClasses.spacingDown}${spacing}`]: spacing,
        [utilityClasses.hideVisually]: isVisuallyHidden,
      })}
      id={id}
    >
      {text}
    </Tag>
  );
}

Heading.propTypes = {
  id: PropTypes.string,
  isVisuallyHidden: PropTypes.bool,
  rank: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  size: PropTypes.shape(uiSizes),
  spacing: PropTypes.shape(uiSizes),
  text: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  id: null,
  isVisuallyHidden: false,
  rank: 2,
  size: uiSizes.large2x,
  spacing: null,
};
