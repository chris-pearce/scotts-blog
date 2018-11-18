// @flow
import { pxToEm } from 'src/utils/pxToRelativeUnit';

const breakpoints = {
  small1x: 480,
  small2x: 360,
  medium: 768,
  large1x: 992,
  large2x: 1200,
};

export default Object.freeze({
  breakpointLarge1x: pxToEm(breakpoints.large1x),
  breakpointLarge1xFrom: pxToEm(breakpoints.large1x + 1),
  breakpointLarge2x: pxToEm(breakpoints.large2x),
  breakpointLarge2xFrom: pxToEm(breakpoints.large2x + 1),
  breakpointMedium: pxToEm(breakpoints.medium),
  breakpointMediumFrom: pxToEm(breakpoints.medium + 1),
  breakpointSmall1x: pxToEm(breakpoints.small1x),
  breakpointSmall1xFrom: pxToEm(breakpoints.small1x + 1),
  breakpointSmall2x: pxToEm(breakpoints.small2x),
  breakpointSmall2xFrom: pxToEm(breakpoints.small2x + 1),
});
