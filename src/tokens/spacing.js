import { pxToRem } from './utils';
import { rootFontSizes } from './config';

const { app } = rootFontSizes;

/**
 * Default: 16
 * Decrease: 12, 8, 4
 * Increase: 20, 24, 28, 32, 40, 48, 56
 */
export default {
  default: pxToRem(app),
  large1x: pxToRem(app + 4),
  large2x: pxToRem(app + 8),
  large3x: pxToRem(app + 12),
  large4x: pxToRem(app + 16),
  large5x: pxToRem(app + 24),
  large6x: pxToRem(app + 32),
  large7x: pxToRem(app + 38),
  small1x: pxToRem(app - 4),
  small2x: pxToRem(app - 8),
  small3x: pxToRem(app - 12),
};
