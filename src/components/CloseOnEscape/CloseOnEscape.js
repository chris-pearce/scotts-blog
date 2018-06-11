// @flow
import * as React from 'react';

import { KEY_CODES } from 'src/constants';

type Props = {
  callback: Function,
  children: React.Node,
};

const document = global.document.querySelector('document');

class CloseOnEscape extends React.Component<Props> {
  componentDidMount() {
    document.addEventListener('keydown', this.invokeCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.invokeCallback);
  }

  invokeCallback = (event: SyntheticKeyboardEvent<>) => {
    const { callback } = this.props;

    if (event.key !== KEY_CODES.escape) return null;

    return callback();
  };

  render() {
    const { callback, children } = this.props;

    if (!callback && !children) return null;

    return children;
  }
}

export default CloseOnEscape;
