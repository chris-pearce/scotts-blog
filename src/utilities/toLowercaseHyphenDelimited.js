// @flow
const toLowercaseHyphenDelimited = (str: string) =>
  str && str.replace(/\s+/g, '-').toLowerCase();

export { toLowercaseHyphenDelimited };
