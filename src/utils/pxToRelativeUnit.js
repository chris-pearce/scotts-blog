// @flow
import type { CssUnits } from 'src/types';
import cssUnits from 'src/constants/cssUnits';
import rootFontSizes from 'src/constants/rootFontSizes';

const { app, userAgent } = rootFontSizes;

const pxToRelativeUnit = (px: number, unit: CssUnits, root: number) =>
  `${Number((px / root).toFixed(2))}${unit}`;

export const pxToEm = (px: number) =>
  pxToRelativeUnit(px, cssUnits.em, userAgent);
export const pxToRem = (px: number) => pxToRelativeUnit(px, cssUnits.rem, app);
