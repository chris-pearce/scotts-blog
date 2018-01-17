// @flow
import { Children, Component } from 'react';

import { KEY_CODES } from 'constants';

type Props = {
  callback: Function,
};

class CloseOnEscape extends Component<Props> {
  componentDidMount() {
    document.addEventListener('keydown', this.invokeCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.invokeCallback);
  }

  invokeCallback(e) {
    if (e.keyCode !== KEY_CODES.escape) return null;

    return this.props.callback();
  }

  render() {
    return Children.only(this.props.children);
  }
}

export { CloseOnEscape };
