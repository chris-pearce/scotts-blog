// @flow
import tokens from 'src/constants/tokens.json';

export default function toEm(val: number) {
  return val ? `${val / tokens['root-unit']}em` : null;
}
