// @flow
import * as React from 'react';
import classnames from 'classnames';
import type { UISizes } from 'src/types';
import uiSizes from 'src/constants/uiSizes';
import utilityClasses from 'src/constants/utilityClasses';

type Props = {
  id?: string,
  isVisuallyHidden?: boolean,
  rank?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: UISizes,
  spacing?: UISizes,
  text: string,
};

export default function(props: Props) {
  const {
    text,
    id,
    isVisuallyHidden,
    rank = 2,
    spacing,
    size = uiSizes.large2x,
  } = props;
  const Tag = `h${rank.toString()}`;
  const rootClass = 'c-heading';

  return (
    <Tag
      className={classnames(`${rootClass} ${rootClass}--${size}`, {
        [`${utilityClasses.spacingDown}${spacing || ''}`]: spacing,
        [utilityClasses.hideVisually]: isVisuallyHidden,
      })}
      id={id}
    >
      {text}
    </Tag>
  );
}
