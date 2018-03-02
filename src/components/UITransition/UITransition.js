// @flow
import { cloneElement } from 'react';
import { Transition } from 'react-transition-group';

import type { Children } from 'types';

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
  in: boolean,
  children: Children,
  exitDuration?: number,
  type?: string,
};

const UITransition = (props: Props) => {
  const {
    in: inProp,
    children,
    exitDuration = 150,
    type = 'scale-and-fade-from-top-right',
  } = props;

  return (
    <Transition
      in={inProp}
      timeout={{ enter: 0, exit: exitDuration }}
      unmountOnExit
    >
      {state =>
        cloneElement(children, {
          transitionHook: `${type} is-${state}`,
        })
      }
    </Transition>
  );
};

export { UITransition };
