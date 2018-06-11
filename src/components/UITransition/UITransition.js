// @flow
import * as React from 'react';
import { Transition } from 'react-transition-group';

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

type Props = {
  children: React.Node,
  exitTimeout?: number,
  in: boolean,
  onExited?: Function,
  type?: string,
};

const UITransition = (props: Props) => {
  const {
    in: inProp,
    children,
    exitTimeout = 150,
    onExited,
    type = 'scale-and-fade-from-top-right',
  } = props;

  return (
    <Transition
      in={inProp}
      onExited={onExited}
      timeout={{ enter: 0, exit: exitTimeout }}
      unmountOnExit
    >
      {state =>
        React.cloneElement(children, {
          className: `${type} is-${state}`,
        })
      }
    </Transition>
  );
};

export default UITransition;
