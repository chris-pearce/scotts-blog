// @flow
import * as React from 'react';
import classnames from 'classnames';

import { UI_SIZES } from 'src/constants';

const { ...ALLOWED_SIZES } = UI_SIZES;

type Props = {
  children: React.Node,
  size?: $Keys<typeof ALLOWED_SIZES>,
  tag?: 'div' | 'span',
};

const Container = (props: Props) => {
  const { children, size, tag = 'div' } = props;

  if (!children) return null;

  const Tag = tag;
  const rootClass = 'c-container';

  return (
    <Tag
      className={classnames(rootClass, size && `${rootClass}--${size}`, {
        [`${rootClass}--is-inline`]: tag === 'span',
      })}
    >
      {children}
    </Tag>
  );
};

export default Container;
