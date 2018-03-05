// @flow
import { Component } from 'react';

import { KEY_CODES } from 'constants/index';

type Props = {
  callback: Function,
  children: React.Node,
};

class CloseOnEscape extends Component<Props> {
  componentDidMount() {
    document.addEventListener('keydown', this.invokeCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.invokeCallback);
  }

  invokeCallback = (e: SyntheticKeyboardEvent<HTMLElement>) => {
    const { callback } = this.props;

    if (e.keyCode !== KEY_CODES.escape) return null;

    return callback();
  };

  render() {
    const { callback, children } = this.props;

    if (!callback && !children) return null;

    return children;
  }
}

export { CloseOnEscape };
