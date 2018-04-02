// @flow
import tokens from './../constants/tokens.json';

const toEm = (val: number) => val && `${val / tokens['root-unit']}em`;

export { toEm };
