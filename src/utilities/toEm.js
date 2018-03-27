// @flow
import { FONT_SIZES } from 'constants/font-sizes';

const toEm = (val: number) => val && `${val / FONT_SIZES.root}em`;

export { toEm };
