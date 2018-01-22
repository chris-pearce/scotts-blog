// @flow
import { UI_SIZES } from 'consts';

/**
 * Children.
 */

export type Children = number | string | React$Element<any> | Array<any>;
export type ChildrenSpecificElementType = React$Element<any>;

/**
 * UI.
 */

// Sizes
export type UISizes =
  | UI_SIZES.small2x
  | UI_SIZES.smallx
  | UI_SIZES.small
  | UI_SIZES.base
  | UI_SIZES.large
  | UI_SIZES.largex
  | UI_SIZES.large2x
  | UI_SIZES.large3x
  | UI_SIZES.large4x
  | UI_SIZES.large5x
  | UI_SIZES.large6x;
