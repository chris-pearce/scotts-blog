// @flow
import { pxToRem } from 'src/utils/pxToRelativeUnit';
import rootFontSizes from 'src/constants/rootFontSizes';

const { app } = rootFontSizes;

/**
 * Root: 16
 * Decrease: 12, 8, 4
 * Increase: 20, 24, 28, 32, 40, 48, 56
 */
export default Object.freeze({
  spacingDefault: pxToRem(app),
  spacingLarge1x: pxToRem(app + 4),
  spacingLarge2x: pxToRem(app + 8),
  spacingLarge3x: pxToRem(app + 12),
  spacingLarge4x: pxToRem(app + 16),
  spacingLarge5x: pxToRem(app + 24),
  spacingLarge6x: pxToRem(app + 32),
  spacingLarge7x: pxToRem(app + 38),
  spacingSmall1x: pxToRem(app - 4),
  spacingSmall2x: pxToRem(app - 8),
  spacingSmall3x: pxToRem(app - 12),
});
