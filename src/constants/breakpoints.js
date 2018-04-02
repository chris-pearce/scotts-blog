// @flow
import { toEm } from 'utilities';
import tokens from './tokens.json';

const BREAKPOINTS = Object.freeze({
  small2x: null,
  smallx: null,
  small: null,
  medium: toEm(tokens['bp-medium']),
  large: toEm(tokens['bp-large']),
  largex: null,
  large2x: null,
});

export { BREAKPOINTS };
