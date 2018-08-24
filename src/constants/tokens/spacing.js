// @flow
import { pxToRem } from 'src/utils/pxToRelativeUnit';

import rootPixelSizes from '../rootPixelSizes';

const { rootPixelSizeSite } = rootPixelSizes;

/**
 * Root: 16
 * Decrease: 12, 8, 4
 * Increase: 20, 24, 28, 32, 40, 48, 56
 */
export default Object.freeze({
  spacingLarge: pxToRem(rootPixelSizeSite + 4),
  spacingLarge1X: pxToRem(rootPixelSizeSite + 8),
  spacingLarge2X: pxToRem(rootPixelSizeSite + 12),
  spacingLarge3X: pxToRem(rootPixelSizeSite + 16),
  spacingLarge4X: pxToRem(rootPixelSizeSite + 24),
  spacingLarge5X: pxToRem(rootPixelSizeSite + 32),
  spacingLarge6X: pxToRem(rootPixelSizeSite + 38),
  spacingRoot: pxToRem(rootPixelSizeSite),
  spacingSmall: pxToRem(rootPixelSizeSite - 4),
  spacingSmall1X: pxToRem(rootPixelSizeSite - 8),
  spacingSmall2X: pxToRem(rootPixelSizeSite - 12),
});
