// @flow
import * as React from 'react';
import classnames from 'classnames';

import uiSizes from 'src/constants/uiSizes';
import './Container.css';

type Props = {
  children: React.Node,
  size?: $Keys<typeof uiSizes>,
  tag?: 'div' | 'span',
};

const Container = (props: Props) => {
  const { children, size, tag = 'div' } = props;
  const Tag = tag;
  const rootClass = 'c-container';

  return (
    <Tag
      className={classnames(rootClass, {
        [size ? `${rootClass}--${size}` : '']: size,
        [`${rootClass}--is-inline`]: tag === 'span',
      })}
    >
      {children}
    </Tag>
  );
};

export default Container;
