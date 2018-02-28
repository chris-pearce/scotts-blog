// @flow
import classnames from 'classnames';

import type { UISizes } from 'types';
import { UI_SIZES, UTILITY_CLASSES } from 'constants/index';

type Props = {
  rank: 1 | 2 | 3 | 4 | 5 | 6,
  text: string,
  isVisuallyHidden?: boolean,
  spacing?: UISizes,
  size?:
    | UI_SIZES.smallx
    | UI_SIZES.small
    | UI_SIZES.base
    | UI_SIZES.large
    | UI_SIZES.largex
    | UI_SIZES.large2x,
};

const Heading = (props: Props) => {
  const {
    text,
    isVisuallyHidden,
    rank = 2,
    spacing,
    size = UI_SIZES.largex,
    ...moreProps
  } = props;
  const Tag = `h${rank.toString()}`;
  const rootClass = 'c-heading';

  if (!text) return null;

  return (
    <Tag
      {...moreProps}
      className={classnames(`${rootClass} ${rootClass}--${size}`, {
        [`${UTILITY_CLASSES.spacingDown}${
          spacing || undefined
        }`]: spacing,
        [UTILITY_CLASSES.hideVisually]: isVisuallyHidden,
      })}
    >
      {text}
    </Tag>
  );
};

export { Heading };
