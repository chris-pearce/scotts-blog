import { pxToRem } from './utils';
import { rootFontSizes } from './config';

const { app, browser } = rootFontSizes;

export default {
  size: {
    default: `${app / browser}rem`,
    large: pxToRem(app + 2),
    small: pxToRem(app - 2),
  },
};
