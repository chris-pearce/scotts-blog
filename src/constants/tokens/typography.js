// @flow
import { pxToRem } from 'src/utils/pxToRelativeUnit';

import cssUnits from '../cssUnits';
import rootPixelSizes from '../rootPixelSizes';

const { rootPixelSizeSite, rootPixelSizeUserAgent } = rootPixelSizes;

export default Object.freeze({
  typographySizeLarge: pxToRem(rootPixelSizeSite + 2),
  typographySizeRoot: `${rootPixelSizeSite / rootPixelSizeUserAgent}${
    cssUnits.rem
  }`,
  typographySizeSmall: pxToRem(rootPixelSizeSite - 2),
});
