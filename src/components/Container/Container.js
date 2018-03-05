// @flow
import classnames from 'classnames';

import { UI_SIZES } from 'constants/index';

type Props = {
  children: React.Node,
  isFlex?: boolean,
  size?: UI_SIZES.smallx | UI_SIZES.small | UI_SIZES.large | UI_SIZES.largex,
};

const Container = (props: Props) => {
  const { children, isFlex = false, size } = props;
  const rootClass = 'c-container';

  if (!children) return null;

  return (
    <div
      className={classnames(rootClass, size && `${rootClass}--${size}`, {
        [`${rootClass}--is-flex`]: isFlex,
      })}
    >
      {children}
    </div>
  );
};

export { Container };
