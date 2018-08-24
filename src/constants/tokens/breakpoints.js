// @flow
import { pxToEm } from 'src/utils/pxToRelativeUnit';

const breakpoints = {
  small1X: 360,
  small: 480,
  medium: 768,
  large: 992,
  large1X: 1200,
};

export default Object.freeze({
  breakpointLarge: pxToEm(breakpoints.large),
  breakpointLargeFrom: pxToEm(breakpoints.large + 1),
  breakpointLarge1X: pxToEm(breakpoints.large1X),
  breakpointLarge1XFrom: pxToEm(breakpoints.large1X + 1),
  breakpointMedium: pxToEm(breakpoints.medium),
  breakpointMediumFrom: pxToEm(breakpoints.medium + 1),
  breakpointSmall1X: pxToEm(breakpoints.small1X),
  breakpointSmall1XFrom: pxToEm(breakpoints.small1X + 1),
  breakpointSmall: pxToEm(breakpoints.small),
  breakpointSmallFrom: pxToEm(breakpoints.small + 1),
});
