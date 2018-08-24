// @flow
import a11y from './a11y';
import breakpoints from './breakpoints';
import colors from './colors';
import spacing from './spacing';
import transitions from './transitions';
import typography from './typography';
import zIndexes from './zIndexes';

export default Object.freeze({
  ...a11y,
  ...breakpoints,
  ...colors,
  ...spacing,
  ...transitions,
  ...typography,
  ...zIndexes,
});
