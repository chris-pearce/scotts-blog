// @flow
// Declare the app global variables here to prevent flow from failing when it
// encounters them

declare var React: $Exports<'react'>;

declare module 'assets/*' {
  declare module.exports: any;
}

declare module 'graphql' {
  declare module.exports: any;
}
