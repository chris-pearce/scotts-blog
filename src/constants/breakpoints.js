// @flow
import { toEm } from 'src/utilities';

import tokens from './tokens.json';

export default Object.freeze({
  small2x: null,
  smallx: null,
  small: null,
  medium: toEm(tokens['bp-medium']),
  large: toEm(tokens['bp-large']),
  largex: null,
  large2x: null,
});
