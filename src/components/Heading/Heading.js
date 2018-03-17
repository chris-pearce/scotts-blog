// @flow
import * as React from 'react';
import classnames from 'classnames';

import type { UISizes } from 'types';
import { UI_SIZES, UTILITY_CLASSES } from 'constants/index';

const { ...ALLOWED_SIZES } = UI_SIZES;

type Props = {
  text: string,
  id?: string,
  isVisuallyHidden?: boolean,
  rank?: 1 | 2 | 3 | 4 | 5 | 6,
  spacing?: UISizes,
  size?: $Keys<typeof ALLOWED_SIZES>,
};

const Heading = (props: Props) => {
  const {
    text,
    id,
    isVisuallyHidden,
    rank = 2,
    spacing,
    size = UI_SIZES.largex,
  } = props;

  if (!text) return null;

  const Tag = `h${rank.toString()}`;
  const rootClass = 'c-heading';

  return (
    <Tag
      className={classnames(`${rootClass} ${rootClass}--${size}`, {
        [`${UTILITY_CLASSES.spacingDown}${spacing || ''}`]: spacing,
        [UTILITY_CLASSES.hideVisually]: isVisuallyHidden,
      })}
      id={id}
    >
      {text}
    </Tag>
  );
};

export { Heading };
