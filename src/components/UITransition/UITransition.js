// @flow
import { Children, cloneElement } from 'react';
import { Transition } from 'react-transition-group';

import type { Children as ChildrenType } from 'types';

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
  duration?: number,
  in: boolean,
  type: string,
  children?: ChildrenType,
};

const UITransition = (props: Props) => {
  const { duration = 0, type, children } = props;
  const child = Children.only(children);

  if (!props.in && !type) return null;

  return (
    <Transition
      in={props.in}
      timeout={duration}
      // onExited={() =>
      //   setTimeout(() => console.log('Ive left the building'), 1250)
      // }
    >
      {state =>
        cloneElement(child, {
          transitionHook: `${type} is-${state}`,
        })
      }
    </Transition>
  );
};

export { UITransition };
