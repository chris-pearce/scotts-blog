import React from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import './UITransition.css';

/**
 * Transitions via "react-transition-group", see:
 * https://reactcommunity.org/react-transition-group/.
 *
 * There are 4 main states a transition can be in:
 *
 * ⇢ Entering
 * ⇢ Entered
 * ⇢ Exiting
 * ⇢ Exited
 */

export default function UITransition(props) {
  const { in: inProp, children, exitTimeout, onExited, type } = props;

  return (
    <Transition
      in={inProp}
      onExited={onExited}
      timeout={{ enter: 0, exit: exitTimeout }}
      unmountOnExit
    >
      {state =>
        React.cloneElement(React.Children.only(children), {
          className: `${type} is-${state}`,
        })
      }
    </Transition>
  );
}

UITransition.propTypes = {
  children: PropTypes.node.isRequired,
  exitTimeout: PropTypes.number,
  in: PropTypes.bool.isRequired,
  onExited: PropTypes.func,
  type: PropTypes.string,
};

UITransition.defaultProps = {
  exitTimeout: 150,
  onExited: () => {},
  type: 'scale-and-fade-from-top-right',
};
