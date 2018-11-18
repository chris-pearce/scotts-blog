// @flow
import * as React from 'react';
import keyCodes from 'src/constants/keyCodes';

type Props = {
  children: React.Node,
  onKeydown: Function,
};

export default class CloseOnEscape extends React.Component<Props> {
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
    const { onKeydown } = this.props;

    if (event.key === keyCodes.escape) return onKeydown();
    return false;
  };

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}
