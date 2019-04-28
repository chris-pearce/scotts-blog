import React from 'react';
import PropTypes from 'prop-types';
import keyCodes from 'src/constants/keyCodes';

export default class CloseOnEscape extends React.Component {
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

  onKeydown = event => {
    const { onKeydown } = this.props;

    if (event.key === keyCodes.escape) return onKeydown();
    return false;
  };

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

CloseOnEscape.propTypes = {
  children: PropTypes.element.isRequired,
  onKeydown: PropTypes.func.isRequired,
};
