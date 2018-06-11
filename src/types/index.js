// @flow
import typeof { UI_SIZES } from 'src/constants/index';

export type SiteTitle = {
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  },
};

/**
 * UI.
 */

// Sizes
export type UISizes = $Keys<UI_SIZES>;
