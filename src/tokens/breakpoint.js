import { mq } from './utils';

const bp = {
  large1x: 992,
  large2x: 1200,
  medium: 768,
  small1x: 480,
  small2x: 360,
};

export default {
  large1x: {
    from: mq(bp.large1x, false),
    upTo: mq(bp.large1x),
  },
  large2x: {
    from: mq(bp.large2x, false),
    upTo: mq(bp.large2x),
  },
  medium: {
    from: mq(bp.medium, false),
    upTo: mq(bp.medium),
  },
  small1x: {
    from: mq(bp.small1x, false),
    upTo: mq(bp.small1x),
  },
  small2x: {
    from: mq(bp.large2x, false),
    upTo: mq(bp.large2x),
  },
};
