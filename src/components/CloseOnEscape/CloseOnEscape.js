// @flow
import * as React from 'react';

import keyCodes from 'src/constants/keyCodes';

type Props = {
  children: React.Node,
  onKeydown: Function,
};

class CloseOnEscape extends React.Component<Props> {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.onKeydown);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.onKeydown);
    }
  }

  onKeydown = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === keyCodes.escape) return this.props.onKeydown();
  };

  render() {
    return React.Children.only(this.props.children);
  }
}

export default CloseOnEscape;
