// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
};

const MasterLayout = (props: Props) => {
  if (!props.children) return null;

  return <div className="c-master-layout">{props.children}</div>;
};

export default MasterLayout;
