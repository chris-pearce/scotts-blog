// @flow
import * as React from 'react';
import classnames from 'classnames';
import type { UISizes } from 'src/types';
import './Container.css';

type Props = {
  children: React.Node,
  size?: UISizes,
  tag?: 'div' | 'span',
};

export default function(props: Props) {
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
}
