// @flow
import classNames from 'classnames';

import type { ChildrenSpecificElementType } from 'types';

type Props = {
  children: ChildrenSpecificElementType,
  size?: 'x-small' | 'small' | 'large' | 'x-large',
};

const Container = (props: Props) => {
  const { children, size } = props;
  const rootClass = 'c-container';

  if (!children) return null;

  return (
    <div className={classNames(rootClass, size && `${rootClass}--${size}`)}>
      {children}
    </div>
  );
};

export { Container };
