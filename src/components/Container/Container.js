// @flow
import classnames from 'classnames';

import { UI_SIZES } from 'constants/index';

type Props = {
  children: React.Node,
  size?: UI_SIZES.smallx | UI_SIZES.small | UI_SIZES.large | UI_SIZES.largex,
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

export { Container };
