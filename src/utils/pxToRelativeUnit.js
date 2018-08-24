// @flow
import type { CssUnits } from 'src/types';
import cssUnits from 'src/constants/cssUnits';
import rootPixelSizes from 'src/constants/rootPixelSizes';

const { rootPixelSizeSite, rootPixelSizeUserAgent } = rootPixelSizes;

const pxToRelativeUnit = (px: number, unit: CssUnits, root: number) =>
  px ? `${Number((px / root).toFixed(2))}${unit}` : null;

export const pxToEm = (px: number) =>
  pxToRelativeUnit(px, cssUnits.em, rootPixelSizeUserAgent);
export const pxToRem = (px: number) =>
  pxToRelativeUnit(px, cssUnits.rem, rootPixelSizeSite);
