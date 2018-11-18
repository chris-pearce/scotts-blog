// @flow
import { pxToRem } from 'src/utils/pxToRelativeUnit';
import cssUnits from 'src/constants/cssUnits';
import rootFontSizes from 'src/constants/rootFontSizes';

const { app, userAgent } = rootFontSizes;

export default Object.freeze({
  typographySizeLarge: pxToRem(app + 2),
  typographySizeDefault: `${app / userAgent}${cssUnits.rem}`,
  typographySizeSmall: pxToRem(app - 2),
});
